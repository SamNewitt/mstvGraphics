// window.onbeforeunload = function(event) {
//     event.returnValue = "Whoa there! Leaving so soon??? O:";
//   };

function e(param){
    return document.getElementById(param);
}

function active(param){
    e(param).classList.add("active");
}

function inactive(param){
    e(param).classList.remove("active");
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
    console.log(param);
}

// ------------------------ TIMER CODE ----------------------------------------------

var clockRemain=720, clock="12:00", input;

function clockStart(){
    send("clock-start");
    active("clock-start");
    inactive("clock-stop")
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
    inactive("clock-start");
    active("clock-stop");
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
    inactive("final")
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
        active("final")
        finalized=true;
    }
    
}

// ------------------------------------------------------DOWN AND DISTANCE----------------------------
var downQue=1, downLive=1, downText, ddVisibilityEnabled=false; 

function down(param){
    downQue=param;
    inactive("d1");
    inactive("d2");
    inactive("d3");
    inactive("d4");



    active("d"+param);
if(param==1){
    e("dist-input").value=10;
}
    
        
        active("dd-update");
    
}

function distChanged(){
    active("dd-update");
}


function ddUpdate(){
    inactive("dd-update");
    downLive=downQue

    switch(downLive){
        case 1:
        downText="1st";
        break;
        case 2:
        downText="2nd";
        break;
        case 3:
        downText="3rd";
        break;
        case 4:
        downText="4th";
        break;
    }
    if(e("dist-input").value==""){}
    else if(parseInt(e("dist-input").value)==NaN){
        e("dist-input").value="g";
        downText=downText+" & Goal";
    }
    else if(parseInt(e("dist-input").value)==0){
        downText=downText+" & in";
    }
    else{
      
        downText=downText+" & "+e("dist-input").value;

    }

    send("dd="+downText);
    e("dd").innerHTML=downText;

}

function ddNext(){
    if(downLive==4){
        down(1);
        ddUpdate();
    }
    else{
        downLive++;
       down(downLive);
       switch(downLive){
        case 2:
        send("dd=2nd Down");
        e("dd").innerHTML="2nd Down";
        break;
        case 3:
        send("dd=3rd Down");
        e("dd").innerHTML="3rd Down";
        break;
        case 4:
        send("dd=4th Down");
        e("dd").innerHTML="4th Down";
        break;
       }
    }
}

function ddVisibility(){
    ddVisibilityEnabled=!ddVisibilityEnabled;
    if(ddVisibilityEnabled){
        active("dd-visibility");
        send("ddVisible");
    }
    else{
        inactive("dd-visibility");
        send("ddInvisible"); 
    }
}


