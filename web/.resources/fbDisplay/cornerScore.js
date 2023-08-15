function csIn(){
    graphicIsLive=true;
    graphicLive="cs";
    e("corner-score").style.animation="cornerScoreIn 0.7s ease-out 0s";
}

function csOut(){
    e("corner-score").style.animation="cornerScoreOut 0.5s ease-in 0s";
}