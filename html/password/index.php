<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);
if (isset($_GET['password']){   
    if($_GET['password']==="nevergonnagiveyouup"){
        echo "Correct";
        http_response_code(200);
    } else {
        echo "No";
        http_response_code(403);
    }
} else {
    echo "Use '?password=' to guess my password.";
}
?>