const socket = new WebSocket("ws://localhost:6788");
            
socket.addEventListener("open", function (event) {
console.log("Websocket Connected!"); 
});
socket.addEventListener("close", function (event) {
console.log("Websocket Disconnected :(")
});

socket.addEventListener("message", function(event){
switch (event.data){
    case "Touchdown":
document.getElementById("title").style.color="red";
    break;
}
});