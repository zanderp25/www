<?php
function run(){
    echo "haha sorry you missed out if you want to see what it was, go here: <a href=\"#\" onclick=\"location='file.php'\">click me</a>"
}

try{
    run()
} catch ( Exception $e ) {
    echo "Error: $e->getMessage()";
}
?>