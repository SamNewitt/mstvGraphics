function sponsorIn(param) {
graphicIsLive=true;
graphicLive="sponsor";
  e("sponsor-logo").setAttribute("src","sponsors/"+param+".png");
  setTimeout(function(){
    enlargeImage(e("sponsor-logo"));
  },100);
  

    document.getElementById("sponsor-corner").style.animation =
      "sponsorCornerIn 0.5s ease 0s";
  
    setTimeout(function () {
      document.getElementById("sponsor-corner-logo").style.animation =
        "sponsorCornerLogoIn 0.9s ease 0s";
    }, 400);
  
    setTimeout(function () {
      document.getElementById("sponsor-corner-logo").style.animation =
        "sponsorCornerScale 0.4s ease 0s";
    }, 1500);
  }

  function sponsorOut() {
    document.getElementById("sponsor-corner").style.animation =
      "sponsorOut 0.8s ease 0s";
    document.getElementById("sponsor-corner-logo").style.animation =
      "sponsorLogoOut 0.8s ease 0s";
  }