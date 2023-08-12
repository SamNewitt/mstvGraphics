//----------------------------------------TIMER-----------------------------------------------------

var clockRemain=720, clock="12:00";

function clockStart(){
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }
setHTML("clock",clock);
if(clockRemain==0)
{
    clockStop();
}
},1000);
}

function clockStop(){
    clearInterval(clockInterval);
}

function clockSet(param){
clockRemain=param;
if(clockRemain%60<10){
    clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
}
else{
clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
}
setHTML("clock",clock);
}

//----------------------------------------------------------QUARTER-------------------------------------------------

var clockObjects=c("clock");

function period(param){
if(param.includes("End")||param == "Halftime" || param=="Final"){
    for(var i=0; i<clockObjects.length; i++){
        clockObjects[i].style.display="none";
    }
}
else{
    for(var i=0; i<clockObjects.length; i++){
        clockObjects[i].style.display="block";
    }
}
setHTML("period",param);
}

//-------------------------------------------------------------DOWN AND DISTANCE, POSS-----------------------------------------

function poss(param){
    
}
