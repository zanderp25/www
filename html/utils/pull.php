<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
$output = shell_exec( 'cd /home/zanderp25/www/ && git pull' );
echo $output
}

?>
hello
