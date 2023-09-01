
function keysIn() {
    graphicIsLive=true;
    graphicLive="keys";
    e("keys-cover").style.animation = "keysIn 0.8s ease 0s";
    e("keys-container").style.animation = "keysIn 0.8s ease 0.9s";
  }
  function keysOut() {
    e("keys-cover").style.animation = "keysOut 0s linear 0s";
    e("keys-container").style.animation = "keysOut 0.6s ease 0s";
  }

  function keysInit(){
    e("keys-away-title").innerHTML=jsonData.away.name+":";
    e("keys-away-text").innerHTML=jsonData.away.key;
    e("keys-home-title").innerHTML=jsonData.home.name+":";
    e("keys-home-text").innerHTML=jsonData.home.key;
  }