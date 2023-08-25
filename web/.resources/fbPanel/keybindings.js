document.addEventListener("keyup",function(event){
    console.log(event.key);
    if(document.activeElement!=e("clock-input") && document.activeElement!=e("dist-input") && document.activeElement!=e("away-input") && document.activeElement!=e("away-flag-input") && document.activeElement!=e("home-input") && document.activeElement!=e("home-flag-input") && document.activeElement!=e("image-input") && document.activeElement!=e("l3rd-title") && document.activeElement!=e("l3rd-text") ){
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
                clearPopups();

            break;
            case "q":
            e("awayFS").click();
            break;
            case "w":
                e("awayOS").click();

            break;
            case "e":
                e("awayHold").click();

            break;
            case "r":
                e("awayPI").click();

            break;
            case "t":
                takeAwayTO();
            break;
            case "y":
                addAwayScore(1);
            
            break;
            case "u":
                addAwayScore(3);
            
            break;
            case "i":
            awayTD();
            break;
            case "o":
            awayPoss();
            break;
            case "p":
            neutralPoss();
            break;
            case "a":
            e("homeFS").click();
            break;
            case "s":
                e("homeOS").click();
            
            break;
            case "d":
                e("homeHold").click();
            
            break;
            case "f":
                e("homePI").click();
            
            break;
            case "g":
            takeHomeTO();
            break;
            case "h":
            addHomeScore(1);
            break;
            case "j":
                addHomeScore(3);
        
            break;
            case "k":
            homeTD();
            break;
            case "l":
            homePoss();
            break;
            case "z":
            if(event.ctrlKey){
                undo();
            }
            else{
              ddNext();  
            }
            break;
            case "x":
                console.log("pressed");
            e("dist-input").focus();
            e("dist-input").select();
            break;
            case "c":
            down(1);
            ddUpdate();
            break;
            case "v":
            ddVisibility();
            break;
            case "b":
            flag();
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
    else if(document.activeElement==e("dist-input") && event.key=="Enter"){
        ddUpdate();
        document.activeElement.blur();

    }
    else if(document.activeElement==e("clock-input") && event.key=="Enter"){
        clockUpdate();
        document.activeElement.blur();

    }
    else if(document.activeElement==e("l3rd-title") && event.key=="Enter"){
        e("l3rd-text").focus();
    }
    else if(event.key=="Enter"){
        document.activeElement.blur();
    }
});