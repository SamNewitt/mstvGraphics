// window.onbeforeunload = function(event) {
//     event.returnValue = "Whoa there! Leaving so soon??? O:";
//   };

function e(param){
    return document.getElementById(param);
}

var socket;

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

}

serverConnect();

function send(param){
    socket.send(param);
}

// ------------------------ TIMER CODE ----------------------------------------------

var clockRemain=720, clock="12:00", input;

function clockStart(){
    send("clock-start");
    e("clock-start").classList.add("active");
    e("clock-stop").classList.remove("active");
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }
e("clock").innerHTML=clock;
if(clockRemain==0)
{
    clockStop();
}
    },1000);

}

function clockStop(){
    clearInterval(clockInterval);
    send("clock-stop");
    send("clockVal="+clockRemain);
    e("clock-start").classList.remove("active");
    e("clock-stop").classList.add("active");
}

function clockSet(param){
clockRemain=param;
if(clockRemain%60<10){
    clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
}
else{
clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
}
e("clock").innerHTML=clock;
}

function clockUpdate(){
input = e("clock-input").value;
input=input.replace(";",":");
if(input.includes(":")){
input = input.split(":");
clockSet(parseInt(input[0])*60+parseInt(input[1]));
}
else{
e("clock-input").value="Error";
}
}

function clockReset(){
    setClock(720);
}

//----------------------------------------------------QUARTER CODE------------------------------------

var period=1, finalized;

function updatePeriod(){
send("period="+period);
switch (period){
    case 0:
        break;
    case 1:
        e("period").innerHTML="1st";
    break;
    case 1.5:
        e("period").innerHTML="End 1st";
    break;

    case 2:
        e("period").innerHTML="2nd";
    break;
    case 2.5:
        e("period").innerHTML="Half";
    break;

    case 3:
        e("period").innerHTML="3rd";
    break;
    case 3.5:
        e("period").innerHTML="End 3rd";
    break;

    case 4:
        e("period").innerHTML="4th";
    break;
    case 4.5:
        e("period").innerHTML="End Reg";
    break;

    case 5:
        e("period").innerHTML="OT";
    break;
    case 5.5:
        e("period").innerHTML="End 1OT";
    break;

    default:
    if(period%1==0){
        e("period").innerHTML=period-4+"OT";
    }
    else{
        e("period").innerHTML="End "+(Math.trunc(period)-4)+"OT";
        
    }
    break;
    
}
}

function nextPeriod(){
if(!finalized){
    period+=0.5;
updatePeriod();
}
}

function prevPeriod(){
   if(finalized)
   {
    finalized=false;
    updatePeriod();
    e("final").classList.remove("active");
   }
    else if(period!=1){
    period-=0.5;
    updatePeriod();
    }
    }

function final(){
    if (!finalized){
        e("period").innerHTML="Final";
        send ("final");
        e("final").classList.add("active");
        finalized=true;
    }
    
}