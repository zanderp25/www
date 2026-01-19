import os
import json
from typing import List, Dict, Optional

class LinkShortener:
    """Manages shortened links with conflict checking against media files"""
    
    def __init__(self, links_file: str = 'links.json', media_dir: str = 'media'):
        self.links_file = links_file
        self.media_dir = media_dir
        self._ensure_links_file()
    
    def _ensure_links_file(self):
        """Create links file if it doesn't exist"""
        if not os.path.exists(self.links_file):
            with open(self.links_file, 'w') as f:
                json.dump([], f)
    
    def _load_links(self) -> List[Dict]:
        """Load all links from file"""
        try:
            with open(self.links_file, 'r') as f:
                return json.load(f)
        except:
            return []
    
    def _save_links(self, links: List[Dict]):
        """Save links to file"""
        with open(self.links_file, 'w') as f:
            json.dump(links, f, indent=4)
    
    def get_media_files(self) -> List[str]:
        """Get list of all media files and directories"""
        if not os.path.exists(self.media_dir):
            return []
        
        files = []
        for filename in os.listdir(self.media_dir):
            filepath = os.path.join(self.media_dir, filename)
            # Include both files and directories
            files.append(filename)
        return files
    
    def get_all_links(self) -> List[Dict]:
        """Get all shortened links"""
        return self._load_links()
    
    def add_link(self, slug: str, url: str, description: str = "") -> tuple[bool, str]:
        """Add a new shortened link with conflict checking"""
        # Validate slug
        if not slug or not slug.strip():
            return False, "Slug cannot be empty"
        
        slug = slug.strip()
        
        # Check if slug already exists in links
        links = self._load_links()
        for link in links:
            if link['slug'] == slug:
                return False, f"Slug '{slug}' already exists"
        
        # Check if slug conflicts with media files or directories
        media_files = self.get_media_files()
        if slug in media_files:
            return False, f"Slug '{slug}' conflicts with an existing file or directory"
        
        # Add the new link
        new_link = {
            'slug': slug,
            'url': url,
            'description': description,
            'hits': 0,
            'created': None  # Will be set by the route handler using datetime
        }
        
        links.append(new_link)
        self._save_links(links)
        
        return True, "Link added successfully"
    
    def delete_link(self, slug: str) -> tuple[bool, str]:
        """Delete a shortened link"""
        links = self._load_links()
        
        for i, link in enumerate(links):
            if link['slug'] == slug:
                links.pop(i)
                self._save_links(links)
                return True, "Link deleted successfully"
        
        return False, "Link not found"
    
    def update_link(self, slug: str, new_url: str, new_description: str = "") -> tuple[bool, str]:
        """Update an existing shortened link"""
        links = self._load_links()
        
        for link in links:
            if link['slug'] == slug:
                link['url'] = new_url
                link['description'] = new_description
                self._save_links(links)
                return True, "Link updated successfully"
        
        return False, "Link not found"
    
    def get_link(self, slug: str) -> Optional[Dict]:
        """Get a specific shortened link"""
        links = self._load_links()
        
        for link in links:
            if link['slug'] == slug:
                return link
        
        return None
    
    def increment_hits(self, slug: str) -> tuple[bool, str]:
        """Increment the hit count for a shortened link"""
        links = self._load_links()
        
        for link in links:
            if link['slug'] == slug:
                if 'hits' not in link:
                    link['hits'] = 0
                link['hits'] += 1
                self._save_links(links)
                return True, "Hit counted"
        
        return False, "Link not found"
    
    def check_slug_conflict(self, slug: str) -> tuple[bool, str]:
        """Check if a slug conflicts with media files"""
        media_files = self.get_media_files()
        
        if slug in media_files:
            return True, f"Slug '{slug}' conflicts with an existing media file"
        
        return False, "No conflict"
