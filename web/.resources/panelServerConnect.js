// window.onbeforeunload = function(event) {
//     event.returnValue = "Whoa there! Leaving so soon??? O:";
//   };

function e(param){
    return document.getElementById(param);
}

function c(param){
    return document.querySelectorAll("."+param);

}

function active(param){
    e(param).classList.add("active");
}

function inactive(param){
    e(param).classList.remove("active");
}

function init(){

c("away").forEach(function(elem){
    elem.style.backgroundColor=jsonData.away.bgColor;
});

c("home").forEach(function(elem){
    elem.style.backgroundColor=jsonData.home.bgColor;
});


}


var socket, msgData, jsonData;

function serverConnect(){
    
 socket = new WebSocket("ws://localhost:6788");


            
socket.addEventListener("open", function (event) {
console.log("Websocket Connected!"); 
e("wait-cover").style.display="none";
});


socket.addEventListener("close", function (event) {
console.log("Websocket Disconnected :(");
e("wait-cover").style.display="none";
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
}
});

}


serverConnect();






function send(param){
    socket.send(param);
    console.log(param);
}




