var opacityOut="opacityOut 0.2s linear 0s", opacityIn="opacityIn 0.2s linear 0s";
//----------------------------------------TIMER-----------------------------------------------------

var clockRemain=480, clock="8:00";

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
if(param.includes("Final")){
    if(parseInt(e("bug-away-score").innerHTML)>parseInt(e("bug-home-score").innerHTML)){
        setHTML("away-record","("+jsonData.away.winRecord+")");
        setHTML("home-record","("+jsonData.home.loseRecord+")");
    }
    else{
        setHTML("home-record","("+jsonData.home.winRecord+")");
        setHTML("away-record","("+jsonData.away.loseRecord+")");
    }
}
if(param.includes("End")||param == "Halftime" || param.includes("Final")){
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


//------------------------------------------------------------SCORE-----------------------------------------
var prevAwayScore=0, prevHomeScore=0;

function awayScore(param){
    if(param>prevAwayScore){
    e("bug-away-score").style.animation=opacityOut;
    setTimeout(function(){
        setHTML("away-score",param);
    e("bug-away-score").style.animation=opacityIn;
    },500);
}
else{
    setHTML("away-score",param);
}
prevAwayScore=param;
}

function homeScore(param){
    if(param>prevHomeScore){
    e("bug-home-score").style.animation=opacityOut;
    setTimeout(function(){
        setHTML("home-score",param);
    e("bug-home-score").style.animation=opacityIn;
    },500);
}
else{
    setHTML("home-score",param);
}
prevHomeScore=param;
}

//-----------------------------------------------------FOULS CODE---------------------------------------------

function awayFouls(param){
    setHTML("away-fouls",param);
    if(param<5){
        setHTML("home-bonus","");
    }
    else{
        setHTML("home-bonus","Bonus");
    }
}


function homeFouls(param){
    setHTML("home-fouls",param);
    if(param<5){
        setHTML("away-bonus","");
    }
    else{
        setHTML("away-bonus","Bonus");
    }
}
//-----------------------------------------------------TIMEOUT CODE---------------------------------------------

var awayPopupTimeout, homePopupTimeout, awayTORemaining=5, homeTORemaining=5, awayTOBubbles=c("away-to"), homeTOBubbles=c("home-to");

function awayTakeTO(){
    if(graphicIsLive && graphicLive=="bug"){
  awayPopupIn("TIMEOUT", false);
  awayTOBubbles[awayTORemaining-1].style.animation="awayFlashTO 0.75s linear 0s 6";

  awayPopupTimeout= setTimeout(function(){
    awayPopupOut();
  },4000)
  setTimeout(function(){
    awayTOBubbles[awayTORemaining-1].classList.remove("remain");
    awayTOBubbles[awayTORemaining-1].style.animation="";
    awayTORemaining--;
  },4125)
}
else{
    awayTO(awayTORemaining-1);
}
 
}

function awayTO(param){
    awayTOBubbles[0].classList.remove("remain");
    awayTOBubbles[1].classList.remove("remain");
    awayTOBubbles[2].classList.remove("remain");
    awayTOBubbles[3].classList.remove("remain");
    awayTOBubbles[4].classList.remove("remain");

    awayTORemaining=param;
    if(param>0){
    awayTOBubbles[0].classList.add("remain");
    }
    if(param>1){
        awayTOBubbles[1].classList.add("remain");
        }
    if(param>2){
    awayTOBubbles[2].classList.add("remain");
    }
    if(param>3){
        awayTOBubbles[3].classList.add("remain");
        }
    if(param>4){
            awayTOBubbles[4].classList.add("remain");
     }
}

function homeTakeTO(){
    if(graphicIsLive && graphicLive=="bug"){
        homePopupIn("TIMEOUT", false);
  homeTOBubbles[homeTORemaining-1].style.animation="homeFlashTO 0.75s linear 0s 6";

  homePopupTimeout= setTimeout(function(){
    homePopupOut();
  },4000)
  setTimeout(function(){
    homeTOBubbles[homeTORemaining-1].classList.remove("remain");
    homeTOBubbles[homeTORemaining-1].style.animation="";
    homeTORemaining--;
  },4125)
}
else{
    homeTO(homeTORemaining-1);
}
 
}

function homeTO(param){
    homeTOBubbles[0].classList.remove("remain");
    homeTOBubbles[1].classList.remove("remain");
    homeTOBubbles[2].classList.remove("remain");
    homeTOBubbles[3].classList.remove("remain");
    homeTOBubbles[4].classList.remove("remain");
    homeTORemaining=param;
    if(param>0){
    homeTOBubbles[0].classList.add("remain");
    }
    if(param>1){
        homeTOBubbles[1].classList.add("remain");
        }
    if(param>2){
        homeTOBubbles[2].classList.add("remain");
    }
    if(param>3){
        homeTOBubbles[3].classList.add("remain");
    }
    if(param>4){
        homeTOBubbles[4].classList.add("remain");
    }
}

//-------------------------------------------------------POSS CODE---------------------------------

function poss(param){
    switch(param){
        case "a":
        setHTML("home-poss","");
        setHTML("away-poss","Poss");
        break;
        case "h":
            setHTML("away-poss","");
            setHTML("home-poss","Poss");
            break;
        case "n":
            setHTML("home-poss","");
             setHTML("away-poss","");
             break;
    }
}

function possAnim(param){
    if(param=="h"){

        if(graphicIsLive && graphicLive=="bug"){
            awayPopupIn(jsonData.away.mascot.toUpperCase()+" BALL", false);
            setHTML("away-poss","")
            
        setTimeout(function(){setHTML("away-poss","Poss");},500);
        setTimeout(function(){setHTML("away-poss","");},1000);
        setTimeout(function(){setHTML("away-poss","Poss");},1500);
        setTimeout(function(){setHTML("away-poss","");},2000);
        setTimeout(function(){setHTML("away-poss","Poss");},2500);
        setTimeout(function(){setHTML("away-poss","");},3000);
        setTimeout(function(){setHTML("away-poss","Poss");},3500);
        
    awayPopupTimeout=setTimeout(function(){
    poss("h");
    awayPopupOut();
    },4000);
    
        }
        else{
            poss("h");
        }

    }

    else if(param=="a"){
        if(graphicIsLive && graphicLive=="bug"){
            homePopupIn(jsonData.home.mascot.toUpperCase()+" BALL", false);
            setHTML("home-poss","")
            
        setTimeout(function(){setHTML("home-poss","Poss");},500);
        setTimeout(function(){setHTML("home-poss","");},1000);
        setTimeout(function(){setHTML("home-poss","Poss");},1500);
        setTimeout(function(){setHTML("home-poss","");},2000);
        setTimeout(function(){setHTML("home-poss","Poss");},2500);
        setTimeout(function(){setHTML("home-poss","");},3000);
        setTimeout(function(){setHTML("home-poss","Poss");},3500);
        
    homePopupTimeout=setTimeout(function(){
    poss("a");
    homePopupOut();
    },4000);
    
        }
        else{
            poss("h");
        }
    }
}