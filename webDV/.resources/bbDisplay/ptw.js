
function ptwIn(param) {
    graphicIsLive=true;
    graphicLive="ptw";

    
    if(param=="a"){
        e("ptw-bg").style.backgroundColor=jsonData.away.bgColor;
  e("ptw-logo").setAttribute("src",jsonData.away.logo);
  e("ptw-player").innerHTML="<b>"+jsonData.away.ptwName+"</b><br>"+jsonData.away.ptwDesc;
  e("ptw-text").innerHTML=jsonData.away.ptwText


    }
    else{
      e("ptw-bg").style.backgroundColor=jsonData.away.bgColor;
      e("ptw-logo").setAttribute("src",jsonData.away.logo);
  e("ptw-player").innerHTML=jsonData.home.ptwName+"<br>"+jsonData.home.ptwDesc;
  e("ptw-text").innerHTML=jsonData.home.ptwText
    }

    setTimeout(function(){
      adjustTextV(e("ptw-player"),e("ptw-player-container"),45,35);
      adjustTextV(e("ptw-text"),e("ptw-text-container"),35,25);
      },200);

  e("ptw-cover").style.animation = "ptwIn 0.8s ease 0s";
  e("ptw").style.animation = "ptwIn 0.8s ease 0.9s";
  e("ptw-popup-bg").style.animation = "ptwPopupIn 0.4s ease-out 1.8s";
  e("ptw-sponsor-container").style.animation = "ptwPopupIn 0.4s ease-out 1.8s";
}


function ptwOut() {
  e("ptw-cover").style.animation = "ptwOut 0s linear 0s";
  e("ptw").style.animation = "ptwOut 0.6s ease 0s";
  setTimeout(function () {
    e("ptw-popup-bg").style.animation = "";
    e("ptw-sponsor-container").style.animation = "";
  }, 600);
}
