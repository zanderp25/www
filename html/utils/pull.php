<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
echo shell_exec( 'cd /home/zanderp25/www/ && git pull' );
}

?>hi
