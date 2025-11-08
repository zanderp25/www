import os, uuid, bcrypt, json, re, threading, time
from datetime import datetime, timedelta
from flask import *
from werkzeug import datastructures
from hashes import token_hash, password_hash

app = Flask(__name__)
keys = []
DEV = False

# Store for async tasks
processing_tasks = {}

@app.route('/')
def index():
    redirect('https://zanderp25.com')
    return "Hi"

@app.route('/robots.txt')
def robots():
    return send_file("robots.txt")

@app.route('/<path:path>')
def media(path):
    if os.path.isdir(os.path.join('media', path)):
        if path.startswith('confidential'):
            return 'Unauthorized', 401
        # generate the index
        files = os.listdir(os.path.join('media', path))
        files.sort()
        index = open("fileIndex.html").read()
        file_data = ""
        for file in files:
            file_path = "/".join([path, file])
            file_size = os.path.getsize(os.path.join('media', file_path))
            is_dir = os.path.isdir(os.path.join('media', file_path))
            file_path = file_path.replace(' ', '%20') # for URLs
            file_data += f'{{"name":"{file}", "size": {file_size}, "path": "{file_path}", "isDir": {"true" if is_dir else "false"}}},'
        file_data = file_data.rstrip(',')
        pattern = r"\/\/ DATA START\n([\s\S]*)\n\/\/ DATA END"
        data = f'// DATA START\nlet pwd = "/{path}";\nlet files = [{file_data}];\n// DATA END'
        index = re.sub(pattern, data, index)
        return index
    download = "download" in request.args
    return send_from_directory('media', path, as_attachment=download)

@app.route('/favicon.ico')
def favicon():
    return send_file("ZP25 Circle.png")

@app.route('/upload', methods=['POST'])
def upload():
    token = request.headers.get('Authorization')
    if token:
        if not bcrypt.checkpw(token.encode(), token_hash):
            return 'Unauthorized', 401
    else:
        return 'Unauthorized', 401
    file = request.files.get('file')
    if file is None:
        return 'No file', 400
    filename = save_file(file)
    return get_path(filename)

@app.route('/upload', methods=['GET'])
def upload_client():
    key = request.args.get('k')
    if key:
        if not key_matches(key):
            return 'Unauthorized', 401
        else:
            return open('upload.html').read().replace('name="password">', f'name="password" value="{key}">')
    return send_file('upload.html')

@app.route('/uploadfile', methods=['POST'])
def uploadfile():
    password = request.form.get('password')
    if password is None:
        return 'Unauthorized', 401
    if password == "n0t_a_p455w0rd":
        return "Did you actually think that was going to work? lol", 401
    if key_matches(password):
        use_key(password)
    elif not bcrypt.checkpw(password.encode(), password_hash):
        return 'Unauthorized', 401
    file = request.files.get('file')
    if file is None:
        return 'No file', 400
    filename = save_file(file)
    url = get_path(filename)
    if not os.path.exists('media/qrgen'):
        os.mkdir('media/qrgen')
    os.system(f'qrencode -o media/qrgen/{filename}.png {url}')
    qr_url = get_path(f'qrgen/{filename}.png')
    return open('uploadfile.html')\
        .read()\
        .replace('$URL', url)\
        .replace('$QRURL', qr_url)\
        .replace('$NAME', filename)

@app.route('/uploadlink')
def uploadlink():
    return send_file('uploadlink.html')

@app.route('/uploadlink', methods=['POST'])
def uploadlink_post():
    max_uses = int(request.form.get('max_uses'))
    max_age = int(request.form.get('max_age'))
    units = request.form.get('units')
    password = request.form.get('password')

    if password is None:
        return 'Unauthorized', 401
    if password == "n0t_a_p455w0rd":
        return "Did you actually think that was going to work? lol", 401
    if not bcrypt.checkpw(password.encode(), password_hash):
        return 'Unauthorized', 401
    
    switcher = {
        "minutes": timedelta(minutes=max_age),
        "hours": timedelta(hours=max_age),
        "days": timedelta(days=max_age),
        "weeks": timedelta(weeks=max_age)
    }
    
    max_age = switcher.get(units, "Invalid units")
    
    if max_age == "Invalid units":
        return 'Invalid units', 400
    
    key = str(uuid.uuid4())[:8]
    keys.append({'key': key, 'max_uses': max_uses, 'max_age': datetime.utcnow() + max_age})
    sync_keys()
    
    domain = 'http://localhost:3500' if DEV else 'https://media.zanderp25.com'

    os.system(f'qrencode -o media/qrgen/key-{key}.png {domain}/upload?k={key}')
    qr_url = get_path(f'qrgen/key-{key}.png')

    return open('uploadfile.html')\
        .read()\
        .replace('$URL', f'{domain}/upload?k={key}')\
        .replace('Saved as $NAME', f'Expires {datetime.utcnow() + max_age}, {max_uses} uses left')\
        .replace('$NAME', "New Link")\
        .replace('$QRURL', f'{domain}/qrgen/key-{key}.png')

def key_matches(key: str):
    for i in range(len(keys)):
        if keys[i]['key'] == key:
            if keys[i]['max_age'] < datetime.utcnow():
                keys.pop(i)
                sync_keys()
                return False
            return True
    return False

def use_key(key: str):
    for i in range(len(keys)):
        if keys[i]['key'] == key:
            keys[i]['max_uses'] -= 1
            if keys[i]['max_uses'] <= 0:
                keys.pop(i)
            sync_keys()
            return True
    return False

def sync_keys():
    keysData = []
    for key in keys:
        keysData += [{'key': key['key'], 'max_uses': key['max_uses'], 'max_age': key['max_age'].isoformat()}]
    json.dump(keysData, open('keys.json', 'w'), indent=4)

@app.route('/managelinks', methods=['GET'])
def managelinks():
    return send_file('managelinks.html')

@app.route('/managelinks', methods=['POST'])
def managelinks_post():
    password = request.form.get('password')
    action = request.form.get('action')

    if password is None:
        return 'Unauthorized', 401
    if not bcrypt.checkpw(password.encode(), password_hash):
        return 'Unauthorized', 401
    
    match action:
        case 'get':
            return json.dumps(keys)
        case 'delete':
            key = request.form.get('key')
            if key is None:
                return 'Invalid key', 400
            for i in range(len(keys)):
                if keys[i]['key'] == key:
                    keys.pop(i)
                    sync_keys()
                    return json.dumps(keys), 200
            return 'Invalid key', 400
        case 'add':
            max_uses = int(request.form.get('max_uses'))
            max_age = int(request.form.get('max_age'))
            units = request.form.get('units')
            switcher = {
                "minutes": timedelta(minutes=max_age),
                "hours": timedelta(hours=max_age),
                "days": timedelta(days=max_age),
                "weeks": timedelta(weeks=max_age)
            }
            max_age = switcher.get(units, "Invalid units")
            if max_age == "Invalid units":
                return 'Invalid units', 400
            key = str(uuid.uuid4())[:8]
            keys.append({'key': key, 'max_uses': max_uses, 'max_age': datetime.utcnow() + max_age})
            return json.dumps(keys), 200
        case 'edit':
            key = request.form.get('key')
            if key is None:
                return 'Invalid key', 400
            for i in range(len(keys)):
                if keys[i]['key'] == key:
                    max_uses = int(request.form.get('max_uses'))
                    max_age = datetime.fromisoformat(request.form.get('max_age'))
                    keys[i]['max_uses'] = max_uses
                    keys[i]['max_age'] = max_age
                    sync_keys()
                    return json.dumps(keys), 200
            return 'Invalid key', 400
        case action:
            return f'Invalid action "{action}"', 400

@app.route('/artifactsDoc', methods=['GET'])
def artifactsdoc_client():
    return send_file('artifactsupload.html')

@app.route('/artifactsDoc', methods=['POST'])
def artifactsdoc_post():
    try:
        file = request.files.get('file')
        if file is None:
            return render_error_page('No file provided', 'Please select a JSON file to upload.'), 400
        
        # Check if file is JSON
        if not file.filename.lower().endswith('.json'):
            return render_error_page('Invalid file type', 'Only JSON files are allowed. Please upload a .json file.'), 400
        
        # Check if file is empty
        if file.filename == '':
            return render_error_page('No file selected', 'Please select a JSON file to upload.'), 400
        
        # Save the uploaded JSON file temporarily
        json_filename = f"temp_{str(uuid.uuid4())[:6]}.json"
        
        # Get the directory where this script is running from (should be /media)
        script_dir = os.path.dirname(os.path.abspath(__file__))
        artifacts_dir = os.path.join(script_dir, 'media', 'artifacts')
        json_path = os.path.join(artifacts_dir, json_filename)
        
        # Ensure media/artifacts directory exists
        if not os.path.exists(artifacts_dir):
            os.makedirs(artifacts_dir)
        
        file.save(json_path)
        
        # Convert to absolute path for the artifact processor
        absolute_json_path = os.path.abspath(json_path)
        
        # Validate JSON format
        try:
            with open(json_path, 'r') as f:
                json_data = json.load(f)
            
            # Basic validation - check if it has artifacts key
            if 'artifacts' not in json_data:
                os.remove(json_path)
                return render_error_page('Invalid JSON structure', 'The JSON file must contain an "artifacts" key with artifact data.'), 400
                
        except json.JSONDecodeError as e:
            os.remove(json_path)
            return render_error_page('Invalid JSON format', f'The file is not a valid JSON: {str(e)}'), 400
        
        # Start asynchronous document generation
        task_id = str(uuid.uuid4())
        processing_tasks[task_id] = {
            'status': 'processing',
            'progress_message': 'Validating JSON file...',
            'created_at': datetime.now()
        }
        
        # Start background thread
        thread = threading.Thread(
            target=generate_document_async,
            args=(task_id, absolute_json_path, artifacts_dir)
        )
        thread.daemon = True
        thread.start()
        
        # Return processing page immediately
        return render_processing_page(task_id)
        
    except ImportError as e:
        # Clean up the temporary JSON file in case of error
        if 'json_path' in locals() and os.path.exists(json_path):
            os.remove(json_path)
        return render_error_page('Missing dependencies', f'Required Python packages are not installed: {str(e)}'), 500
    except Exception as e:
        # Clean up the temporary JSON file in case of error
        if 'json_path' in locals() and os.path.exists(json_path):
            os.remove(json_path)
        return render_error_page('Processing error', f'An error occurred while generating the document: {str(e)}'), 500

def generate_document_async(task_id, json_path, artifacts_dir):
    """Generate document in background thread"""
    try:
        from artifacts.artifactDoc import generate_artifacts_doc
        
        # Update progress
        processing_tasks[task_id]['progress_message'] = 'Generating document...'
        
        # Generate the document
        docx_filename = f"artifacts_{str(uuid.uuid4())[:6]}.docx"
        docx_path = os.path.join(artifacts_dir, docx_filename)
        absolute_docx_path = os.path.abspath(docx_path)
        
        output_path = generate_artifacts_doc(json_path, absolute_docx_path)
        
        # Clean up the temporary JSON file
        os.remove(json_path)
        
        # Mark as completed
        document_url = f"/artifacts/{docx_filename}?download=true"
        processing_tasks[task_id] = {
            'status': 'completed',
            'document_url': document_url,
            'success_url': f'/artifactsDoc/success?url={document_url}',
            'completed_at': datetime.now()
        }
        
    except Exception as e:
        # Clean up on error
        if os.path.exists(json_path):
            os.remove(json_path)
        
        processing_tasks[task_id] = {
            'status': 'error',
            'error_message': str(e),
            'failed_at': datetime.now()
        }

@app.route('/artifactsDoc/status/<task_id>')
def artifactsdoc_status(task_id):
    """Check status of document generation task"""
    if task_id not in processing_tasks:
        return jsonify({'status': 'error', 'error_message': 'Task not found'}), 404
    
    task = processing_tasks[task_id]
    
    # Clean up old tasks (older than 10 minutes)
    cleanup_old_tasks()
    
    return jsonify(task)

@app.route('/artifactsDoc/success')
def artifactsdoc_success():
    """Show success page with download URL"""
    download_url = request.args.get('url', '')
    if not download_url:
        return render_error_page('Invalid request', 'No download URL provided.'), 400
    
    return render_success_page(download_url)

def cleanup_old_tasks():
    """Remove tasks older than 10 minutes"""
    cutoff_time = datetime.now() - timedelta(minutes=10)
    tasks_to_remove = []
    
    for task_id, task in processing_tasks.items():
        task_time = task.get('created_at') or task.get('completed_at') or task.get('failed_at')
        if task_time and task_time < cutoff_time:
            tasks_to_remove.append(task_id)
    
    for task_id in tasks_to_remove:
        del processing_tasks[task_id]

def render_error_page(error_title, error_message):
    """Render a user-friendly error page"""
    try:
        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        error_template_path = os.path.join(script_dir, 'error.html')
        
        with open(error_template_path, 'r') as f:
            error_html = f.read()
        
        # Replace placeholders with actual values
        error_html = error_html.replace('$ERROR_TITLE', error_title)
        error_html = error_html.replace('$ERROR_MESSAGE', error_message)
        
        return error_html
    except Exception as e:
        # Fallback to basic error message if template file is missing
        return f"""
        <html>
        <head><title>Error</title></head>
        <body>
            <h1>{error_title}</h1>
            <p>{error_message}</p>
            <a href="/artifactsDoc">Try Again</a>
        </body>
        </html>
        """

def render_success_page(download_url):
    """Render a success page with download link"""
    try:
        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        success_template_path = os.path.join(script_dir, 'artifactssuccess.html')
        
        with open(success_template_path, 'r') as f:
            success_html = f.read()
        
        # Replace placeholder with actual download URL
        success_html = success_html.replace('$DOWNLOAD_URL', download_url)
        
        return success_html
    except Exception as e:
        # Fallback to basic success message if template file is missing
        return f"""
        <html>
        <head><title>Success</title></head>
        <body>
            <h1>Document Generated Successfully!</h1>
            <p>Your document is ready for download:</p>
            <a href="{download_url}">Download Document</a>
            <br><br>
            <a href="/artifactsDoc">Generate Another</a>
        </body>
        </html>
        """

def render_processing_page(task_id):
    """Render a processing page with task ID"""
    try:
        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        processing_template_path = os.path.join(script_dir, 'processing.html')
        
        with open(processing_template_path, 'r') as f:
            processing_html = f.read()
        
        # Replace placeholder with actual task ID
        processing_html = processing_html.replace('$TASK_ID', task_id)
        
        return processing_html
    except Exception as e:
        # Fallback to basic processing message if template file is missing
        return f"""
        <html>
        <head>
            <title>Processing</title>
            <meta http-equiv="refresh" content="3;url=/artifactsDoc/status/{task_id}">
        </head>
        <body>
            <h1>Processing Your Document</h1>
            <p>Please wait while we generate your artifacts document...</p>
            <p>You will be redirected automatically.</p>
        </body>
        </html>
        """

@app.route('/clicks-ani-world')
def clicks_ani_world():
    os.system('cp -r ../../ClicksAniMC/world .; zip -r world.zip world; rm -rf world')
    return send_file('world.zip', as_attachment=True)

@app.route('/clicks-ani-sabimora')
def clicks_ani_sabimora():
    os.system('cp -r ../../ClicksAniMC/sabimora .; zip -r sabimora.zip sabimora; rm -rf sabimora')
    return send_file('sabimora.zip', as_attachment=True)

@app.route('/update/<string:game>', methods=['POST'])
def update_countdown(game: str):
    token = request.headers.get('Authorization')
    if token:
        if not bcrypt.checkpw(token.encode(), token_hash):
            return 'Unauthorized', 401
    else:
        return 'Unauthorized', 401
    
    data = request.get_json()
    if data.keys() != {'name', 'date', 'image','image_credits', 'image_credits_url', 'light'}:
        return 'Invalid data', 400
    
    file = open(f'../pages/countdown/{game}/updates.json', 'r+')
    updates: list = json.load(file)
    updates.append(data)
    file.seek(0)
    json.dump(updates, file, indent=4)
    file.truncate()
    file.close()

    # os.system(f'git reset; git add ../public/assets/countdown/{game}/updates.json; git commit -m "added update for {game}"; git push')
    return updates, 200

def save_file(file: datastructures.FileStorage):
    '''creates a unique filename and saves the file'''
    media_extensions = ['.mp4', '.webm', '.mkv', '.avi', '.mov', '.mp3', '.wav', '.flac', '.ogg', '.m4a', '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp', '.heic']
    if file:
        name = os.path.splitext(file.filename)[0]
        ext = os.path.splitext(file.filename)[1]
        if ext.lower() in media_extensions:
            filename = str(uuid.uuid4())[:6] + ext
            while os.path.exists(os.path.join('media', filename)):
                filename = str(uuid.uuid4())[:6] + ext
        else:
            filename = f"{name}_{str(uuid.uuid4())[:6]}{ext}"
            while os.path.exists(os.path.join('media', filename)):
                filename = f"{name}_{str(uuid.uuid4())[:6]}{ext}"
        file.save(os.path.join('media', filename))
    else:
        raise Exception('File is None')
    return filename

def get_path(filename):
    if DEV: return f"http://localhost:3500/{filename}".replace(' ', '%20')
    return f"https://media.zanderp25.com/{filename}".replace(' ', '%20')

@app.route("/rosterconverter")
def rosterconverter():
    return send_file("rosterconverter.html")

@app.route("/rosterupload", methods=["POST"])
def rosterupload():
    file = request.files.get("rosterfile")
    if not file:
        return "No file", 400
    
    # parse the html table
    html = file.read().decode("utf-8")
    try: table = html.split("No.")[1].split("Male:")[0]
    except:
        return f"""<h1>Error while proccessing file</h1>
        <p>Contents of file:</p>
        <pre>{html}</pre>
        """, 400
    # print(table)
    rows = table.split("<tr")[1:-1]
    print(f"{len(rows)} Students")
    # print("\n-----------------------------------\n".join(rows))
    roster = []
    for row in rows:
        tempcols = row.split("<td")[1:]
        columns = []
        for column in tempcols:
            column = column.split(">")[1].split("<")[0]
            columns.append(column)
        
        student = {}
        student["number"] = columns[1]
        student["firstName"] = columns[2].split(",")[1].strip()
        student["lastName"] = columns[2].split(",")[0].strip()
        student["grade"] = columns[3].strip()

        roster.append(student)

    with open("roster.csv", "w") as f:
        f.write("First,Last,Number\n")
        for student in roster:
            f.write(f"{student['firstName']},{student['lastName']},{student['number']}\n")

    return send_file("roster.csv", as_attachment=True)

if __name__ == '__main__':
    if not os.path.exists('media'):
        os.mkdir('media')

    try: keys: list = json.load(open('keys.json', 'r'))
    except: keys = []

    for i in range(len(keys)):
        keys[i]['max_age'] = datetime.fromisoformat(keys[i]['max_age'])

    for i in range(len(keys)):
        if keys[i]['max_age'] < datetime.utcnow():
            keys.pop(i)
            sync_keys()

    if DEV: app.run(port=3500, host='0.0.0.0')
    else:
        from waitress import serve
        serve(app, port=3500)