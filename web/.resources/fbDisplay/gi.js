function giIn() {
    graphicIsLive=true;
    graphicLive="gi";

    e("gi-teams").style.animation = "";
    e("gi-bg").style.animation = "giMiddleIn 0.6s ease-out 0s";
    e("gi-middle").style.animation = "giMiddleIn 0.6s ease-out 0s";
    e("gi-away-container").style.animation = "giTeamIn 0.8s ease-out 0.5s";
    e("gi-home-container").style.animation = "giTeamIn 0.8s ease-out 0.5s";
    e("gi-away").style.animation = "giAway 0.8s ease-out 0.5s";
  
    setTimeout(function () {
      e("gi-away-logo-container").style.animation = "giAwayLogo 0.5s ease-out 0s";
      e("gi-home-logo-container").style.animation = "giHomeLogo 0.5s ease-out 0s";
    }, 1100);
  }
  function giOut() {
    e("gi-home-logo-container").style.animation = "giOut 0.6s ease-in 0s";
    e("gi-away-logo-container").style.animation = "giOut 0.6s ease-in 0s";
    e("gi-teams").style.animation = "giOut 0.6s ease-in 0s";
    e("gi-bg").style.animation = "giMiddleOut 0.6s ease-in 0s";
    e("gi-middle").style.animation = "giMiddleOut 0.6s ease-in 0s";
    setTimeout(function () {
      e("gi-away-container").style.animation = "";
      e("gi-home-container").style.animation = "";
      e("gi-away").style.animation = "";
    }, 600);
  }

  function giInit(){
    if(jsonData.away.seed==""){
    e("away-desc").innerHTML="("+jsonData.away.record+")";
    }
    else{
        e("away-desc").innerHTML="(#"+jsonData.away.seed+", "+jsonData.away.record+")";
    }

     if(jsonData.home.seed==""){
    e("home-desc").innerHTML="("+jsonData.home.record+")";
    }
    else{
        e("home-desc").innerHTML="(#"+jsonData.home.seed+", "+jsonData.home.record+")";
    }
    giOut();
  }