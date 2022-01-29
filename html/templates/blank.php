<?php
  $lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
  $lang = substr($lang, 0, 2);
  if (isset($_GET['lang'])) {
    $lang = $_GET['lang'];
  }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="apple-touch-icon" sizes="180x180" href="/ico/apple-touch-icon.png?v=gAXAjeL9Ro">
    <link rel="icon" type="image/png" sizes="32x32" href="/ico/favicon-32x32.png?v=gAXAjeL9Ro">
    <link rel="icon" type="image/png" sizes="16x16" href="/ico/favicon-16x16.png?v=gAXAjeL9Ro">
    <link rel="manifest" href="/ico/site.webmanifest?v=gAXAjeL9Ro">
    <link rel="mask-icon" href="/ico/safari-pinned-tab.svg?v=gAXAjeL9Ro" color="#ED7D3A">
    <link rel="shortcut icon" href="/ico/favicon.ico?v=gAXAjeL9Ro">
    <meta name="msapplication-TileColor" content="#ED7D3A">
    <meta name="msapplication-config" content="/ico/browserconfig.xml?v=gAXAjeL9Ro">
    <meta name="theme-color" content="#ED7D3A" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#666666" media="(prefers-color-scheme: dark)">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">
    <script src="index.js"></script>
    <title>Zanderp25</title>
    <meta name="description" content="<?php
      if ($lang == "es") {
        echo "El sitio web oficial de Zanderp25.";
      } else {
        echo "The official website of Zanderp25.";
      }
    ?>">
    <meta name="author" content="Zanderp25">
  </head>
  <body onload="load()">
    <div id="navbar" class="navbar">
      <a href="/">
        <div class="logo">
          <img src="ico/safari-pinned-tab.svg" alt="Zanderp25">
        </div>
      </a>
      <input type="checkbox" id="menu-button"/>
      <div class="navbar-links">
        <a href="/#about">
          <?php
            if ($lang == "es") {
              echo "Acerca de Mí";
            } else {
              echo "About Me";
            }
          ?>
        </a>
        <a href="/#projects">
          <?php
            if ($lang == "es") {
              echo "Proyectos";
            } else {
              echo "Projects";
            }
          ?>
        </a>
        <a href="/index/">
          <?php
            if ($lang == "es") {
              echo "Descargas";
            } else {
              echo "Downloads";
            }
          ?>
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ">こんにちは</a>
      </div>
    </div>
    <div class="content">
      <!-- Put content here -->
    </div>
    <footer>&copy; Zanderp25</footer>
  </body>
</html>
