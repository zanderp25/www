import os
from datetime import datetime

class ArtifactProcessor:
    """Handles artifact document processing tasks"""
    
    def __init__(self):
        self.processing_tasks = {}
    
    def create_task(self, task_id: str):
        """Create a new processing task"""
        self.processing_tasks[task_id] = {
            'status': 'processing',
            'progress_message': 'Validating JSON file...',
            'created_at': datetime.now()
        }
    
    def update_task_progress(self, task_id: str, message: str):
        """Update task progress message"""
        if task_id in self.processing_tasks:
            self.processing_tasks[task_id]['progress_message'] = message
    
    def mark_task_completed(self, task_id: str, document_url: str):
        """Mark task as completed"""
        self.processing_tasks[task_id] = {
            'status': 'completed',
            'document_url': document_url,
            'success_url': f'/artifactsDoc/success?url={document_url}',
            'completed_at': datetime.now()
        }
    
    def mark_task_failed(self, task_id: str, error_message: str):
        """Mark task as failed"""
        self.processing_tasks[task_id] = {
            'status': 'error',
            'error_message': error_message,
            'failed_at': datetime.now()
        }
    
    def get_task(self, task_id: str):
        """Get task status"""
        return self.processing_tasks.get(task_id)
    
    def cleanup_old_tasks(self):
        """Remove tasks older than 10 minutes"""
        from datetime import timedelta
        cutoff_time = datetime.now() - timedelta(minutes=10)
        tasks_to_remove = []
        
        for task_id, task in self.processing_tasks.items():
            task_time = task.get('created_at') or task.get('completed_at') or task.get('failed_at')
            if task_time and task_time < cutoff_time:
                tasks_to_remove.append(task_id)
        
        for task_id in tasks_to_remove:
            del self.processing_tasks[task_id]
