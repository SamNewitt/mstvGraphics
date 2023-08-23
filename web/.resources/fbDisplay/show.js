function showIn(){
  graphicIsLive=true;
  graphicLive="show"
  e("show").style.animation="showIn 0.7s ease 0s";
  e("show-text-container").style.animation="showIn 0.7s ease 0s";
}

function pregameIn(){
  e("show-text").innerHTML="Central Bank Pregame Show";
  e("show-logo").setAttribute("src","sponsors/cbSquare.png");
  showIn();
}

function halftimeIn(){
  e("show-text").innerHTML="L & S Video Halftime Show";
  e("show-logo").setAttribute("src","sponsors/ls.png");
  showIn();
}

function postgameIn(){
  e("show-text").innerHTML="Shenanigans Postgame Show";
  e("show-logo").setAttribute("src","sponsors/shenanigans.png");
  showIn()
}

function showOut(){
  e("show").style.animation="showOut 0.7s ease 0s";
  e("show-text-container").style.animation="showOut 0.7s ease 0s";
}