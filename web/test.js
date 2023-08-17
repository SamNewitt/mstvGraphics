function l3rdIn(title,text,color){
    switch(color){
        case "a":
            document.querySelector(':root').style.setProperty("--l3rd-bg", jsonData.away.bgColor);
        break;
        case "h":
            document.querySelector(':root').style.setProperty("--l3rd-bg", jsonData.home.bgColor);
        break;
        case "n":
            document.querySelector(':root').style.setProperty("--l3rd-bg", "#8a8c8e");
        break;
    }
    e("l3rd-general-title").innerHTML=title;
    e("l3rd-general-text").innerHTML=text;
    e("l3rd").style.animation="l3rdIn 0.5s ease-out 0s";
    e("l3rd-general").style.animation="l3rdIn 0.5s ease-out 0s";


}

l3rdOut();

function l3rdOut(){
    // e("l3rd").style.animation="l3rdOut 0.5s ease-in 0s";
    e("l3rd-general").style.animation="l3rdOut 0.5s ease-in 0s";
    // e("l3rd-annc").style.animation="l3rdOut 0.5s ease-in 0s";


}