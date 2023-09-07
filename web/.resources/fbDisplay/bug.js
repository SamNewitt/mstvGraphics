window.onload = downOut();
window.onload = bugOut();



function bugAnimate() {
    graphicIsLive=true;
    graphicLive="bug";
    document.getElementById("bug-animate-cover").style.maxWidth = "0px";
    document.getElementById("bug-container").style.maxWidth = "0px";
    document.getElementById("bug-animate-cover").style.animation =
      "bugWipe 0.5s ease-out 0s";
  
    document.getElementById("bug-animate-text").style.animation =
      "bugAnimateText 1.75s linear 0s";
  
    document.getElementById("bug-container").style.animation =
      "bugWipe 0.5s ease-out 1.25s";
    setTimeout(bugAnimateSet, 2000);
  }
  
  function bugAnimateSet() {
    document.getElementById("bug-animate-cover").style.maxWidth = "1280px";
    document.getElementById("bug-container").style.maxWidth = "1280px";
    document.getElementById("bug-animate-text").style.animation = "";
    bugSponsors();
  }
  
  function bugOut() {
    clearInterval( sponsorsInterval);
    graphicIsLive=false;
    awayPopupOut();
    homePopupOut();
    document.getElementById("bug-animate-cover").style.animation =
      "bugOut 0.5s ease-in 0s";
    document.getElementById("bug-container").style.animation =
      "bugOut 0.5s ease-in 0s";
  
    document.getElementById("away-popup").style.animation =
      "bugOut 0.5s ease-in 0s";
    document.getElementById("home-popup").style.animation =
      "bugOut 0.5s ease-in 0s";
    document.getElementById("away-popup-container").style.animation =
      "bugOut 0.5s ease-in 0s";
    document.getElementById("home-popup-container").style.animation =
      "bugOut 0.5s ease-in 0s";
    document.getElementById("bug-flag").style.animation =
      "bugOut 0.5s ease-in 0s";
      setTimeout(flagOut,500);
  }
  
  function bugIn() {
    graphicIsLive=true;
    graphicLive="bug";
    document.getElementById("bug-container").style.animation =
      "bugIn 0.5s ease-out 0s";
      bugSponsors();
  }
  
  function homePopupIn(param, flag) {
    clearTimeout(homePopupTimeout);
    e("home-popup-text").innerHTML=param;
    if(flag){
        e("home-popup").classList.add("flag-bug-popup");
        e("home-popup-text").classList.add("flag");
    }
    else{
        e("home-popup").classList.remove("flag-bug-popup");
        e("home-popup-text").classList.remove("flag");
    }
    adjustText(e("home-popup-text"),e("home-popup-container"),32,20);
    document.getElementById("home-popup").style.animation =
      "popupIn 0.2s linear 0s";
    document.getElementById("home-popup-container").style.animation =
      "popupIn 0.2s linear 0s";
  }
  
  function homePopupOut() {
    document.getElementById("home-popup").style.animation =
      "popupOut 0.2s linear 0s";
    document.getElementById("home-popup-container").style.animation =
      "popupOut 0.2s linear 0s";
  }
  
  function awayPopupIn(param, flag) {
    clearTimeout(awayPopupTimeout);
    e("away-popup-text").innerHTML=param;
    if(flag){
        e("away-popup").classList.add("flag-bug-popup");
        e("away-popup-text").classList.add("flag");
    }
    else{
        e("away-popup").classList.remove("flag-bug-popup");
        e("away-popup-text").classList.remove("flag");
    }
    adjustText(e("away-popup-text"),e("away-popup-container"),32,20);
    document.getElementById("away-popup").style.animation =
      "popupIn 0.2s linear 0s";
    document.getElementById("away-popup-container").style.animation =
      "popupIn 0.2s linear 0s";
  }
  
  function awayPopupOut() {
    document.getElementById("away-popup").style.animation =
      "popupOut 0.2s linear 0s";
    document.getElementById("away-popup-container").style.animation =
      "popupOut 0.2s linear 0s";
  }
  
  function downOut() {
    setTimeout(downOut2, 200);
    document.getElementById("bug-down-text").style.animation =
      "opacityOut 0.2s linear 0s";
  }
  
  function downOut2() {
    document.getElementById("bug-down").style.width = "0px";
    document.getElementById("bug-sponsor").style.width = "372px";
    document.getElementById("sponsor-rotator").style.maxWidth = "368px";
  }
  function downIn() {
    document.getElementById("bug-down-text").style.animation =
    "opacityOut 0s linear 0s";
    document.getElementById("bug-down").style.width = "150px";
    document.getElementById("bug-sponsor").style.width = "222px";
    document.getElementById("sponsor-rotator").style.maxWidth = "218px";
    setTimeout(function(){
    document.getElementById("bug-down-text").style.animation =
      "opacityIn 0.2s linear 0s";
    },500);
    
  }
  
  function flagIn() {
    document.getElementById("bug-flag").style.width = "200px";
    document.getElementById("bug-flag").style.animation = "";
  }
  
  function flagOut() {
    document.getElementById("bug-flag").style.width = "0px";
  }
  
var tdTeam;

  function bugTDAnimate(team) {
    if(graphicLive=="bug" && graphicIsLive)
    {
    if(team=="a"){
        tdTeam=jsonData.away.name.toUpperCase();
        away("bug-td-cover");
        away("bug-td-text");
        e("bug-td-logo-image").setAttribute("src",jsonData.away.logo);
    }
    else{
        tdTeam=jsonData.home.name.toUpperCase();
        home("bug-td-cover");
        home("bug-td-text");
        e("bug-td-logo-image").setAttribute("src",jsonData.home.logo);
    }
    enlargeImage(e("bug-td-logo-image"));
    document.getElementById("bug-td-text").innerHTML = "TOUCHDOWN";
    document.getElementById("bug-td-cover").style.animation =
      "bugWipe 0.5s ease-out 0s";
  
    document.getElementById("bug-td-text").style.animation =
      "bugTDText 2.5s linear 0s";
  
    setTimeout(function () {
      document.getElementById("bug-td-logo").style.animation =
        "bugLeftCornerLogoIn 0.9s ease 0s";
    }, 200);
  
    setTimeout(function () {
      document.getElementById("bug-td-logo").style.animation =
        "bugLeftCornerScale 0.4s ease 0s";
    }, 1300);
  
    setTimeout(function () {
      document.getElementById("bug-td-text").style.animation = "";
      document.getElementById("bug-td-text").innerHTML = tdTeam;
    }, 2500);
  
    setTimeout(function () {
      document.getElementById("bug-td-text").style.animation =
        "bugTDText 2.5s linear 0s";
    }, 2600);
  
    setTimeout(function () {
      document.getElementById("bug-td-cover").style.animation =
        "bugTDOut 0.6s ease-out 0s";
      document.getElementById("bug-td-logo").style.animation =
        "bugTDLogoOut 0.7s ease 0s";
      document.getElementById("bug-td-text").style.animation = "";

    }, 5010);
}
  }

  var sponsorsInterval, currSponsor=0;

  var sponsors=["avera", "dnn", "fox", "gs", "amFam","cb", "ilcc","jtw","ls", "avera", "dnn", "fox", "gs", "mstvWide","sds","shenanigans","touchmark","vern"];
  e("sponsor-rotator").setAttribute("src","sponsors/"+sponsors[0]+".png")


  function bugSponsors(){
    sponsorsInterval = setInterval(function(){
      currSponsor++;
      if(currSponsor==sponsors.length){
        currSponsor=0;
      }
      e("sponsor-rotator").setAttribute("src","sponsors/"+sponsors[currSponsor]+".png")
    },15000)
  }
 