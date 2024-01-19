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
    sidebarOut();
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

  var sponsors=["avera", "dnn", "cb","mitchell", "mstvWide","sds","bboBlack","mitchell","bigFrig","bomgaars","dbs","kcau","mitchell"];
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
var opacityOut="opacityOut 0.2s linear 0s", opacityIn="opacityIn 0.2s linear 0s";


function sidebarMSG(param){
  
  if(sidebarIn){
    e("sidebar-2").style.animation=opacityOut;
    setTimeout(function(){
      e("sidebar-2").innerHTML=param;
    e("sidebar-2").style.animation=opacityIn;
    if(param==""){
      e("sidebar-1").classList.add("sidebar-large-text");
      e("sidebar-1").classList.remove("sidebar-small-text");
    }
    else{
    e("sidebar-1").classList.remove("sidebar-large-text");
    e("sidebar-1").classList.add("sidebar-small-text");
    }
    },500);
  }
  else{
    e("sidebar-2").innerHTML=param;
    if(param==""){
      e("sidebar-1").classList.add("sidebar-large-text");
      e("sidebar-1").classList.remove("sidebar-small-text");
    }
    else{
    e("sidebar-1").classList.remove("sidebar-large-text");
    e("sidebar-1").classList.add("sidebar-small-text");
    }
  }
}


  function awaySidebar(param){
   e("sidebar").classList.remove("home");
   e("sidebar").classList.add("away");
   e("sidebar-text-container").classList.remove("home");
   e("sidebar-text-container").classList.add("away");

    if(sidebarIn && e("sidebar-1").innerHTML!=param){
      e("sidebar-1").style.animation=opacityOut;
      setTimeout(function(){
        e("sidebar-1").innerHTML=param;
      e("sidebar-1").style.animation=opacityIn;
      },500);
    }
    else{
    e("sidebar-1").innerHTML=param;
    document.getElementById("sidebar").style.animation = "sidebarIn 0.7s ease 0s";
    document.getElementById("sidebar-text-container").style.animation =
      "sidebarTextIn 0.2s ease 0.7s";
      sidebarIn=true;
    }
  }


  function homeSidebar(param){
    e("sidebar").classList.add("home");
    e("sidebar").classList.remove("away");
    e("sidebar-text-container").classList.add("home");
    e("sidebar-text-container").classList.remove("away");
 
     if(sidebarIn && e("sidebar-1").innerHTML!=param){
       e("sidebar-1").style.animation=opacityOut;
       setTimeout(function(){
         e("sidebar-1").innerHTML=param;
       e("sidebar-1").style.animation=opacityIn;
       },500);
     }
     else{
     e("sidebar-1").innerHTML=param;
     document.getElementById("sidebar").style.animation = "sidebarIn 0.7s ease 0s";
     document.getElementById("sidebar-text-container").style.animation =
       "sidebarTextIn 0.2s ease 0.7s";
       sidebarIn=true;
     }
   }


  function sidebarOut(){
    sidebarIn=false;
    document.getElementById("sidebar").style.animation =
    "sidebarOut 0.7s ease 0.3s";
  document.getElementById("sidebar-text-container").style.animation =
    "sidebarTextOut 0.2s ease 0s";
  }

  function tickerInit(){
    if(jsonData.gender=="b"){
      e("ticker-embed").setAttribute("src","https://ticker.scorefeed.net/ticker/4022651903/SD/BBB/gamebygame-oneline");
    }
    else if(jsonData.gender=="g"){
      e("ticker-embed").setAttribute("src","https://ticker.scorefeed.net/ticker/4022651903/SD/GBB/gamebygame-oneline");
    }
  }