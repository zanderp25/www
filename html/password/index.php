<?php
echo "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
if (isset($_GET['password'])) {   
    if (urldecode($_GET['password']) === "https://dsc.gg/lil") {
        if (isset($_GET['content'])) {   
            if (urldecode($_GET['content']) === "GAHSHAHSHQ") {
                if (isset($_GET['shut'])) {   
                    if (urldecode($_GET['shut']) === "Slowmode is enabled, but you are immune. Amazing!") {
                        echo "Congrats. You have finished my puzzle! <a href=\"#\" onclick=\"location='file.php'\">Here's your prize!</a>";
                        http_response_code(200);
                    } else {
                        echo "No";
                        http_response_code(403);
                    }
                } else {
                    echo "Phase 2 Completed.\nHint for phase 3: Hehehehehehhehehehe (&shut=)";
                    http_response_code(200);
                }
            } else {
                echo "No";
                http_response_code(403);
            }
        } else {
            echo "Phase 1 Completed.\nClick <a href=\"https://cdn.discordapp.com/attachments/848013183716950016/914724792765149194/Screen_Shot_2021-11-28_at_22.49.40.png\">here</a> for phase 2";
            http_response_code(200);
        }
    } else {
        echo "No";
        http_response_code(403);
    }
} else {
    echo "Add '?password=' to the end of the URL followed by your guess to guess my password.";
}
?>