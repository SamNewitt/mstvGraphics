var undoTree=[], awayStarters=[], homeStarters=[], awayBench=[], homeBench=[];
// ------------------------ TIMER CODE ----------------------------------------------
var clockRemain=480, clock="8:00", input, clockInterval=null, clockRunning=false;

function clockStart(){
    if(!clockRunning && clockRemain>0){
    clockRunning=true;
    send("clockVal="+clockRemain);

    send("clockStart");
    active("clock-start");
    inactive("clock-stop");
    clockInterval = setInterval(function(){
        clockRemain--;
        if(clockRemain%60<10){
            clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
        }
        else{
        clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
        }
e("clock").innerHTML=clock;
if(clockRemain<1)
{
    clockStop();
}
    },1000);
    }
}

function clockStop(){
    if(clockRunning){
    clockRunning=false;
    clearInterval(clockInterval);
    send("clockStop");
    send("clockVal="+clockRemain);
    inactive("clock-start");
    active("clock-stop");
    if(clockRemain%60<10){
        e("clock-input").value=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
    }
    else{
        e("clock-input").value=Math.trunc(clockRemain/60)+":"+clockRemain%60;
    }
    }
}

function clockToggle(){
    if(clockRunning){
        clockStop()
    }
    else{
        clockStart();
    }
}

function clockSet(param){
clockRemain=param;
if(clockRemain%60<10){
    clock=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
}
else{
clock=Math.trunc(clockRemain/60)+":"+clockRemain%60;
}
e("clock").innerHTML=clock;
send("clockVal="+clockRemain);

}
var clockInputError=false;
function clockUpdate(){
input = e("clock-input").value;
input=input.replace(";",":");
if(!input.includes(":")){
clockInputError=true;
}
input = input.split(":");
if(Number.isInteger(parseInt(input[0])*60+parseInt(input[1])) && (parseInt(input[0])*60+parseInt(input[1]))>=0){
clockSet(parseInt(input[0])*60+parseInt(input[1]));

e("clock-update").classList.remove("update");
e("clock-update").innerHTML="Update (M)";
}
else{
    clockInputError=true;
}
if(clockInputError){
    clockInputError=false;
e("clock-input").value="Error";
setTimeout(function(){
    if(clockRemain%60<10){
        e("clock-input").value=Math.trunc(clockRemain/60)+":0"+clockRemain%60;
    }
    else{
        e("clock-input").value=Math.trunc(clockRemain/60)+":"+clockRemain%60;
    }
    e("clock-input").focus();
    e("clock-input").select();
},500);
}

}

function clockReset(){
    clockSet(480);
}

function clockType(){
    e("clock-update").classList.add("update");
    e("clock-update").innerHTML="Update (Ent)";
}

//----------------------------------------------------QUARTER CODE------------------------------------

var period=1, finalized;

function updatePeriod(){
switch (period){
    case 0:
        break;
    case 1:
        e("period").innerHTML="1st";
send("period=1st");

    break;
    case 1.5:
        e("period").innerHTML="End 1st";
send("period=End 1st");
        clockReset();
    break;

    case 2:
        e("period").innerHTML="2nd";
send("period=2nd");
switchPoss();
homeFouls=0;
awayFouls=0;
send("awayFouls=0");
send("homeFouls=0");
e("away-fouls").innerHTML="Fouls: 0";
e("home-fouls").innerHTML="Fouls: 0";
    break;
    case 2.5:
        e("period").innerHTML="Half";
send("period=Halftime");
        clockReset();
    break;

    case 3:
        e("period").innerHTML="3rd";
send("period=3rd");
switchPoss();
homeFouls=0;
awayFouls=0;
send("awayFouls=0");
send("homeFouls=0");
e("away-fouls").innerHTML="Fouls: 0";
e("home-fouls").innerHTML="Fouls: 0";


    break;
    case 3.5:
        e("period").innerHTML="End 3rd";
send("period=End 3rd");
        clockReset();
    break;

    case 4:
        e("period").innerHTML="4th";
        send("period=4th");
switchPoss();
homeFouls=0;
awayFouls=0;
send("awayFouls=0");
send("homeFouls=0");
e("away-fouls").innerHTML="Fouls: 0";
e("home-fouls").innerHTML="Fouls: 0";
    break;
    case 4.5:
        e("period").innerHTML="End Reg";
        send("period=End Reg");
    break;

    case 5:
        e("period").innerHTML="OT";
        send("period=OT");
        clockSet(240);
    break;
    case 5.5:
        e("period").innerHTML="End 1OT";
        send("period=End 1OT");
    break;

    default:
    if(period%1==0){
        e("period").innerHTML=period-4+"OT";
        send("period="+(period-4)+"OT");
        clockSet(240);
    }
    else{
        e("period").innerHTML="End "+(Math.trunc(period)-4)+"OT";
        send("period=End "+(Math.trunc(period)-4)+"OT");
    }
    break;
    
}
}

function nextPeriod(){
if(!finalized){
    undoTree.push("nextPeriod")
    period+=0.5;
updatePeriod();
}
}

function prevPeriod(){
   if(finalized)
   {
    undoTree.push("prevPeriodFinal")
    finalized=false;
    updatePeriod();
    inactive("final")
   }
    else if(period!=1){
        undoTree.push("prevPeriod")
    period-=0.5;
    updatePeriod();
    }
    }

function final(){
    if (!finalized){
    undoTree.push("finalize")
    if(period>4.5){
        e("period").innerHTML="Final/OT";
        send ("period=Final/OT");
    }
    else{
        e("period").innerHTML="Final";
        send ("period=Final");
    }
        active("final")
        finalized=true;
        
    }
    
}

//-------------------------------------------------------------SCORE---------------------------------------
var homeScore=0, awayScore=0;

function addAwayScore(param){
    if(awayScore+parseInt(param)>-1){
    undoTree.push("awayScore="+param*-1);
    awayScore+=parseInt(param);
    e("away-score").innerHTML=awayScore;
    send("awayScore="+awayScore);
    calculateRuns();
    }
}

function addHomeScore(param){
    if(homeScore+parseInt(param)>-1){
    undoTree.push("homeScore="+param*-1);
    homeScore+=parseInt(param);
    e("home-score").innerHTML=homeScore;
    send("homeScore="+homeScore);
    calculateRuns();
    }
}

//--------------------------------------------------------------------FOULS--------------------------------------------
var homeFouls=0, awayFouls=0;

function addAwayFoul(param){
    if(awayFouls+parseInt(param)>-1){
        undoTree.push("awayFouls="+param*-1);
        awayFouls+=parseInt(param);
        e("away-fouls").innerHTML="Fouls: "+awayFouls;
        send("awayFouls="+awayFouls);
    }
}

function addHomeFoul(param){
    if(homeFouls+parseInt(param)>-1){
        undoTree.push("homeFouls="+param*-1);
        homeFouls+=parseInt(param);
        e("home-fouls").innerHTML="Fouls: "+homeFouls;
        send("homeFouls="+homeFouls);
    }
}
//-----------------------------------------------TIMEOUTS-------------------------------------
var awayTO=5, homeTO=5;

function addAwayTO(param){
    if(awayTO+parseInt(param)>-1 && awayTO+parseInt(param)<6){
    undoTree.push("addAwayTO="+param*-1);
    awayTO+=parseInt(param);
    e("away-to").innerHTML="Timeouts: "+awayTO;
    send("awayTO="+awayTO)
    }
}

function takeAwayTO(){
    if(awayTO>0){
        undoTree.push("addAwayTO=1");
        awayTO--;
        e("away-to").innerHTML="Timeouts: "+awayTO;
        send("takeAwayTO");
        clockStop();
    }
}

function addHomeTO(param){
    if(homeTO+parseInt(param)>-1 && homeTO+parseInt(param)<6){
    undoTree.push("addHomeTO="+param*-1);
        homeTO+=parseInt(param);
    e("home-to").innerHTML="Timeouts: "+homeTO;
    send("homeTO="+homeTO)
    }
}

function takeHomeTO(){
    if(homeTO>0){
        undoTree.push("addHomeTO=1");
        homeTO--;
        e("home-to").innerHTML="Timeouts: "+homeTO;
        send("takeHomeTO");
        clockStop();

    }
}


//---------------------------------------------------POSSESION-----------------------------------------------
var poss="n";

function awayPoss(){
    switch(poss){
        case "a":
            undoTree.push("awayPoss");
        break;
        case "h":
            undoTree.push("homePoss");
        break;
        case "n":
            undoTree.push("neutralPoss");
        break;
    }
    if(poss=="a"){
        poss="n";
        inactive("away-poss");

    }
    else{
        poss="a";
        active("away-poss");
        inactive("home-poss");
    }
    send("poss="+poss);
}

function neutralPoss(){
    inactive("home-poss");
    inactive("away-poss");
    poss="n";
    send("poss="+poss);
}

function homePoss(){
    switch(poss){
        case "a":
            undoTree.push("awayPoss");
        break;
        case "h":
            undoTree.push("homePoss");
        break;
        case "n":
            undoTree.push("neutralPoss");
        break;
    }
    if(poss=="h"){
        poss="n";
        inactive("home-poss");
    }
    else{
        poss="h";
        active("home-poss");
        inactive("away-poss");
    }
    send("poss="+poss);
}

function switchPoss(){
    inactive("home-poss");
    inactive("away-poss");

    switch(poss){
        case "a":
            undoTree.push("awayPoss");
            poss="h";
        active("home-poss");
        break;
        case "h":
            undoTree.push("homePoss");
            poss="a";
        active("away-poss");
        break;
    }
    send("poss="+poss);
}

function possAnim(){
    inactive("home-poss");
    inactive("away-poss");

    switch(poss){
        case "a":
            undoTree.push("awayPoss");
            poss="h";
        active("home-poss");
        break;
        case "h":
            undoTree.push("homePoss");
            poss="a";
        active("away-poss");
        break;
    }
    send("possAnim="+poss);
}



//----------------------------------------------------BUG CODE-------------------------------------------------
var bug=false;

function clearAllGraphics(){
    inactive("bug-in");
    active("bug-out");
    bug=false;
    inactiveC("graphic");
    inactiveC("away-popup");
    inactiveC("home-popup");
}

function bugIn(){
    if(!bug){
        undoTree.push("graphic");
        clearAllGraphics();
        active("bug-in");
        inactive("bug-out");
        send("bugIn");
        setTimeout(
            function(){
        bug=true;
            }
        ,500);
    }
}

function bugOut(){
    if(bug){
        undoTree.push("bugOut");
        bug=false;
        active("bug-out");
        inactive("bug-in");
        inactiveC("away-popup");
        inactiveC("home-popup");
        send("clear");
    }
}

function bugAnimate(){
    if(!bug){
        undoTree.push("graphic");
        clearAllGraphics();
        active("bug-in");
        inactive("bug-out");
        send("bugAnimate");
        setTimeout(
            function(){
        bug=true;
            }
        ,1000);
    }
}

//---------------------------------------OTHER GRAPHICS CODE------------------------------------------

var transTimout;

function breakbox(){
    if(isActive("breakbox")){
        clearAllGraphics();
        send("clear");
    }
    else{
        clearAllGraphics();
        active("breakbox")
        send("breakboxIn");
        undoTree.push("graphic");
    }
}

function cornerScore(){
    if(isActive("corner-score")){
        clearAllGraphics();
        send("clear");
    }
    else{
        clearAllGraphics();
        active("corner-score")
        send("cornerScoreIn");
        undoTree.push("graphic");

    }
}

function teamCorners(){
    if(isActive("team-corners")){
        clearAllGraphics();
        send("clear");
    }
    else{
        clearAllGraphics();
        active("team-corners")
        send("teamCornersIn");
        undoTree.push("graphic");

    }
}

function transition(){
    if(isActive("transition")){
        clearAllGraphics();
        send("clear");
        clearTimeout(transTimout);
    }
    else{
        clearAllGraphics();
        active("transition")
        send("transition");
        transTimout=setTimeout(function(){
            clearAllGraphics(); 
        },5000);
    }
}

//-------------------------------------------------POPUP CODE-------------------------
var awayPopupIn=false, homePopupIn=false;

function clearBugGFX(){
    if(isActive("away-popup")){
        inactive("away-popup");
        send("awayPopupOut");
    }
    if(isActive("home-popup")){
        inactive("home-popup");
        send("homePopupOut");
    }
    if(isActive("away-run-popup")){
        inactive("away-run-popup");
        send("awayPopupOut");
    }
    if(isActive("home-run-popup")){
        inactive("home-run-popup");
        send("homePopupOut");
    }
    if(isActiveC("sidebar")){
        inactiveC("sidebar");
        send("sidebarOut");
    }
}



function awayPopup(){
    if(e("away-popup-input").value==""){
        e("away-popup-input").focus();
    }
    else if(bug){
        if(e("away-popup").classList.contains("active")){
            e("away-popup").classList.remove("active");
            send("awayPopupOut");
        }
        else{
            inactive("away-popup");
            inactive("away-run-popup");
        e("away-popup").classList.add("active");
            send("awayPopup="+e("away-popup-input").value.toUpperCase());
            undoTree.push("awayPopup");
        }
    }

}


function homePopup(){
    if(e("home-popup-input").value==""){
        e("home-popup-input").focus();
    }
    else if(bug){
        if(e("home-popup").classList.contains("active")){
            e("home-popup").classList.remove("active");
            send("homePopupOut");
        }
        else{
            inactive("home-run-popup");
        e("home-popup").classList.add("active");
            send("homePopup="+e("home-popup-input").value.toUpperCase());
            undoTree.push("homePopup");
        }
    }
}

function awayPopupOut(){
    inactive("away-popup");
    send("awayPopupOut");
}

function homePopupOut(){
    inactive("home-popup");
    send("homePopupOut");
}


// --------------------------------- SIDEBAR CODE--------------------------------------------------

function awaySidebar(elem,name,msg){
    if(bug){
        if(elem.classList.contains("active")){
            elem.classList.remove("active")
            send("sidebarOut");
        }
        else{
            inactiveC("sidebar");
            elem.classList.add("active")
            undoTree.push("awaySidebar");
            if(msg==null){
                msg=e("away-sidebar-input").value;
            }
            send("sidebarMSG="+msg);
            if(name==5){
                name=awayBench[parseInt(e("away-name").value)];
            }
            else{
                name=awayStarters[name];
            }
            if(msg==""){
                name=name.split("(")[0]
            }
            send("awaySidebar="+name);
        }
    }
}


function homeSidebar(elem,name,msg){
    if(bug){
        if(elem.classList.contains("active")){
            elem.classList.remove("active")
            send("sidebarOut");
        }
        else{
            inactiveC("sidebar");
            elem.classList.add("active")
            undoTree.push("homeSidebar");
            if(msg==null){
                msg=e("home-sidebar-input").value;
            }
            send("sidebarMSG="+msg);
            if(name==5){
                name=homeBench[parseInt(e("home-name").value)]
            }
            else{
                name=homeStarters[name];
            }
            if(msg==""){
                name=name.split("(")[0]
            }
            send("homeSidebar="+name);
        }
    }
}
// --------------------------------- OTHER GRAPHICS GODE----------------------------------------

function addGraphic(param, elem){
    if(elem.classList.contains("active")){
        elem.classList.remove("active");
     send("clear");
    }
    else{
        clearAllGraphics();
        elem.classList.add("active");
        send(param);
        undoTree.push("graphic");
    }
}

function starters(param,elem){
    
    if(elem.classList.contains("active")){
        elem.classList.remove("active");
        send("clearStarters");
    }
    else{
        inactiveC("graphic");
        elem.classList.add("active");
        send("starters="+param);
        undoTree.push("graphic");
    }

}

function sponsor(param,elem){
    if(elem.classList.contains("active")){
        elem.classList.remove("active");
     send("clear");
    }
    else{
        clearAllGraphics();
        inactiveC("graphic");

        elem.classList.add("active");
        send("sponsorCorner="+param);
        undoTree.push("graphic");

    }
}

//---------------------------------------CUSTOM IMAGE CODE-----------------------------------------------

function addCustomImage(){
    if(isActive("image")){
        inactive("image");
        send("clear");
    }
    else if(e("image-input").value==""){
        e("image-input").focus();
    }
    else{
        clearAllGraphics();
        active("image");
        send("customImage="+e("image-input").value);
        undoTree.push("graphic");

    }
}

//------------------------------------------CUSTOM L3rd CODE---------------------------------------------
var l3rdType="n", ssSelected=false;

function customL3rdType(param, elem){
    inactiveC("l3rd-selector");
    elem.classList.add("active");
    l3rdType=param
}

function showCustomL3rd(){
    if(isActive("custom-l3rd")){
        inactive("custom-l3rd");
        send("clear");
    }
    else if(e("l3rd-text").value!=""){
        if(ssSelected)
        {
            clearAllGraphics();
            active("custom-l3rd");
            send("customL3rdText="+e("l3rd-text").value);
            send("pog="+l3rdType);

        }
        else if(e("l3rd-title").value!=""){
        clearAllGraphics();
        active("custom-l3rd");
        send("customL3rdTitle="+e("l3rd-title").value);
        send("customL3rdText="+e("l3rd-text").value);
        send("l3rd="+l3rdType);

        }
        undoTree.push("graphic");
    }
    else{
        e("l3rd-title").focus();
    }
}

function ss(){
    ssSelected=!ssSelected;
    if(ssSelected){
        active("l3rd-s");
        e("l3rd-title").setAttribute("placeholder","");
    }
    else{
        inactive("l3rd-s");
        e("l3rd-title").setAttribute("placeholder","TITLE");
    }
}

//----------------------------------------MENU--------------------------


function returnToMenu(){
    e("menu").style.display="flex";
    e("reset").style.display="none";
}
function resetCheck(){
    e("menu").style.display="none";
    e("reset").style.display="flex";
}

function reset(){
    send("reset");
    location.reload();
}

function clearPressed(){
    send("clear");
    clearAllGraphics();
    inactiveC("away-popup");
    inactiveC("home-popup");
}

function forceUpdate(){
    send("clear");
    inactiveC("away-popup");
    inactiveC("home-popup");
    clearAllGraphics();
    send("clockVal="+clockRemain);
    updatePeriod();
    ddUpdate();
    send("awayScore="+awayScore);
    send("homeScore="+homeScore);
    addHomeTO(0);
    addAwayTO(0);
    send("poss="+poss);
}

var undoLength, undoData;
function undo(){
    undoLength=undoTree.length;
    if(undoLength>0)
    {
    undoData=undoTree[undoLength-1].split("=");
    switch(undoData[0])
    {
        case "nextPeriod":
        case "finalize":
            prevPeriod();
        break;
        case "prevPeriod":
            nextPeriod();
        break;
        case "prevPeriodFinal":
            final();
        break;
        case "awayScore":
            addAwayScore(undoData[1]);
        break;
        case "homeScore":
            addHomeScore(undoData[1]);
        break;
        case "awayFouls":
            addAwayFoul(undoData[1]);
        break;
        case "homeFouls":
            addHomeFoul(undoData[1]);
        break;
        case "addAwayTO":
            addAwayTO(undoData[1]);
        break;
        case "addHomeTO":
            addHomeTO(undoData[1]);
        break;
        case "awayPoss":
            awayPoss();
        break;
        case "homePoss":
            homePoss();
        break;
        case "neutralPoss":
            neutralPoss();
        break;
        case "flag":
            flag();
        break;
        case "graphic":
        clearPressed();
        break;
        case "bugOut":
            bugIn()
        break;
        case "awayPopup":
            awayPopupOut()
        break;
        case "homePopup":
            homePopupOut()
        break;

    }
}
    
    undoTree.splice(undoLength-1,20);
}



//---------------------------------------PLAYERS SETUP FUNC--------------------------------------------

function playersInit(){
var starterNum=0, benchNum=0;
for(var i=0; i<jsonData.away.players.length; i++){
    if(jsonData.away.players[i].starter=="true" &&starterNum<5){
        c("away-player")[starterNum].innerHTML="#"+jsonData.away.players[i].number+" "+jsonData.away.players[i].firstName.charAt(0)+". "+jsonData.away.players[i].lastName;
        awayStarters[starterNum]="#"+jsonData.away.players[i].number+" - "+jsonData.away.players[i].firstName+" "+jsonData.away.players[i].lastName+" ("+jsonData.away.players[i].desc+")";
        starterNum++;
    }
    else{
        c("away-bench-player")[benchNum].innerHTML="#"+jsonData.away.players[i].number+" "+jsonData.away.players[i].firstName.charAt(0)+". "+jsonData.away.players[i].lastName;
        awayBench[benchNum]="#"+jsonData.away.players[i].number+" - "+jsonData.away.players[i].firstName+" "+jsonData.away.players[i].lastName+" ("+jsonData.away.players[i].desc+")";
        benchNum++;   
    }
}
for(var i=15; i>=benchNum; i--){
c("away-bench-player")[i].remove();
}


starterNum=0;
benchNum=0;
for(var i=0; i<jsonData.home.players.length; i++){
    if(jsonData.home.players[i].starter=="true" &&starterNum<5){
        c("home-player")[starterNum].innerHTML="#"+jsonData.home.players[i].number+" "+jsonData.home.players[i].firstName.charAt(0)+". "+jsonData.home.players[i].lastName;
        homeStarters[starterNum]="#"+jsonData.home.players[i].number+" - "+jsonData.home.players[i].firstName+" "+jsonData.home.players[i].lastName+" ("+jsonData.home.players[i].desc+")";
        starterNum++;
    }
    else{
        c("home-bench-player")[benchNum].innerHTML="#"+jsonData.home.players[i].number+" "+jsonData.home.players[i].firstName.charAt(0)+". "+jsonData.home.players[i].lastName;
        homeBench[benchNum]="#"+jsonData.home.players[i].number+" - "+jsonData.home.players[i].firstName+" "+jsonData.home.players[i].lastName+" ("+jsonData.home.players[i].desc+")";
        benchNum++;   
    }
}
for(var i=15; i>=benchNum; i--){
c("home-bench-player")[i].remove();
}
}


//--------------------------------------------------RUN CALCULATOR------------------------------
var runFound=false, runNum=0, runTeam="", index, undoData, awayRunActive=false, homeRunActive=false;
function calculateRuns(){
    runTeam="";
    index=undoTree.length-1;
    while(index>=0 && runTeam==""){
    undoData=undoTree[index].split("=");
        if(parseInt(undoData[1])>0)
        {
        runTeam="NA"
        }
        else if(undoData[0]=="awayScore"){
            runTeam="a";
        }
        else if(undoData[0]=="homeScore"){
            runTeam="h";
        }
        index--;
    }
    index=undoTree.length-1;
    runNum=0;
    runFound=false;
    if(runTeam=="a"){
        if(homeRunActive){
            e("home-run").innerHTML="";
            e("home-run-popup").style.display="none";
            if(e("home-run-popup").classList.contains("active")){
                clearBugGFX();
            }
            inactive("home-run-popup");
            e("home-run-popup").classList.remove("update");
            homeRunActive=false;
             }
        while(index>=0 && !runFound){
    undoData=undoTree[index].split("=");
        if(parseInt(undoData[1])>0)
        {
            runFound=true;
        }
        else if(undoData[0]=="homeScore"){
            runFound=true;
        }
        else if(parseInt(undoData[1])<0){
            runNum+=parseInt(undoData[1])*-1
        }
        index--;
        }
        if(runNum!=awayScore && runNum>6){
           if(isActive("away-run-popup")){
            clearBugGFX();
            inactive("away-run-popup");
           }
           awayRunActive=true;
           e("away-run-popup").classList.add("update");
           e("away-run-popup").style.display="block";
           e("away-run").innerHTML=runNum+"-0 RUN";
        }
        else{
            e("away-run").innerHTML="";
            e("away-run-popup").style.display="none";
            if(e("away-run-popup").classList.contains("active")){
                clearBugGFX();
            }
            inactive("away-run-popup");
            e("away-run-popup").classList.remove("update");
            awayRunActive=false;
        }
    }


    if(runTeam=="h"){
        if(awayRunActive){
            e("away-run").innerHTML="";
            e("away-run-popup").style.display="none";
            if(e("away-run-popup").classList.contains("active")){
                clearBugGFX();
            }
            inactive("away-run-popup");
            e("away-run-popup").classList.remove("update");
            awayRunActive=false;
             }
        while(index>=0 && !runFound){
    undoData=undoTree[index].split("=");
        if(parseInt(undoData[1])>0)
        {
            runFound=true;
        }
        else if(undoData[0]=="awayScore"){
            runFound=true;
        }
        else if(parseInt(undoData[1])<0){
            runNum+=parseInt(undoData[1])*-1
        }
        index--;
        }
        if(runNum!=homeScore && runNum>6){
            if(isActive("home-run-popup")){
             clearBugGFX();
             inactive("home-run-popup");

            }
            homeRunActive=true;
            e("home-run-popup").classList.add("update");
            e("home-run-popup").style.display="block";
            e("home-run").innerHTML=runNum+"-0 RUN";
         }
         else{
             e("home-run").innerHTML="";
             e("home-run-popup").style.display="none";
             if(e("home-run-popup").classList.contains("active")){
                 clearBugGFX();
             }
             inactive("home-run-popup");
             e("home-run-popup").classList.remove("update");
             homeRunActive=false;
         }
    }
}


function addAwayRun(){
    if(bug && awayRunActive){
        if(e("away-run-popup").classList.contains("active")){
            e("away-run-popup").classList.remove("active");
            send("awayPopupOut");
        }
        else{
            inactive("away-run-popup");
        e("away-run-popup").classList.add("active");
        e("away-run-popup").classList.remove("update");
            send("awayPopup="+e("away-run").innerHTML);
            undoTree.push("awayPopup");
        }
    }
}

function addHomeRun(){
    if(bug && homeRunActive){
        if(e("home-run-popup").classList.contains("active")){
            e("home-run-popup").classList.remove("active");
            send("homePopupOut");
        }
        else{
            inactive("home-run-popup");
        e("home-run-popup").classList.add("active");
        e("home-run-popup").classList.remove("update");
            send("homePopup="+e("home-run").innerHTML);
            undoTree.push("homePopup");
        }
    }
}