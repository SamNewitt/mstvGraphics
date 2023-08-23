function startersIn(){
    e("starters").style.animation="startersIn 1.5s ease 0s";
    
    setTimeout(function(){
    e("starters-logo-container").style.animation="startersLogoIn 0.7s ease 0s";
    },800);

    setTimeout(function(){
        e("starters-popup").style.display="flex";
        e("starters-popup-bg").style.display="block";
        e("starters-popup").style.animation="startersPopupIn 0.3s linear 0s";
    e("starters-popup-bg").style.animation="startersPopupIn 0.3s linear 0s";
    },1500);

}

function startersOut(){
    e("starters").style.animation="startersOut 1.5s ease 0s";
    e("starters-popup").style.animation="startersOut 0.3s linear 0s";
    e("starters-popup-bg").style.animation="startersPopupOut 0.3s linear 0s";
    e("starters-logo-container").style.animation="startersLogoOut 0.7s ease 0s";

setTimeout(function(){
    e("starters-popup").style.display="none";
    e("starters-popup-bg").style.display="none";
},400)
}