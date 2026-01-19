import os

class TemplateRenderer:
    """Renders HTML templates with variable substitution"""
    
    def __init__(self, template_dir: str = '.'):
        self.template_dir = template_dir
    
    def render_error_page(self, error_title: str, error_message: str) -> str:
        """Render a user-friendly error page"""
        try:
            error_template_path = os.path.join(self.template_dir, 'error.html')
            with open(error_template_path, 'r') as f:
                error_html = f.read()
            
            error_html = error_html.replace('$ERROR_TITLE', error_title)
            error_html = error_html.replace('$ERROR_MESSAGE', error_message)
            return error_html
        except Exception as e:
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
    
    def render_success_page(self, download_url: str) -> str:
        """Render a success page with download link"""
        try:
            success_template_path = os.path.join(self.template_dir, 'artifactssuccess.html')
            with open(success_template_path, 'r') as f:
                success_html = f.read()
            
            success_html = success_html.replace('$DOWNLOAD_URL', download_url)
            return success_html
        except Exception as e:
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
    
    def render_processing_page(self, task_id: str) -> str:
        """Render a processing page with task ID"""
        try:
            processing_template_path = os.path.join(self.template_dir, 'processing.html')
            with open(processing_template_path, 'r') as f:
                processing_html = f.read()
            
            processing_html = processing_html.replace('$TASK_ID', task_id)
            return processing_html
        except Exception as e:
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
