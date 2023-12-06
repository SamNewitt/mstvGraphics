

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
        case "gi":
            giOut();
        break;
        case "profile":
        profileOut();
        break;
        case "ptw":
            ptwOut();
        break;
        case "keys":
        keysOut();
        break;
        case "l3rd":
        l3rdOut();
        break;
        case "sponsor":
        sponsorOut();
        break;
        case "show":
        showOut();
        break;
        case "pog":
        pogOut();
        break;
        case "custom":
        customOut();
        break;
    }
}
if(startersAreIn){
    startersOut();
}
  }

  var waitTime=0;
function message(type, data){
    if(graphicIsLive){
        waitTime=610;
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
        case "gameIntro":
            clear();
            setTimeout(function(){
                giIn();
            },waitTime);
        break;
        case "awayProfile":
            clear();
            setTimeout(function(){
                profileIn("a");
            },waitTime);
        break;
        case "homeProfile":
            clear();
            setTimeout(function(){
                profileIn("h");
            },waitTime);
        break;
        case "keys":
            clear();
            setTimeout(function(){
                keysIn();
            },waitTime);
        break;
        case "awayPTW":
            clear();
            setTimeout(function(){
                ptwIn("a");
            },waitTime);
        break;
        case "homePTW":
            clear();
            setTimeout(function(){
                ptwIn("h");
            },waitTime);
        break;
        case "l3rd":
            clear();
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
        case "pregame":
            clear();
         setTimeout(pregameIn,waitTime);
        break;
        case "halftime":
            clear();
         setTimeout(halftimeIn,waitTime);
        break;
        case "postgame":
            clear();
         setTimeout(postgameIn,waitTime);
        break;
        case "pog":
            clear();
            setTimeout(function(){
                pogIn(data);
            },waitTime);
        break;
        case "customImage":
            clear();
            setTimeout(function(){
                customIn(data);
            },waitTime);
        break;
    }
}