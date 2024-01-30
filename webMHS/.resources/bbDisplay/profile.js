
function profileIn(param) {
    graphicIsLive=true;
    graphicLive="profile";

    if(param=="a"){
        e("profile-content").style.backgroundColor=jsonData.away.bgColor;
        e("profile-team").innerHTML=jsonData.away.name+" "+jsonData.away.mascot;
        e("profile-dropdown").innerHTML="Head Coach: <b>"+jsonData.away.coach+"</b>";
  e("profile-logo").setAttribute("src",jsonData.away.logo);
  e("profile-text").innerHTML=jsonData.away.profile;

    }
    else{
        e("profile-content").style.backgroundColor=jsonData.home.bgColor;
        e("profile-team").innerHTML=jsonData.home.name+" "+jsonData.home.mascot;
        e("profile-dropdown").innerHTML="Head Coach: <b>"+jsonData.home.coach+"</b>";
  e("profile-logo").setAttribute("src",jsonData.home.logo);
  e("profile-text").innerHTML=jsonData.home.profile;

    }
    setTimeout(function(){
        enlargeImage(e("profile-logo"));
      adjustTextV(e("profile-text"),e("profile-content-container"),40,30);
      },200);


    e("profile-cover").style.animation = "profileIn 0.8s ease 0s";
    e("profile-container").style.animation = "profileIn 0.8s ease 0.9s";
  
    setTimeout(function () {
    e("profile-container").style.animation = "";
      e("profile-container").style.height = "620px";
      e("profile-dropdown-bg").style.display = "block";
      e("profile-dropdown-container").style.display = "flex";
      adjustText(e("profile-dropdown"),e("profile-dropdown-container"),40,20);
  
      e("profile-dropdown-bg").style.animation =
        "profileDropdownIn 0.4s ease-out 0s";
      e("profile-dropdown-container").style.animation =
        "profileDropdownIn 0.4s ease-out 0s";
    }, 1800);
  }




  function profileOut() {
    e("profile-cover").style.animation = "profileOut 0s linear 0s";
    e("profile-container").style.animation = "profileOut 0.6s ease 0s";
  
    setTimeout(function () {
      e("profile-dropdown-container").style.display = "none";
      e("profile-dropdown-bg").style.display = "none";
      e("profile-dropdown-container").style.animation = "";
      e("profile-dropdown-bg").style.animation = "";
      e("profile-container").style.height = "0px";
    }, 600);
  }

  