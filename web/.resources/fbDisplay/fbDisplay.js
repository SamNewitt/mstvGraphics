

  function clear(){
    if(graphicIsLive)
    {
    switch(graphicLive){
        case "bug":
        bugOut();
        break;
    }
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
            //TODO: Add +6 score
        break;
        case "homeTouchdown":
            bugTDAnimate("h");
        break;
        //---------------------------------------OTHER GFX------------------------------
    }
}