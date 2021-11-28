<?php
  $output = null;
  $value = null;

  exec("cd /home/zanderp25/www; git pull", $output, $value);
  echo "Returned with code: <pre style=display:inline >$value</pre><br/>";
  echo "Output:<pre>";
  print_r($output);
  echo "</pre>"
?>
