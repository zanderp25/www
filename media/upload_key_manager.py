import os
import uuid
import bcrypt
import json
from datetime import datetime, timedelta
from hashes import password_hash

class UploadKeyManager:
    """Manages temporary upload keys with expiration and usage limits"""
    
    def __init__(self, keys_file: str = 'keys.json'):
        self.keys_file = keys_file
        self.keys = []
        self.load_keys()
    
    def load_keys(self):
        """Load keys from file and clean expired ones"""
        try:
            with open(self.keys_file, 'r') as f:
                keys_data = json.load(f)
                self.keys = []
                for key in keys_data:
                    key['max_age'] = datetime.fromisoformat(key['max_age'])
                    if key['max_age'] >= datetime.utcnow():
                        self.keys.append(key)
                # Save cleaned keys back
                if len(self.keys) != len(keys_data):
                    self.sync_keys()
        except:
            self.keys = []
    
    def sync_keys(self):
        """Save keys to file"""
        keys_data = []
        for key in self.keys:
            keys_data.append({
                'key': key['key'],
                'max_uses': key['max_uses'],
                'max_age': key['max_age'].isoformat()
            })
        with open(self.keys_file, 'w') as f:
            json.dump(keys_data, f, indent=4)
    
    def key_matches(self, key: str) -> bool:
        """Check if a key is valid"""
        for i in range(len(self.keys)):
            if self.keys[i]['key'] == key:
                if self.keys[i]['max_age'] < datetime.utcnow():
                    self.keys.pop(i)
                    self.sync_keys()
                    return False
                return True
        return False
    
    def use_key(self, key: str) -> bool:
        """Use a key (decrement uses and remove if exhausted)"""
        for i in range(len(self.keys)):
            if self.keys[i]['key'] == key:
                self.keys[i]['max_uses'] -= 1
                if self.keys[i]['max_uses'] <= 0:
                    self.keys.pop(i)
                self.sync_keys()
                return True
        return False
    
    def create_key(self, max_uses: int, max_age: timedelta) -> str:
        """Create a new upload key"""
        key = str(uuid.uuid4())[:8]
        self.keys.append({
            'key': key,
            'max_uses': max_uses,
            'max_age': datetime.utcnow() + max_age
        })
        self.sync_keys()
        return key
    
    def get_all_keys(self) -> list:
        """Get all keys (for management interface)"""
        return self.keys
    
    def delete_key(self, key: str) -> bool:
        """Delete a specific key"""
        for i in range(len(self.keys)):
            if self.keys[i]['key'] == key:
                self.keys.pop(i)
                self.sync_keys()
                return True
        return False
    
    def edit_key(self, key: str, max_uses: int, max_age: datetime) -> bool:
        """Edit an existing key"""
        for i in range(len(self.keys)):
            if self.keys[i]['key'] == key:
                self.keys[i]['max_uses'] = max_uses
                self.keys[i]['max_age'] = max_age
                self.sync_keys()
                return True
        return False
    
    def verify_password(self, password: str) -> bool:
        """Verify admin password"""
        if password == "n0t_a_p455w0rd":
            return False
        return bcrypt.checkpw(password.encode(), password_hash)
