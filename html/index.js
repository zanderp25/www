function load(){
  if(location.protocol == "http:"){
    location.protocol = "https:";
  }
}
function shareTest(){
  if(!navigator.share){
    shareButton = document.getElementById("share");
    shareButton.hidden = true;
  }
}
function share(){
  navigator.share({
    title: 'Zanderp25',
    text: 'Check out Zanderp25\'s website!',
    url: 'http://zanderp25.com/',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Turn it down for what?
function turnDown() {
  document.getElementById('tdf').innerText="Turn it down... For what?";
  document.getElementsByClassName('header').innerText="Turn it down... For what?";
  var s = document.createElement('script');
  s.setAttribute('src','https://nthitz.github.io/turndownforwhatjs/tdfw.js');
  document.body.appendChild(s);
}
