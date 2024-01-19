function customIn(param){
    graphicIsLive=true;
    graphicLive="custom";
    e("custom").setAttribute("src","../customImages/"+param+".png");
    e("custom-container").style.animation="customIn 1.5s ease 0s";
    // e("custom").style.animation="opacityIn 5s linear 0s";
}

function customOut(){
    // e("custom").style.animation="opacityOut 5s linear 0s";
    e("custom-container").style.animation="customOut 1.5s ease 0s";


}