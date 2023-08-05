window.onbeforeunload=function(){}

var socket;

function serverConnect(){
    
 socket = new WebSocket("ws://localhost:6788");


            
socket.addEventListener("open", function (event) {
console.log("Websocket Connected!"); 
document.getElementById("wait-cover").style.display="none";

});


socket.addEventListener("close", function (event) {
console.log("Websocket Disconnected :(");
document.getElementById("wait-cover").style.display="none";
setTimeout(function() {
    serverConnect();
  }, 1000);
});

}

serverConnect();

// ------------------------ TIMER CODE ----------------------------------------------

var clockRemain=720, clock="12:00", input;

function clockStart(){
    socket.send("clock-start");
    document.getElementById("clock-start").classList.add("active");
    document.getElementById("clock-stop").classList.remove("active");
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }
document.getElementById("clock").innerHTML=clock;
if(clockRemain==0)
{
    clockStop();
}
    },1000);

}

function clockStop(){
    clearInterval(clockInterval);
    socket.send("clock-stop");
    socket.send("clockVal="+clockRemain);
    document.getElementById("clock-start").classList.remove("active");
    document.getElementById("clock-stop").classList.add("active");
}

function clockSet(param){
clockRemain=param;
if(clockRemain%60<10){
    clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
}
else{
clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
}
document.getElementById("clock").innerHTML=clock;
}

function clockUpdate(){
input = document.getElementById("clock-input").value;
input=input.replace(";",":");
if(input.includes(":")){
input = input.split(":");
clockSet(parseInt(input[0])*60+parseInt(input[1]));
}
else{
document.getElementById("clock-input").value="Error";
}
}

function clockReset(){
    setClock(720);
}

//----------------------------------------------------QUARTER CODE------------------------------------

var period=1, finalizeds;


function nextPeriod(){
period+=0.5;
updatePeriod();
}

function prevPeriod(){
    period-=0.5;
    updatePeriod();
    }