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
    adjustText(e("l3rd-general-title"),e("l3rd-general-title-container"),44,30)
    e("l3rd-general-text").innerHTML=text;
    adjustTextV(e("l3rd-general-text"),e("l3rd-general-text-container"),27,15)
    e("l3rd").style.animation="l3rdIn 0.5s ease-out 0s";
    e("l3rd-general").style.animation="l3rdIn 0.5s ease-out 0s";
}

function anncIn(){
    document.querySelector(':root').style.setProperty("--l3rd-bg", "#8a8c8e");
    

    e("l3rd").style.animation="l3rdIn 0.5s ease-out 0s";
    e("l3rd-annc").style.animation="l3rdIn 0.5s ease-out 0s";
}

function copyrightIn(){
    document.querySelector(':root').style.setProperty("--l3rd-bg", "#8a8c8e");
    e("l3rd").style.animation="l3rdIn 0.5s ease-out 0s";
    e("l3rd-copyright").style.animation="l3rdIn 0.5s ease-out 0s";
}

l3rdOut();

function l3rdOut(){
    e("l3rd").style.animation="l3rdOut 0.5s ease-in 0s";
    e("l3rd-general").style.animation="l3rdOut 0.5s ease-in 0s";
    e("l3rd-annc").style.animation="l3rdOut 0.5s ease-in 0s";
    e("l3rd-copyright").style.animation="l3rdOut 0.5s ease-in 0s";


}

function l3rdInit(){
    c("l3rd-annc-title")[0].innerHTML=jsonData.announcer1;
    c("l3rd-annc-title")[1].innerHTML=jsonData.announcer2;
    adjustTextAll(c("l3rd-annc-title"),c("l3rd-annc-title-container"),44,30);
   
    c("l3rd-annc-text")[0].innerHTML="<i class='fa-brands fa-x-twitter' style='padding-right:3px;'></i>"+jsonData.announcerHandle1;
    c("l3rd-annc-text")[1].innerHTML="<i class='fa-brands fa-x-twitter' style='padding-right:3px;'></i>"+jsonData.announcerHandle2;
    adjustTextAll(c("l3rd-annc-text"),c("l3rd-annc-title-text"),44,30);
}

l3rdInit();