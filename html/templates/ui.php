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
    <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <a href="https://youtu.be/dQw4w9WgXcQ" class="button">Button</a>
      <a>A / link</a>
      <p>P / paragraph</p>
      <footer>
        <div class="info">
          info goes here <br>
          &copy; Zanderp25
        </div>
        <div class=links>
          <a href="/">Home</a>
          <a href="/#about">About</a>
      </footer>
      <img src="../img/minecraft-server.png" alt="Minecraft" style="width: 80%; margin: auto; display: block;">
      <div class="socials">
        <div class="discord">
          <a href="https://discord.gg/672yY5v">
            <img src="/ico/socials/discord.png">
            Discord
          </a>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/Zanderp25">
            <img src="/ico/socials/twitter.png">
            Twitter
          </a>
        </div>
        <div class="github">
          <a href="https://github.com/Zanderp25">
            <img src="/ico/socials/github.png">
            GitHub
          </a>
        </div>
        <div class="youtube">
          <a href="https://www.youtube.com/channel/UCJn-rMYM0CRURAa8TUhwuPQ">
            <img src="/ico/socials/youtube.png">
            YouTube
          </a>
        </div>
        <div class="twitch">
          <a href="https://www.twitch.tv/zanderp25">
            <img src="/ico/socials/twitch.png">
            Twitch
          </a>
        </div>
        <div class="down-arrow bounce" alt="Down Arrow">
          <a href="#about">
            <img src="img/down_arrow.png">
          </a>
        </div>
      </div>
      <div class="projects">
        <div class="project" id="question-counter">
          <div class="project-image">
            <img src="img/question-counter.png">
          </div>
          <div class="project-info">
            <h3>Question Counter</h3>
            <p>
              A simple desktop app to help keep you motivated and count questions.
            </p>
            <a class="project-link" href="https://question-counter.zanderp25.com/">Learn More ></a>
          </div>
        </div>
      </div>
      <h3>Discord Mentions</h3>
      <p>
        <a href="https://discord.gg/672yY5v">
          <span class="wrapper iconMention iconMentionText mention">
            <svg width="24" height="24" viewBox="0 0 24 24" class="channelIcon">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path>
            </svg>
            general
          </span>
        </a>
        <br>
        <a href="https://discord.gg/672yY5v">
          <span class="wrapper mention interactive">@Zanderp25</span>
        </a>
      </p>
    </div>
    <footer>&copy; Zanderp25</footer>
  </body>
</html>
