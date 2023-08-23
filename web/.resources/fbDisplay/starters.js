var starterPlayers, startersAreIn=false;

function startersUpdate(param){
    switch (param){
        case "awayDef1":
            starterPlayers=jsonData.away.d1Players;
            e("starters-content-container").style.backgroundColor=jsonData.away.bgColor;
            e("starters-logo").setAttribute("src",jsonData.away.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.away.name+" Defense";
        break;
        case "awayDef2":
            starterPlayers=jsonData.away.d2Players;
            e("starters-content-container").style.backgroundColor=jsonData.away.bgColor;
            e("starters-logo").setAttribute("src",jsonData.away.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.away.name+" Defense";

        break;
        case "awayOff1":
            starterPlayers=jsonData.away.o1Players;
            e("starters-content-container").style.backgroundColor=jsonData.away.bgColor;
            e("starters-logo").setAttribute("src",jsonData.away.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.away.name+" Offense";

        break;
        case "awayOff2":
            starterPlayers=jsonData.away.o2Players;
            e("starters-content-container").style.backgroundColor=jsonData.away.bgColor;
            e("starters-logo").setAttribute("src",jsonData.away.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.away.name+" Offense";
        break;
        case "homeDef1":
            starterPlayers=jsonData.home.d1Players;
            e("starters-content-container").style.backgroundColor=jsonData.home.bgColor;
            e("starters-logo").setAttribute("src",jsonData.home.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.home.name+" Defense";
        break;
        case "homeDef2":
            starterPlayers=jsonData.home.d2Players;
            e("starters-content-container").style.backgroundColor=jsonData.home.bgColor;
            e("starters-logo").setAttribute("src",jsonData.home.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.home.name+" Defense";
        break;
        case "homeOff1":
            starterPlayers=jsonData.home.o1Players;
            e("starters-content-container").style.backgroundColor=jsonData.home.bgColor;
            e("starters-logo").setAttribute("src",jsonData.home.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.home.name+" Offense";

        break;
        case "homeOff2":
            starterPlayers=jsonData.home.o2Players;
            e("starters-content-container").style.backgroundColor=jsonData.home.bgColor;
            e("starters-logo").setAttribute("src",jsonData.home.logo);
            e("starters-title").innerHTML="Starting Lineup - "+jsonData.home.name+" Offense";
        break;
    }

    enlargeImage(e("starters-logo"))

    for(var i=0; i<6; i++){
        c("starter-number")[i].innerHTML="#"+starterPlayers[i].number;
        c("starter-name")[i].innerHTML=starterPlayers[i].name;
        c("starter-pos")[i].innerHTML="("+starterPlayers[i].position+")";
    }

    

}
function startersIn(param){
    if(startersAreIn)
    {
       e("starters-content").style.opacity="0";
       
       setTimeout(function(){
        startersUpdate(param);
       e("starters-content").style.opacity="1";
       },300)
    }
    else{
        startersUpdate(param);
        startersAreIn=true;
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
}



function startersOut(){
    startersAreIn=false;
    e("starters").style.animation="startersOut 1.5s ease 0s";
    e("starters-popup").style.animation="startersPopupOut 0.3s linear 0s";
    e("starters-popup-bg").style.animation="startersPopupOut 0.3s linear 0s";
    e("starters-logo-container").style.animation="startersLogoOut 0.7s ease 0s";

setTimeout(function(){
    e("starters-popup").style.display="none";
    e("starters-popup-bg").style.display="none";
},400)
}