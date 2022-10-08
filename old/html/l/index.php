<?php
$agent = $_SERVER['HTTP_USER_AGENT'];
if (strpos($agent, "Discordbot") !== false || strpos($agent, "Twitterbot") !== false || strpos($agent, "facebookexternalhit") !== false) {
    header("Location: https://zanderp25.com/");
} else {
    header("Location: https://youtu.be/dQw4w9WgXcQ");
}
exit();
?>
