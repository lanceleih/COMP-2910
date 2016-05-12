/* Javascript for All Parts of Game */

/* Javascript for the home page*/
function home() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    var count = 0;


    document.getElementById("firstButton").src = "icons/play.png";
    document.getElementById("secondButton").src = "icons/settings.png";
    document.getElementById("thirdButton").src = "icons/leaderboard.png";
    document.getElementById("title").src = "title/titleIcon.png";
    document.getElementById("slogan").src = "title/slogan.png";

    var img = document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img = document.getElementById("firstButton");
    ctx.drawImage(img, 90, 180, 150, 75);
    var img = document.getElementById("secondButton");
    ctx.drawImage(img, 90, 260, 150, 75);
    var img = document.getElementById("thirdButton");
    ctx.drawImage(img, 90, 340, 150, 75);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
<<<<<<< HEAD
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
=======
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            ctx.clearRect(0, 0, 320, 480);
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
>>>>>>> 440d4c07998da8788ec8da4edf33d234c9c0a707
            ctx.clearRect(0, 0, 320, 480);
            leaderboardShape();
        } else if (x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if (count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    }
}
/*Function for returning to the home page*/
function backHome() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    var count = 0;


    document.getElementById("firstButton").src = "icons/play.png";
    document.getElementById("secondButton").src = "icons/settings.png";
    document.getElementById("thirdButton").src = "icons/leaderboard.png";
    document.getElementById("title").src = "title/titleIcon.png";
    document.getElementById("slogan").src = "title/slogan.png";

    var img = document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img = document.getElementById("firstButton");
    ctx.drawImage(img, 90, 180, 150, 75);
    var img = document.getElementById("secondButton");
    ctx.drawImage(img, 90, 260, 150, 75);
    var img = document.getElementById("thirdButton");
    ctx.drawImage(img, 90, 340, 150, 75);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
<<<<<<< HEAD
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
=======
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            ctx.clearRect(0, 0, 320, 480);
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
>>>>>>> 440d4c07998da8788ec8da4edf33d234c9c0a707
            ctx.clearRect(0, 0, 320, 480);
            leaderboardShape();
        } else if (x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if (count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    }
}
/* Hides the easter egg div*/
function backEaster() {
    document.getElementById("easterEgg").style.display = "none";
}
/*The select shape page for the game*/
function selectShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("title").src = "title/shapetitle.png";
    document.getElementById("firstButton").src = "icons/square.png";
    document.getElementById("secondButton").src = "icons/polygon.png";
    document.getElementById("thirdButton").src = "icons/hexa.png";
    var img = document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("firstButton");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("secondButton");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("thirdButton");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("backButton")
    ctx.drawImage(img, 0, 0, 100, 50);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);
        if (x > 20 && x < 145 && y > 180 && y < 280) {
            ctx.clearRect(0, 0, 320, 480);
            selectDifficulty();
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            ctx.clearRect(0, 0, 320, 480);
            selectDifficulty();
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            ctx.clearRect(0, 0, 350, 480);
            selectDifficulty();
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
        }
    }
}
<<<<<<< HEAD



/*The select difficulty page for the game*/
 function selectDifficulty() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("firstButton").src = "icons/easy.png";
    document.getElementById("secondButton").src = "icons/medium.png";
    document.getElementById("thirdButton").src = "icons/hard.png";
    document.getElementById("title").src = "title/difficultytitle.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,90,340, 150, 75);
    var img=document.getElementById("back")
    ctx.drawImage(img, 0, 0, 100, 50);


    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
     
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");


        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);


     
   
        if(x > 90 && x < 240 && y > 180 && y < 255) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        }
    } 
}
/*The select shape page for the leaderboard*/
function leaderboardShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("title").src = "title/leaderboardtitle.png";
    document.getElementById("firstButton").src = "icons/square.png";
    document.getElementById("secondButton").src = "icons/polygon.png";
    document.getElementById("thirdButton").src = "icons/hexa.png";
    var img = document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("firstButton");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("secondButton");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("thirdButton");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("backButton")
    ctx.drawImage(img, 0, 0, 100, 50);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);
        if (x > 20 && x < 145 && y > 180 && y < 280) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            //ctx.clearRect(0, 0, 350, 480);
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
        }

    }
}

/* Javascript for the Paused Page */
function paused() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");

    var pausedTitle = document.getElementById("pausedTitle");
    ctx.drawImage(pausedTitle, 12, 40, 300, 132);
    var resume = document.getElementById("resume");
    ctx.drawImage(resume, 90, 180, 150, 75);
    var restart = document.getElementById("restart");
    ctx.drawImage(restart, 90, 260, 150, 75);
    var menu = document.getElementById("menu");
    ctx.drawImage(menu, 90, 340, 150, 75);

    c.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x;
        var y = event.y;
        var page = document.getElementById("mainCanvas");
        var ctx = page.getContext("2d");

        x -= page.offsetLeft;
        y -= page.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            // alert("Resume game");
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            // alert("Restart game!");
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
            ctx.clearRect(0, 0, 320, 480);
            home();
        }
        ;
    }
}

/* Call settings */
function startSettings() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    var palette = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];

    // /var storePalette = null;
    //var blindPalette = ["I", "II", "III", "IV"];
    c.addEventListener("mouseup", activeArea, false);

    // Button ID's
    var backButtonImg = document.getElementById("backButton");
    var audioButtonImg = document.getElementById("audioButton");
    var colourPackButtonImg = document.getElementById("colourPackButton");
    var settingsTitleImg = document.getElementById("settingsTitle");
    var colourBlindImg = document.getElementById("colourBlindText");

    function drawSettingsTitle(){
        ctx.drawImage(settingsTitleImg, 15, 40, 300, 132)
    }
    function drawBackButton(){
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);
    }
    function drawAudioButton(){
        ctx.drawImage(audioButtonImg, 90, 180, 150, 75);
    }

    function drawColourPackButton(){
        ctx.drawImage(colourPackButtonImg, 90, 260, 150, 75);
    }

    function drawColourBlindText(){
        ctx.drawImage(colourBlindImg, 90, 343, 175, 36);
    }

    function drawColourBlindToggle() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(60, 350, 25, 25);
    }
    function drawColourBlindToggleFill(){
        ctx.fillStyle = colourModeStateFill;
        ctx.fillRect(65, 355, 15, 15);
    }


    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x;
        var y = event.y;

        x -= mainCanvas.offsetLeft;
        y -= mainCanvas.offsetTop;


        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
            //alert("this is the back button");
        }

        //Audio Button function
        if (x > 90 && x < 240 && y > 180 && y < 250) {
            ctx.clearRect(0, 0, 320, 480);
            startAudioSettings();
            //alert("this is the audio button");
        }

        //Colour Pack function
        if (x > 90 && x < 240 && y > 260 && y < 330) {
            ctx.clearRect(0, 0, 320, 480);
            startColourSettings();
            //alert("this is the colour pack button");
        }

        //Colour blind mode function
        if (x > 60 && x < 85 && y > 350 && y < 375) {
            //alert("this is the colour blind toggle");
            if (colourModeState == false) {
                colourModeStateFill = "#000000";
                colourModeState = true;
                ctx.clearRect(65, 355, 15, 15);
                drawColourBlindToggleFill();
                //storePalette = palette;
                //palette = blindPalette;
                //alert(colourModeState);
                //alert("this is blind butotn");
            }
            else if (colourModeState == true) {
                colourModeStateFill = "#FFFFFF";
                colourModeState = false;
                ctx.clearRect(65, 355, 15, 15);
                drawColourBlindToggleFill();
                //palette = storePalette;
                //alert(colourModeState);
                //alert("this is the blind button");
            }
        }


        //alert("x:" + x + " y:" + y);
    }
    ctx.clearRect(0, 0, 320, 480);
    drawBackButton();

    //Settings Heading
    drawSettingsTitle();

    //Audio
    drawAudioButton();

    //Colour Packs
    drawColourPackButton();

    //Colour Blind Check Box
    drawColourBlindText();
    drawColourBlindToggle();
    drawColourBlindToggleFill();

}
/* Call audio settings */
function startAudioSettings() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    c.addEventListener("mouseup", activeArea, false);
    var backButtonImg = document.getElementById("backButton");
    var colourPackTitleImg = document.getElementById("colourPackTitle");

    function drawBackButton() {
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);
    }

    function drawColourPackTitle(){
        ctx.drawImage(colourPackTitleImg, 30, 60, 263, 42);
    }

    function drawBackgroundMusicTitle(){
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.fillText("Background Music", 65, 160);
    }

    function drawBackgroundSlider(){
        ctx.fillStyle = "#008000";
        ctx.fillRect(65, 175, 200, 40);
    }

    function drawSfxTitle(){
        ctx.fillStyle = "#000000";
        ctx.font = "20px Arial";
        ctx.fillText("Sound Effects", 65, 260);
    }

    function drawSfxSlider(){
        ctx.fillStyle = "#008000";
        ctx.fillRect(65, 275, 200, 40);
    }
    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x;
        var y = event.y;

        x -= mainCanvas.offsetLeft;
        y -= mainCanvas.offsetTop;


        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            startSettings();
            //alert ("this is the back button");
        }

    }
    ctx.clearRect(0, 0, 320, 480);
    drawBackButton();
    drawColourPackTitle();
    drawBackgroundMusicTitle();
    drawBackgroundSlider();
    drawSfxTitle();
    drawSfxSlider();
}
/* Call Colour Settings */
function startColourSettings() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");


    c.addEventListener("mouseup", activeArea, false);


    var backButtonImg = document.getElementById("backButton");
    var leftArrowImg = document.getElementById("leftArrow");
    var rightArrowImg = document.getElementById("rightArrow");
    var colourPackTitleImg = document.getElementById("colourPackTitle");

    function drawBackButton() {
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);
    }

    function drawLeftArrow(){
        ctx.drawImage(leftArrowImg, 5, 280, 40, 46);
    }

    function drawRightArrow(){
        ctx.drawImage(rightArrowImg, 278, 280, 40, 46);
    }


    function drawColourPackTitle(){
        ctx.drawImage(colourPackTitleImg, 30, 60, 263, 42);
    }

    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x;
        var y = event.y;

        x -= mainCanvas.offsetLeft;
        y -= mainCanvas.offsetTop;


        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            startSettings();
            //alert ("this is the back button");
        }

        //Left Arrow Button
        if (x > 5 && x < 40 && y > 280 && y < 320) {
            if (palette == palette0) {
                palette = palette4;
                paletteTitle = paletteTitleArray[4];
            }
            else if (palette == palette4) {
                palette = palette3;
                paletteTitle = paletteTitleArray[3];
            }
            else if (palette == palette3) {
                palette = palette2;
                paletteTitle = paletteTitleArray[2];
            }
            else if (palette == palette2) {
                palette = palette1;
                paletteTitle = paletteTitleArray[1];
            }
            else if (palette == palette1) {
                palette = palette0;
                paletteTitle = paletteTitleArray[0];
            }
            drawTile0();
            drawTile1();
            drawTile2();
            drawTile3();
            drawColourPackString();
            //alert(palette);


        }

        //Right Arrow Button
        if (x > 280 && x < 315 && y > 280 && y < 320) {
            if (palette == palette0) {
                palette = palette1;
                paletteTitle = paletteTitleArray[1];

            }
            else if (palette == palette1) {
                palette = palette2;
                paletteTitle = paletteTitleArray[2];

            }
            else if (palette == palette2) {
                palette = palette3;
                paletteTitle = paletteTitleArray[3];

            }
            else if (palette == palette3) {
                palette = palette4;
                paletteTitle = paletteTitleArray[4];

            }
            else if (palette == palette4) {
                palette = palette0;
                paletteTitle = paletteTitleArray[0];

            }
            drawTile0();
            drawTile1();
            drawTile2();
            drawTile3();
            drawColourPackString();
            //alert(palette);
        }

    }

    //Preview Colours

    function drawPreview() {
        ctx.fillStyle = "#F5634A";
        ctx.fillRect(25, 120, 270, 80);
    }

    //The Colour Pack Panel
    function drawPackPanel() {
        ctx.fillStyle = "#F5634A";
        ctx.fillRect(50, 220, 220, 170);
    }

    function drawColourPackString() {
        ctx.font = "20px Arial";
        ctx.fillStyle = "#F5634A";
        ctx.clearRect(25, 410, 270, 55)
        ctx.fillRect(25, 410, 270, 55);
        ctx.fillStyle = "#000000";
        if (palette == palette0){
            paletteTitle = paletteTitleArray[0];
        }
        else if (palette == palette1){
            paletteTitle = paletteTitleArray[1];
        }
        else if (palette == palette2){
            paletteTitle = paletteTitleArray[2];
        }
        else if (palette == palette3){
            paletteTitle = paletteTitleArray[3];
        }
        else if (palette == palette4){
            paletteTitle = paletteTitleArray[4];
        }
        ctx.fillText(paletteTitle, 95, 440);

    }


    function drawTile0() {
        ctx.clearRect(25, 125, 65, 70);
        ctx.fillStyle = palette[0];
        ctx.fillRect(25, 125, 65, 70)
    }

    function drawTile1() {
        ctx.clearRect(95, 125, 65, 70);
        ctx.fillStyle = palette[1];
        ctx.fillRect(95, 125, 65, 70)
    }

    function drawTile2() {
        ctx.clearRect(165, 125, 65, 70);
        ctx.fillStyle = palette[2];
        ctx.fillRect(165, 125, 65, 70)
    }

    function drawTile3() {
        ctx.clearRect(235, 125, 65, 70);
        ctx.fillStyle = palette[3];
        ctx.fillRect(235, 125, 65, 70)
    }

    function drawTitlePanel() {
        ctx.fillStyle = "#F5634A";
        ctx.fillRect(25, 410, 270, 55);
    }

    ctx.clearRect(0, 0, 320, 480);
    drawBackButton();
    //Colour Pack Heading
    drawColourPackTitle();
    //drawPreview();
    drawPackPanel();
    drawTitlePanel();
    drawTile0();
    drawTile1();
    drawTile2();
    drawTile3();
    drawLeftArrow();
    drawRightArrow();
    drawColourPackString();

}
