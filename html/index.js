import "https://code.jquery.com/jquery-3.5.0.min.js";

function load() {
  if ((getChristmas(new Date()) - new Date()) <= 2160000000) {
    document.getElementById("christmasAlert").style.display = "block";
  }
}

function getChristmas(now){
  var year;
  if (now.getMonth() == 11){
      if (now.getDate() >= 25){
          y = now.getFullYear() + 1;
      } else {
          y = now.getFullYear();
      }
  } else {
      y = now.getFullYear();
  }
  return new Date("Dec 25 " + y);
}

// For smooth scrolling
let $root = $('html, body');
$('a[href^="#"]').click(function() {
  let href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function() {
    window.location.hash = href;
  });
  return false;
});