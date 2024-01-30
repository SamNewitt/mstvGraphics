
function teamCornersIn() {
    graphicIsLive=true;
    graphicLive="tc";
    document.getElementById("away-corner").style.animation =
      "leftCornerIn 0.5s ease 0s";
    document.getElementById("home-corner").style.animation =
      "rightCornerIn 0.5s ease 0s";
  
    setTimeout(function () {
      document.getElementById("away-corner-logo").style.animation =
        "leftCornerLogoIn 0.9s ease 0s";
      document.getElementById("home-corner-logo").style.animation =
        "rightCornerLogoIn 0.9s ease 0s";
    }, 400);
  
    setTimeout(function () {
      document.getElementById("away-corner-logo").style.animation =
        "leftCornerScale 0.4s ease 0s";
      document.getElementById("home-corner-logo").style.animation =
        "rightCornerScale 0.4s ease 0s";
    }, 1500);
  }
  
  function teamCornersOut() {
    document.getElementById("away-corner").style.animation =
      "cornerOut 0.8s ease 0s";
    document.getElementById("home-corner").style.animation =
      "cornerOut 0.8s ease 0s";
    document.getElementById("away-corner-logo").style.animation =
      "cornerLogoOut 0.8s ease 0s";
    document.getElementById("home-corner-logo").style.animation =
      "cornerLogoOut 0.8s ease 0s";
  }