<?php
function run(){
    $output = null;
    $value = null;

    exec("python calculate.py 2>&1", $output, $value);

    echo join("\n", $output);
    if ($value === 0){
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}

try {
    run();
} catch ( Exception $e ) {
    echo "Error: $e->getMessage()";
    http_response_code(500);
}
?>
