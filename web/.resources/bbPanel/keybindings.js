document.addEventListener("keyup",function(event){
    if(document.activeElement!=e("clock-input")  && document.activeElement!=e("away-popup-input") && document.activeElement!=e("away-sidebar-input") && document.activeElement!=e("home-popup-input") && document.activeElement!=e("home-sidebar-input") && document.activeElement!=e("image-input") && document.activeElement!=e("l3rd-title") && document.activeElement!=e("l3rd-text") ){
        switch(event.key){
            case "`":
            undo();
            break;
            case "1":
            bugAnimate();
            break;
            case "2":
            bugIn();
            break;
            case "3":
            bugOut();
            break;
            case "4":
            breakbox();
            break;
            case "5":
            cornerScore();
            break;
            case "6":
            teamCorners();
            break;
            case "7":
                addGraphic('l3rd=announcers', e("annc"));
            break;
            case "8":
                showCustomL3rd();
            break;
            case "9":
                addCustomImage();

            break;
            case "0":
                transition();
            break;
            case "Backspace":
                clearPressed();
            break;
            case "-":
                clearBugGFX();
            break;
            case "q":
            addAwayScore(1);
            break;
            case "w":
            addAwayScore(2);
            break;
            case "e":
            addAwayScore(3);
            break;
            case "r":
            addAwayFoul(1);
            break;
            case "t":
            takeAwayTO();
            break;
            case "p":
            switchPoss();
            break;
            case "a":
            addHomeScore(1);
            break;
            case "s":
                addHomeScore(2);
            break;
            case "d":
                addHomeScore(3);
            break;
            case "f":
            addHomeFoul(1);
            break;
            case "g":
            takeHomeTO();
            break;
            case "z":
            if(event.ctrlKey){
                undo();
            }
            break;
            case "n":
            nextPeriod();
            break;
            case "m":
                e("clock-input").focus();
                e("clock-input").select();
            break;
            case " ":
                clockToggle();
            break;

        }
    }
    else if(document.activeElement==e("clock-input") && event.key=="Enter"){
        clockUpdate();
        document.activeElement.blur();

    }
    else if(document.activeElement==e("l3rd-title") && event.key=="Enter"){
        e("l3rd-text").focus();
    }
});

document.addEventListener("keypress",function(event){
    if((document.activeElement!=e("clock-input")  && document.activeElement!=e("away-popup-input") && document.activeElement!=e("away-sidebar-input") && document.activeElement!=e("home-popup-input") && document.activeElement!=e("home-sidebar-input") && document.activeElement!=e("image-input") && document.activeElement!=e("l3rd-title") && document.activeElement!=e("l3rd-text"))&&( event.key==" ")){
        document.activeElement.blur();
    }
    if((document.activeElement!=e("clock-input") && document.activeElement!=e("dist-input")  && document.activeElement!=e("l3rd-title") )&&( event.key=="Enter")){
        document.activeElement.blur();
    }
});