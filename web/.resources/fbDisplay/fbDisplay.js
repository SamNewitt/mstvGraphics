var graphicIsLive=false, graphicLive;

window.onload = enlargeImage();

//start bug rotator

function enlargeImage() {
    var imageObject = new Image();
    var images = document.getElementsByClassName("image");
  
    for (var i = 0; i < images.length; i++) {
      imageObject.src = images[i].src;
      if (imageObject.width > imageObject.height) {
        images[i].style.width = "100%";
      } else {
        images[i].style.height = "100%";
      }
    }
  }
  
  function adjustTextH(param, container) {
    var fontSize = 32;
    param.style.fontSize = fontSize + "px";
    while (param.offsetWidth >= container.offsetWidth && fontSize > 20) {
      fontSize--;
      param.style.fontSize = fontSize + "px";
    }
  }

  function clear(){
    if(graphicIsLive)
    {
    switch(graphicLive){
        case "bug":
        bugOut();
        break;
    }
}
  }

  var waitTime=0;
function message(type, data){
    console.log(type);
    if(graphicIsLive){
        waitTime=500;
    }
    else{
        waitTime=0;
    }
    switch(type){
        case "clear":
        clear();
        break;
        //-------------------------------------GAME DATA--------------------------------
        //-------------------------------------SCOREBUG---------------------------------
        case "bugIn":
            clear();
            setTimeout(bugIn,waitTime);
        break;
        case "bugAnimate":
            clear();
            setTimeout(bugAnimate,waitTime);
        break;
        //---------------------------------------OTHER GFX------------------------------
    }
}