sudo chown -R zanderp25:www-data .
sudo find html link -type d -print0 | xargs -0 chmod 755
sudo find html link -type f -print0 | xargs -0 chmod 644
sudo find html link -type f -name "*.php" -print0 | xargs -0 chmod 0640
