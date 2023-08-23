var transTimeout, graphicWasLive;

function transitionIn(){
    graphicWasLive=graphicLive;
    graphicIsLive=true;
    graphicLive="transition";
    e("trans-away").style.animation="transAwayIn 0.75s ease 0s";
    e("trans-home").style.animation="transHomeIn 0.75s linear 0s";
    e("trans-away-content").style.animation="transAwayContent 3s linear 0s";
    e("trans-home-content").style.animation="transHomeContent 3s linear 0s";

    transTimeout=setTimeout(transitionClear,5000)

}

function transitionClear(){
    graphicLive=graphicWasLive;
    clear();
    e("trans-away").style.animation="";
    e("trans-home").style.animation="";
    e("trans-away-content").style.animation="";
    e("trans-home-content").style.animation="";
}

function transitionOut(){
    clearTimeout(transTimeout);
    e("trans-away").style.animation="";
    e("trans-home").style.animation="";
    e("trans-away-content").style.animation="";
    e("trans-home-content").style.animation=""; 
}
