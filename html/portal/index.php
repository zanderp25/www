<?php
if ($_GET["e"] === "secret"){
    echo "Congrats, you found a secret page."
} else {
    echo "haha sorry you missed out if you want to see what it was, go here: <a href=\"#\" onclick=\"location='file.php'\">click me</a>"
}
?>