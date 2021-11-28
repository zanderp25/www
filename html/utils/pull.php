<?php
function run(){
    $output = null;
    $value = null;
  
    exec("cd /home/zanderp25/www; git pull", $output, $value);
    echo "Returned with code: $value\n";
    echo "Output: \n";
    print_r($output);
    if ($value===0){
      echo "Success";
      http_response_code(200);
    } else {
      echo "Failed";
      http_response_code(500);
    }
}

try {
    if (!isset($_POST['payload'])) {
        echo "Hi";
    } else {
        run();
    }
} catch ( Exception $e ) {
    echo "Error: $e->getMessage()";
    http_response_code(500);
}
?>
