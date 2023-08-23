

  function clear(){
    if(graphicIsLive)
    {
        graphicIsLive=false;
    switch(graphicLive){
        case "bug":
        bugOut();
        break;
        case "breakbox":
        breakboxOut();
        break;
        case "tc":
        teamCornersOut();
        break;
        case "cs":
        csOut();
        break;
        case "transition":
        transitionOut();
        break;
        case "l3rd":
        l3rdOut();
        break;
        case "sponsor":
        sponsorOut();
        break;
    }
}
if(startersAreIn){
    startersOut();
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
        case "clockStart":
            clockStart();
        break;
        case "clockStop":
            clockStop();
        break;
        case "clockVal":
            clockSet(data);
        break;
        case "period":
            period(data);
        break;
        case "poss":
            poss(data);
        break;
        case "dd":
            ddUpdate(data);
        break;
        case "awayScore":
            awayScore(data);
        break;
        case "homeScore":
            homeScore(data);
        break;
        case "takeAwayTO":
            awayTakeTO();
        break;
        case "awayTO":
            awayTO(data);
        break;
        case "takeHomeTO":
            homeTakeTO();
        break;
        case "homeTO":
            homeTO(data);
        break;
        //-------------------------------------SCOREBUG---------------------------------
        case "bugIn":
            clear();
            setTimeout(bugIn,waitTime);
        break;
        case "bugAnimate":
            clear();
            setTimeout(bugAnimate,waitTime);
        break;
        case "ddInvisible":
            downOut();
        break;
        case"ddVisible":
            downIn();
        break;
        case "flagIn":
            flagIn();
        break;
        case "flagOut":
            flagOut();
        break;
        case "awayPopup":
            awayPopupIn(data, false);
        break;
        case "awayFlag":
            awayPopupIn(data, true);
        break;
        case "awayPopupOut":
            awayPopupOut();
        break;
        case "homePopup":
            homePopupIn(data, false);
        break;
        case "homeFlag":
            homePopupIn(data, true);
        break;
        case "homePopupOut":
            homePopupOut();
        break;
        case "awayTouchdown":
            bugTDAnimate("a");
            awayScore(parseInt(prevAwayScore)+6);
        break;
        case "homeTouchdown":
            bugTDAnimate("h");
            homeScore(parseInt(prevHomeScore)+6);
        break;
        //---------------------------------------SCORE GFX------------------------------
        case "breakboxIn":
        clear();   
        setTimeout(breakboxIn,waitTime);
        break;
        case "teamCornersIn":
         clear();
         setTimeout(teamCornersIn,waitTime);
        break;
        case "cornerScoreIn":
            clear();
         setTimeout(csIn,waitTime);
        break;
        case "transition":
        transitionIn();
        break;
        //------------------------------------OTHER GFX-------------------------------
        case "l3rd":
            clear()
            setTimeout(function(){
                l3rd(data);
            },waitTime)
        break;
        case "customL3rdTitle":
            l3rdSetTitle(data);
        break;
        case "customL3rdText":
            l3rdSetText(data);
        break;
        case "starters":
            startersIn(data);
        break;
        case "clearStarters":
            startersOut();
        break;
        case "sponsorCorner":
         clear()
            setTimeout(function(){
                sponsorIn(data);
            },waitTime)
        break;
        
    }
}