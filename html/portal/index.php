<?php
function run(){
    if (isset($_GET["e"])){
        if ($_GET["e"] === "secret"){
            echo "Congrats, you found a secret page. <a href=\"#\" onclick=\"location='file.php'\">click me</a>"
            http_response_code(200);
        } else {
            echo "incorrect password"
            http_response_code(403);
        }
    } else {
        echo "haha sorry you missed out if you want to see what it was, go here: <a href=\"#\" onclick=\"location='file.php'\">click me</a>"
    }
}

try{
    run()
} catch ( Exception $e ) {
    echo "Error: $e->getMessage()";
}
?>