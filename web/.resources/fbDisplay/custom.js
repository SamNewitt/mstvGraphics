function customIn(param){
    graphicIsLive=true;
    graphicLive="custom";
    e("custom").setAttribute("src","customImages/"+param+".png");
    e("custom").style.animation="opacityIn 0.5s linear 0s";
}

function customOut(){
    e("custom").style.animation="opacityOut 0.5s linear 0s";

}