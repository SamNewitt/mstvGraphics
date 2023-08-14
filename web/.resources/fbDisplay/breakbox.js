
function breakboxIn() {
    graphicIsLive=true;
    graphicLive="breakbox";
    document.getElementById("breakbox").style.marginTop = "567px";
  
    setTimeout(function () {
      document.getElementById("breakbox-away-logo").style.animation =
        "breakboxAwayLogoIn 0.7s ease 0s";
      document.getElementById("breakbox-home-logo").style.animation =
        "breakboxHomeLogoIn 0.7s ease 0s";
    }, 200);
    setTimeout(function () {
      document.getElementById("breakbox-away-logo").style.animation =
        "breakboxAwayLogoScale 0.4s ease 0s";
      document.getElementById("breakbox-home-logo").style.animation =
        "breakboxHomeLogoScale 0.4s ease 0s";
    }, 1000);
  }
  
  function breakboxOut() {
    document.getElementById("breakbox").style.marginTop = "757px";
    document.getElementById("breakbox-away-logo").style.animation =
      "breakboxLogoOut 0.5s ease 0s";
  
    document.getElementById("breakbox-home-logo").style.animation =
      "breakboxLogoOut 0.5s ease 0s";
  }