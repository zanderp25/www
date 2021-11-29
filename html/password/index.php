<?php
if (isset($_GET['password'])) {   
    if ($_GET['password']==="nevergonnagiveyouup") {
        echo "Correct";
        http_response_code(200);
    } else {
        echo "No";
        http_response_code(403);
    }
} else {
    echo "Add '?password=' to the end of the URL followed by your guess to guess my password.";
}
?>