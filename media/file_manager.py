import os
import json
from typing import List, Dict, Optional
from datetime import datetime

class FileManager:
    """Manages file operations in the media directory with conflict checking"""
    
    def __init__(self, media_dir: str = 'media', links_file: str = 'links.json'):
        self.media_dir = media_dir
        self.links_file = links_file
    
    def get_shortened_links(self) -> List[str]:
        """Get list of all shortened link slugs"""
        try:
            if os.path.exists(self.links_file):
                with open(self.links_file, 'r') as f:
                    links = json.load(f)
                    return [link['slug'] for link in links]
            return []
        except:
            return []
    
    def get_files_list(self) -> List[Dict]:
        """Get list of all files and folders in media directory with metadata"""
        items = []
        
        if not os.path.exists(self.media_dir):
            return items
        
        for filename in os.listdir(self.media_dir):
            filepath = os.path.join(self.media_dir, filename)
            
            try:
                stat = os.stat(filepath)
                is_dir = os.path.isdir(filepath)
                
                items.append({
                    'name': filename,
                    'size': stat.st_size if not is_dir else 0,
                    'modified': datetime.fromtimestamp(stat.st_mtime).isoformat(),
                    'created': datetime.fromtimestamp(stat.st_ctime).isoformat(),
                    'isDir': is_dir
                })
            except Exception as e:
                print(f"Error getting info for {filename}: {e}")
                continue
        
        # Sort: folders first, then by modified time (newest first)
        items.sort(key=lambda x: (not x['isDir'], x['modified']), reverse=True)
        return items
    
    def get_file_info(self, filename: str) -> Optional[Dict]:
        """Get detailed information about a specific file"""
        filepath = os.path.join(self.media_dir, filename)
        
        if not os.path.exists(filepath) or os.path.isdir(filepath):
            return None
        
        try:
            stat = os.stat(filepath)
            return {
                'name': filename,
                'path': filepath,
                'size': stat.st_size,
                'modified': datetime.fromtimestamp(stat.st_mtime).isoformat(),
                'created': datetime.fromtimestamp(stat.st_ctime).isoformat(),
                'extension': os.path.splitext(filename)[1]
            }
        except Exception as e:
            print(f"Error getting info for {filename}: {e}")
            return None
    
    def delete_file(self, filename: str) -> tuple[bool, str]:
        """Delete a file from media directory"""
        filepath = os.path.join(self.media_dir, filename)
        
        if not os.path.exists(filepath):
            return False, "File not found"
        
        if os.path.isdir(filepath):
            return False, "Cannot delete directories"
        
        try:
            os.remove(filepath)
            return True, "File deleted successfully"
        except Exception as e:
            return False, f"Error deleting file: {str(e)}"
    
    def rename_file(self, old_name: str, new_name: str) -> tuple[bool, str]:
        """Rename a file in media directory with conflict checking"""
        old_path = os.path.join(self.media_dir, old_name)
        new_path = os.path.join(self.media_dir, new_name)
        
        if not os.path.exists(old_path):
            return False, "File not found"
        
        if os.path.isdir(old_path):
            return False, "Cannot rename directories"
        
        if os.path.exists(new_path):
            return False, "A file with that name already exists"
        
        # Check if new name conflicts with shortened links
        shortened_links = self.get_shortened_links()
        if new_name in shortened_links:
            return False, f"Cannot rename: '{new_name}' is already used as a shortened link"
        
        try:
            os.rename(old_path, new_path)
            return True, "File renamed successfully"
        except Exception as e:
            return False, f"Error renaming file: {str(e)}"
    
    def check_filename_conflict(self, filename: str) -> tuple[bool, str]:
        """Check if a filename conflicts with shortened links"""
        shortened_links = self.get_shortened_links()
        
        if filename in shortened_links:
            return True, f"Filename '{filename}' conflicts with an existing shortened link"
        
        return False, "No conflict"
