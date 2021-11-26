function load(){
  if(location.protocol == "http:"){
    location.protocol = "https:";
  }
}

function shareTest(){
  if(navigator.share){
    shareButton = document.getElementById("share");
    shareButton.hidden = false;
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