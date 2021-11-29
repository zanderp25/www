<?php
if (isset($_GET['password'])) {   
    if ($_GET['password']==="nevergonnagiveyouup") {
        echo "Correct";
        if ($_SERVER['REMOTE_ADDR'] === "24.179.149.1") {
            echo "\nCongrats, Clari. You are the only one that can see this specific message.";
        }
        http_response_code(200);
    } else {
        echo "No";
        if ($_SERVER['REMOTE_ADDR'] === "24.179.149.1") {
            echo "\nHi Clari";
        }
        http_response_code(403);
    }
} else {
    echo "Add '?password=' to the end of the URL followed by your guess to guess my password.";
}
?>