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
      } else if ($lang == "ja") {
        echo "Zanderp25のオフィシャルサイト。";
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
        <a href="#about">
          <?php
            if ($lang == "es") {
              echo "Acerca de Mí";
            } else if ($lang == "ja") {
              echo "私について";
            } else {
              echo "About Me";
            }
          ?>
        </a>
        <a href="#projects">
          <?php
            if ($lang == "es") {
              echo "Proyectos";
            } else if ($lang == "ja") {
              echo "プロジェクト";
            } else {
              echo "Projects";
            }
          ?>
        </a>
        <a href="index/">
          <?php
            if ($lang == "es") {
              echo "Descargas";
            } else if ($lang == "ja") {
              echo "ダウンロード";
            } else {
              echo "Downloads";
            }
          ?>
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ">こんにちは</a>
      </div>
    </div>
    <div class="content">
      <p class="printonly">Why do you want to print this, anyways??</p>
      <div class="alert info" id="christmasAlert" style="display: none;">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>
          <?php
            if ($lang == "es") {
              echo "¡Hola!";
            } else if ($lang == "ja") {
              echo "こんにちは！";
            } else {
              echo "Hey, You!";
            }
          ?>
        </strong> 
        <?php
          if ($lang == "es") {
            echo "¡Mira mi";
          } else if ($lang == "ja") {
            echo "私の";
          } else {
            echo "Check out my ";
          }
        ?>
        Go look at my 
        <a href="https://zanderp25.com/christmas">
          <?php
            if ($lang == "es") {
              echo "cuenta regresiva de Navidad";
            } else if ($lang == "ja") {
              echo "クリスマスカウントダウン";
            } else {
              echo "Christmas Countdown";
            }
          ?>
        </a>
        <?php
          if ($lang == "es") {
            echo " mientras contamos los días hasta Navidad!";
          } else if ($lang == "ja") {
            echo "をチェックしてください。クリスマスまでの日数をカウントダウンします！";
          } else {
            echo " as we count down the days until Christmas!";
          }
        ?>
      </div>
      <h1>Zanderp25</h1>
      <div class="socials">
        <div class="discord">
          <a href="https://discord.gg/672yY5v">
            <img src="ico/socials/discord.png">
            Discord
          </a>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/Zanderp25">
            <img src="ico/socials/twitter.png">
            Twitter
          </a>
        </div>
        <div class="github">
          <a href="https://github.com/Zanderp25">
            <img src="ico/socials/github.png">
            GitHub
          </a>
        </div>
        <div class="youtube">
          <a href="https://www.youtube.com/channel/UCJn-rMYM0CRURAa8TUhwuPQ">
            <img src="ico/socials/youtube.png">
            YouTube
          </a>
        </div>
        <!-- <div class="twitch">
          <a href="https://www.twitch.tv/zanderp25">
            <img src="ico/socials/twitch.png">
            Twitch
          </a>
        </div> -->
      </div>
      <div class="down-arrow bounce" alt="Down Arrow">
        <a href="#about">
          <img src="img/down_arrow.png">
        </a>
      </div>
      <div class="about" id="about">
        <h2>
          <?php
            if ($lang == "es") {
              echo "Acerca de Mí";
            } else if ($lang == "ja") {
              echo "私について";
            } else {
              echo "About Me";
            }
          ?>
        </h2>
        <p>
          I'm Zanderp25, a independent developer and graphic designer. 
          I'm going to put more stuff here, but I don't feel like doing it right now lol.
        </p>
      </div>
      <div class="projects" id="projects">
        <h2>
          <?php
            if ($lang == "es") {
              echo "Proyectos";
            } else if ($lang == "ja") {
              echo "プロジェクト";
            } else {
              echo "Projects";
            }
          ?>
        </h2>
        <div class="project" id="question-counter">
          <div class="project-image">
            <img src="img/question-counter.png">
          </div>
          <div class="project-info">
            <h3>Question Counter</h3>
            <p>
              <?php
                if ($lang == "es") {
                  echo "Una aplicación para ayudar a mantenerte motivado y contar preguntas.";
                } else if ($lang == "ja") {
                  echo "質問カウンターは、質問をカウントするためのアプリです。";
                } else {
                  echo "A simple desktop app to help keep you motivated and count questions.";
                }
              ?>
            </p>
            <a class="project-link" href="https://question-counter.zanderp25.com/" hreflang="en-US">
              <?php
                if ($lang == "es") {
                  echo "Más información >";
                } else if ($lang == "ja") {
                  echo "詳細情報 >";
                } else {
                  echo "Learn More >";
                }
              ?>
            </a>
          </div>
        </div>
        <br/>
        <div class="project" id="countdowns">
          <div class="project-image">
            <img src="img/christmas-countdown.png">
          </div>
          <div class="project-info">
            <h3>
              <?php
                if ($lang == "es") {
                  echo "Cuentas Regresivas";
                } else if ($lang == "ja") {
                  echo "カウントダウン";
                } else {
                  echo "Countdowns";
                }
              ?>
            </h3>
            <p>
              <?php
                if ($lang == "es") {
                  echo "Cuentas regresivas para Navidad, año nuevo, y mucho más.";
                } else if ($lang == "ja") {
                  echo "クリスマスカウントダウン、年末年始、そしてそれ以降のカウントダウンを作成しました。";
                } else {
                  echo "Countdowns for Christmas, New Year's, and more.";
                }
              ?>
            </p>
            <a class="project-link" href="countdown">
              <?php
                if ($lang == "es") {
                  echo "Abrir >";
                } else if ($lang == "ja") {
                  echo "開く >";
                } else {
                  echo "Open >";
                }
              ?>
            </a>
          </div>
        </div>
        <br/>
        <div class="project" id="minecraft-server">
          <div class="project-image">
            <img src="img/minecraft-server.png">
          </div>
          <div class="project-info">
            <h3>
              <?php
                if ($lang == "es") {
                  echo "Servidor de Minecraft";
                } else if ($lang == "ja") {
                  echo "Minecraftサーバー";
                } else {
                  echo "Minecraft Server";
                }
              ?>
            </h3>
            <p>
              <?php
                if ($lang == "es") {
                  echo "Un servidor de Minecraft que tengo y mantengo para Minecraft: Java Edition.";
                } else if ($lang == "ja") {
                  echo "Minecraft: Java Editionのためのサーバーを作成しました。";
                } else {
                  echo "A Minecraft Server I run and maintain for Minecraft: Java Edition.";
                }
              ?>
            </p>
            <a class="project-link" href="minecraft-server">
              <?php
                if ($lang == "es") {
                  echo "Más información >";
                } else if ($lang == "ja") {
                  echo "詳細情報 >";
                } else {
                  echo "Learn More >";
                }
              ?>
            </a>
          </div>
      </div>
    </div>
    <footer>
      &copy; Zanderp25
    </footer>
  </body>
</html>
