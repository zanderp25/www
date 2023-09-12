import os, uuid, bcrypt
from flask import *
from typing import Union
from io import BytesIO
from werkzeug import datastructures
from hashes import token_hash, password_hash

app = Flask(__name__)

token_hash = open("token_hash").read()
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
        index = f'<h1>Index of /{path}</h1><hr><pre>'
        for file in files:
            index += f'<a href="{path}/{file}">{file}</a><br>'
        index += '</pre><hr>'
        return index
    return send_from_directory('media', path)

# @app.route('/favicon.ico')
# def favicon():
#     return send_file("../public/assets/ZP25 Circle.png")

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
    return send_file('upload.html')

@app.route('/uploadfile', methods=['POST'])
def uploadfile():
    password = request.form.get('password')
    if not bcrypt.checkpw(password.encode(), password_hash):
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

@app.route('/clicks-ani-world')
def clicks_ani_world():
    os.system('cp -r ../../ClicksAniMC/world .; zip -r world.zip world; rm -rf world')
    return send_file('world.zip', as_attachment=True)

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
    media_extensions = ['.mp4', '.webm', '.mkv', '.avi', '.mov', '.mp3', '.wav', '.flac', '.ogg', '.m4a', '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.svg', '.webp']
    if file:
        name = os.path.splitext(file.filename)[0]
        ext = os.path.splitext(file.filename)[1]
        if ext in media_extensions:
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
    app.run(port=3500)