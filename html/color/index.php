<!DOCTYPE html>
<html lang="en">
<?php
    if (isset($_GET["c"])||isset($_POST["color"])){
        if (isset($_POST["color"])){
            $c = $_POST["color"];
        } else {
            $c = $_GET["c"];
        }
        if (preg_match("/^([0-9a-f]{6}|[0-9a-f]{3})$/i", $c)){
            $color = "#$c";
        } else if (preg_match("/^#([0-9a-f]{6}|[0-9a-f]{3})$/i", $c)){
            $color = "$c";
        } else if (preg_match("/^rgb\([0-9]{1,3}, ?[0-9]{1,3}, ?[0-9]{1,3}\)$/", $c)) {
            $color = $c;
        }
    }
    if (!isset($color)) {
        $color = "#0face0";
    }
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content=<?php echo $color; ?>>
    <meta name="description" content="A simplistic color picker i made">
    <title><?php 
        echo "$color - Color Picker";
    ?></title>
    <style>
        body {
            background-color: <?php echo $color; ?>
        }
        input[type=text]#color {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            width: 75vw;
            font-size: 10vw;
            background-color: rgba(0,0,0,0);
            border: none;
            font-family: "Avenir", sans-serif;
            font-weight: bold;
            color: <?php 
                if (preg_match("/^(#(([9a-f][0-9a-f]){3}|[9a-f]{3}))|rgb\(((2[0-9]{2}|1[4-9][0-9]),? ?){3}\)$/i", $color)){
                    echo "#000";
                } else {
                    echo "#fff";
                }
            ?>
        }
    </style>
</head>
<body>
    <form action="" method="post" >
        <input type="text" name="color" id="color" value="<?php echo $color; ?>" >
    </form>
</body>
</html>