sudo chown -R zanderp25:www-data .
sudo find . -type d -print0 | xargs -0 chmod 755
sudo find . -type f -print0 | xargs -0 chmod 644
