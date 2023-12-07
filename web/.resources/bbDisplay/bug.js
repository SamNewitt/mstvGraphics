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
  }
  
  function bugIn() {
    graphicIsLive=true;
    graphicLive="bug";
    document.getElementById("bug-container").style.animation =
      "bugIn 0.5s ease-out 0s";
      bugSponsors();
  }
  
  function homePopupIn(param) {
    clearTimeout(homePopupTimeout);
    e("home-popup-text").innerHTML=param;
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
  
  function awayPopupIn(param) {
    clearTimeout(awayPopupTimeout);
    e("away-popup-text").innerHTML=param;
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
 

var sidebarIn=false;

function sidebarMSG(){
  if(sidebarIn){
    
  }
}


  function awaySidebar(param){

  }