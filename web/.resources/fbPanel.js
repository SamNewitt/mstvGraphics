
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
    clockSet(720);
    send("clockVal="+clockRemain);
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
        clockReset();
    break;

    case 2:
        e("period").innerHTML="2nd";
    break;
    case 2.5:
        e("period").innerHTML="Half";
        clockReset();
        homeTO=3;
        awayTO=3;
        send("homeTO=3");
        send("awayTO=3");
        down(1);
        poss="n";
        send("poss=n");
        inactive("away-poss");
        inactive("home-poss");
        ddVisibilityEnabled=false;
        inactive("dd-visibility");
        send("ddInvisible"); 
    break;

    case 3:
        e("period").innerHTML="3rd";
    break;
    case 3.5:
        e("period").innerHTML="End 3rd";
        clockReset();
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
        send ("period=final");
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

//-------------------------------------------------------------SCORE---------------------------------------
var homeScore=0, awayScore=0;

function addAwayScore(param){
    if(awayScore+param>-1){
    awayScore+=param;
    e("away-score").innerHTML=awayScore;
    send("awayScore="+awayScore);
    }
}

function awayTD(){
    awayScore+=6;
    e("away-score").innerHTML=awayScore;
    send("awayTouchdown");
}

function addHomeScore(param){
    homeScore+=param;
    e("home-score").innerHTML=homeScore;
    send("homeScore="+homeScore);
}

function homeTD(){
    homeScore+=6;
    e("home-score").innerHTML=homeScore;
    send("homeTouchdown");
}

//-----------------------------------------------TIMEOUTS-------------------------------------
var awayTO=3, homeTO=3;

function addAwayTO(param){
    if(awayTO+param>-1 && awayTO+param<4){
    awayTO+=param;
    e("away-to").innerHTML="Timeouts: "+awayTO;
    send("awayTO="+awayTO)
    }
}

function takeAwayTO(){
    if(awayTO>0){
        awayTO--;
        e("away-to").innerHTML="Timeouts: "+awayTO;
        send("takeAwayTO")
    }
}

function addHomeTO(param){
    if(homeTO+param>-1 && homeTO+param<4){
        homeTO+=param;
    e("home-to").innerHTML="Timeouts: "+homeTO;
    send("homeTO="+homeTO)
    }
}

function takeHomeTO(){
    if(homeTO>0){
        homeTO--;
        e("home-to").innerHTML="Timeouts: "+homeTO;
        send("takeHomeTO")
    }
}


//---------------------------------------------------POSSESION-----------------------------------------------
var poss="n";

function awayPoss(){
    if(poss=="a"){
        poss="n";
        inactive("away-poss");
        ddVisibilityEnabled=false;
        inactive("dd-visibility");
        send("ddInvisible"); 
        down(1);
    }
    else{
        poss="a";
        active("away-poss");
        inactive("home-poss");
    }
    send("poss="+poss);
}

function homePoss(){
    if(poss=="h"){
        poss="n";
        inactive("home-poss");
        ddVisibilityEnabled=false;
        inactive("dd-visibility");
        send("ddInvisible"); 
        down(1);
    }
    else{
        poss="h";
        active("home-poss");
        inactive("away-poss");
    }
    send("poss="+poss);
}

//--------------------------------------------------FLAG CODE----------------------------------------------
var flagIn;

function flag(){
    flagIn=!flagIn
    if(flagIn){
        active("flag");
        send("flagIn");
    }
    else{
        inactive("flag");
        send("flagOut");
    }
}

//----------------------------------------------------BUG CODE-------------------------------------------------
var bug=false;

function clearAllGraphics(){
    inactive("bug-in");
    active("bug-out");
    bug=false;
    inactive("breakbox");
    inactive("corner-score");
    inactive("team-corners");
    inactive("transition");
    inactive("flag");
    inactiveC("away-popup");
    inactiveC("home-popup");



}

function bugIn(){
    if(!bug){
        clearAllGraphics();
        bug=true;
        active("bug-in");
        inactive("bug-out");
        send("bugIn");
    }
}

function bugOut(){
    if(bug){
        bug=false;
        active("bug-out");
        inactive("bug-in");
        inactive("flag");
        inactiveC("away-popup");
        inactiveC("home-popup");
        send("clear")
    }
}

function bugAnimate(){
    if(!bug){
        clearAllGraphics();
        bug=true;
        active("bug-in");
        inactive("bug-out");
        send("bugAnimate");
    }
}

//---------------------------------------SCORE GRAPHICS CODE------------------------------------------

var transTimout;

function breakbox(){
    if(isActive("breakbox")){
        clearAllGraphics();
        send("clear");
    }
    else{
        clearAllGraphics();
        active("breakbox")
        send("breakboxIn");
    }
}

function cornerScore(){
    if(isActive("corner-score")){
        clearAllGraphics();
        send("clear");
    }
    else{
        clearAllGraphics();
        active("corner-score")
        send("cornerScoreIn");
    }
}

function teamCorners(){
    if(isActive("team-corners")){
        clearAllGraphics();
        send("clear");
    }
    else{
        clearAllGraphics();
        active("team-corners")
        send("teamCornersIn");
    }
}

function transition(){
    if(isActive("transition")){
        clearAllGraphics();
        send("clear");
        clearTimeout(transTimout);
    }
    else{
        clearAllGraphics();
        active("transition")
        send("transition");
        transTimout=setTimeout(function(){
            clearAllGraphics(); 
        },10000);
    }
}

//-------------------------------------------------POPUP CODE-------------------------

function awayPopup(param,elem){
    if(bug){
        if(elem.classList.contains("active")){
            elem.classList.remove("active");
            send("awayPopupOut");
        }
        else{
            inactiveC("away-popup")
            elem.classList.add("active");
            send("awayPopup="+param);
        }
    }
}

function awayCustPopup(elem){
    awayPopup(e("away-popup-input").value.toUpperCase(),elem);
}

function homePopup(param,elem){
    if(bug){
        if(elem.classList.contains("active")){
            elem.classList.remove("active");
            send("homePopupOut");
        }
        else{
            inactiveC("home-popup")
            elem.classList.add("active");
            send("homePopup="+param);
        }
    }
}

function homeCustPopup(elem){
    homePopup(e("home-popup-input").value.toUpperCase(),elem);
}

function awayFlag(param,elem){
    if(bug){
        if(elem.classList.contains("active")){
            elem.classList.remove("active");
            send("awayPopupOut");
        }
        else{
            inactiveC("away-popup")
            elem.classList.add("active");
            send("awayFlag="+param);
        }
    }
}

function awayCustFlag(elem){
    awayFlag(e("away-flag-input").value.toUpperCase(),elem);
}

function homeFlag(param,elem){
    if(bug){
        if(elem.classList.contains("active")){
            elem.classList.remove("active");
            send("homePopupOut");
        }
        else{
            inactiveC("home-popup")
            elem.classList.add("active");
            send("homeFlag="+param);
        }
    }
}

function homeCustFlag(elem){
    homeFlag(e("home-flag-input").value.toUpperCase(),elem);
}