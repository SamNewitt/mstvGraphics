function e(param){
    return document.getElementById(param);
}

function c(param){
    return Array.from(document.querySelectorAll("."+param));
}

var classArray;

function setHTML(param, data){
  classArray=c(param);
  for(var i=0; i<classArray.length; i++){
    classArray[i].innerHTML=data;
  }
}

function away(param){
    e(param).classList.remove("home");
    e(param).classList.add("away");
}

function home(param){
    e(param).classList.add("home");
    e(param).classList.remove("away");  
}

var graphicIsLive=false, graphicLive;

//start bug rotator

function enlargeAllImages() {
    var imageObject = new Image();
    var images = document.getElementsByClassName("image");
  
    for (var i = 0; i < images.length; i++) {
      imageObject.src = images[i].src;
      if (imageObject.width < imageObject.height) {
        images[i].style.height = "100%";
      } else {
        images[i].style.width = "100%";
      }
    }
  }

  function enlargeImage(param) {
    var imageObject = new Image();        
      imageObject.src = param.src;
      if (imageObject.width > imageObject.height) {
        param.style.width = "100%";
        param.style.height = "auto";
      } else {
        param.style.height = "100%";
        param.style.width = "auto";

      }
  }
  
  function adjustText(param, container, fontSize, limit) {
    param.style.fontSize = fontSize + "px";
    while (param.offsetWidth >= container.offsetWidth && fontSize > limit) {
      fontSize--;
      param.style.fontSize = fontSize + "px";
    }
  }

  function adjustTextV(param,container,fontSize,limit){
    param.style.fontSize = fontSize + "px";
    while (param.offsetHeight > container.offsetHeight && fontSize > limit) {
      fontSize--;
      param.style.fontSize = fontSize + "px";
    }
  }

  var fontSize;
  function adjustTextC(param, container, fontSizeInput, limit) {
    
    for(var i=0; i<param.length; i++)
    {
      fontSize=fontSizeInput;
    param[i].style.fontSize = fontSize + "px";
    while (param[i].offsetWidth+5 >= container[i].offsetWidth && fontSize > limit) {
      fontSize--;
      param[i].style.fontSize = fontSize + "px";
    }
  }
  }

  var textFits=false

  function adjustTextAll(param, container, fontSize, limit){
    for(var i=0; i<param.length; i++){
    param[i].style.fontSize=fontSize+"px";
    }
    textFits=false;
    while(!textFits && fontSize>limit){
      textFits=true;
      for(var i=0; i<param.length; i++){
        if(param[i].offsetWidth >= container[i].offsetWidth){
          textFits=false;
        }
        
      }
      fontSize--;
    }

  }



function init(){
    document.querySelector(':root').style.setProperty("--away-primary", jsonData.away.primaryColor);
    document.querySelector(':root').style.setProperty("--home-primary", jsonData.home.primaryColor);
    document.querySelector(':root').style.setProperty("--away-accent", jsonData.away.accentColor);
    document.querySelector(':root').style.setProperty("--home-accent", jsonData.home.accentColor);
    document.querySelector(':root').style.setProperty("--away-bg", jsonData.away.bgColor);
    document.querySelector(':root').style.setProperty("--home-bg", jsonData.home.bgColor);


c("away-name").forEach(function(elem){
    elem.innerHTML=jsonData.away.name;
});
c("home-name").forEach(function(elem){
    elem.innerHTML=jsonData.home.name;
});

c("away-seed").forEach(function(elem){
    elem.innerHTML=jsonData.away.seed;
});
c("home-seed").forEach(function(elem){
    elem.innerHTML=jsonData.home.seed;
});

c("away-record").forEach(function(elem){
    elem.innerHTML="("+jsonData.away.record+")";
});
c("home-record").forEach(function(elem){
    elem.innerHTML="("+jsonData.home.record+")";
});

c("away-abbr").forEach(function(elem){
  elem.innerHTML=jsonData.away.abbriviation;
});
c("home-abbr").forEach(function(elem){
  elem.innerHTML=jsonData.home.abbriviation;
});

// c("away-starters-title").forEach(function(elem){
//     elem.innerHTML=jsonData.away.name+" Starters";
// });
// c("home-starters-title").forEach(function(elem){
//     elem.innerHTML=jsonData.home.name+" Starters";
// });

c("away-logo").forEach(function(elem){
    elem.setAttribute("src",jsonData.away.logo);
});
c("home-logo").forEach(function(elem){
    elem.setAttribute("src",jsonData.home.logo);
});
l3rdInit();
keysInit();
setTimeout(enlargeAllImages,1000);
}


var socket, msgData, jsonData;

function serverConnect(){
    
 socket = new WebSocket("ws://localhost:6788");


            
socket.addEventListener("open", function (event) {
e("wait-cover").style.display="none";
});


socket.addEventListener("close", function (event) {
setTimeout(function() {
    serverConnect();
  }, 1000);
});

socket.addEventListener("message", function(event){
msgData=event.data.split("=");
    switch(msgData[0]){
    case "broadcastFile":
    jsonData=JSON.parse(msgData[1]);
    init();
    break;
    default:
    message(msgData[0],msgData[1]);
    break;
}
});

}
serverConnect();
function send(param){
    socket.send(param);
}




