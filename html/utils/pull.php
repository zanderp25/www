<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
  shell_exec("cd /home/zanderp25/www/ && git reset –hard HEAD && git pull");
  echo "Done"
} else {
  echo "hi"
}

?>
