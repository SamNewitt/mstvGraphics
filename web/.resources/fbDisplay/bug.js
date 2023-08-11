window.onload = downOut();
window.onload = bugOut();



function bugAnimate() {
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
  }
  
  function bugOut() {
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
    document.getElementById("away-popup-text").style.animation =
      "bugOut 0.5s ease-in 0s";
    document.getElementById("home-popup-text").style.animation =
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
  }
  
  function homePopupIn() {
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
  
  function awayPopupIn() {
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
    document.getElementById("bug-down").style.width = "150px";
    document.getElementById("bug-sponsor").style.width = "222px";
    document.getElementById("sponsor-rotator").style.maxWidth = "218px";
    document.getElementById("bug-down-text").style.animation =
      "opacityIn 0.2s linear 0.5s";
  }
  
  function flagIn() {
    document.getElementById("bug-flag").style.width = "200px";
    document.getElementById("bug-flag").style.animation = "";
  }
  
  function flagOut() {
    document.getElementById("bug-flag").style.width = "0px";
  }
  
  function bugTDAnimate() {
    document.getElementById("bug-team-cover").style.animation =
      "bugWipe 0.5s ease-out 0s";
  
    document.getElementById("bug-td-text").style.animation =
      "bugTDText 2.5s linear 0s";
  
    setTimeout(function () {
      document.getElementById("bug-td-logo").style.animation =
        "leftCornerLogoIn 0.9s ease 0s";
    }, 200);
  
    setTimeout(function () {
      document.getElementById("bug-td-logo").style.animation =
        "leftCornerScale 0.4s ease 0s";
    }, 1300);
  
    setTimeout(function () {
      document.getElementById("bug-td-text").style.animation = "";
      document.getElementById("bug-td-text").innerHTML = "ROOSEVELT";
    }, 2500);
  
    setTimeout(function () {
      document.getElementById("bug-td-text").style.animation =
        "bugTDText 2.5s linear 0s";
    }, 2520);
  
    setTimeout(function () {
      document.getElementById("bug-team-cover").style.animation =
        "bugTDOut 0.6s ease-out 0s";
      document.getElementById("bug-td-logo").style.animation =
        "bugTDLogoOut 0.7s ease 0s";
    }, 5010);
  }