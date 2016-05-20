

/* Call settings */
function startSettings() {
    canvas.addEventListener("mouseup", activeArea, false);

    // Button ID's
    var backButtonImg = document.getElementById("backButton");
    var audioButtonImg = document.getElementById("audioButton");
    var colourPackButtonImg = document.getElementById("colourPackButton");
    var settingsTitleImg = document.getElementById("settingsTitle");
    var colourBlindImg = document.getElementById("colourBlindText");




    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx1.play();
            home();
            //alert("this is the back button");
        }

        //Audio Button function
        if (x > 90 && x < 240 && y > 180 && y < 250) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx2.play();
            startAudioSettings();
            //alert("this is the audio button");
        }

        //Colour Pack function
        if (x > 90 && x < 240 && y > 260 && y < 330) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx2.play();
            startColourSettings();
            //alert("this is the colour pack button");
        }

        //Colour blind mode function
        if (x > 60 && x < 85 && y > 350 && y < 375) {
            sfx2.play();
            //alert("this is the colour blind toggle");
            if (colourModeState == false) {
                colourModeStateFill = "#000000";
                colourModeState = true;
                ctx.clearRect(65, 355, 15, 15);
                drawColourBlindToggleFill();
                storePalette = palette;
                palette = rgPalette;
                //alert(colourModeState);
                //alert("this is blind butotn");
            }
            else if (colourModeState == true) {
                colourModeStateFill = "#FFFFFF";
                colourModeState = false;
                ctx.clearRect(65, 355, 15, 15);
                drawColourBlindToggleFill();
                palette = storePalette;
                //alert(colourModeState);
                //alert("this is the blind button");
            }
        }
        //alert("x:" + x + " y:" + y);
    }

    ctx.clearRect(0, 0, 320, 480);
   //Settings Title
        ctx.drawImage(settingsTitleImg, 15, 40, 300, 132);


    //Back button
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);


    //Audio button
        ctx.drawImage(audioButtonImg, 90, 180, 150, 75);


    //Colour pack button
        ctx.drawImage(colourPackButtonImg, 90, 260, 150, 75);


    //Colour Blind Image
        ctx.drawImage(colourBlindImg, 90, 343, 175, 36);


        //Colour Blind Toggle Box
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(60, 350, 25, 25);


    function drawColourBlindToggleFill() {
        ctx.fillStyle = colourModeStateFill;
        ctx.fillRect(65, 355, 15, 15);
    }

    drawColourBlindToggleFill();

}
/* Call audio settings */
function startAudioSettings() {
    canvas.addEventListener("mouseup", activeArea, false);
    var backButtonImg = document.getElementById("backButton");
    var audioTitleImg = document.getElementById("audioTitle");
    var bgmHeaderImg = document.getElementById("bgmHeader");
    var sfxHeaderImg = document.getElementById("sfxHeader");

    function drawBackButton() {
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);
    }

    function drawAudioTitle() {
        ctx.drawImage(audioTitleImg, 30, 60, 263, 42);
    }

    function drawBackgroundMusicTitle() {
        ctx.drawImage(bgmHeaderImg, 65, 140, 150, 34);
    }

    function drawBgmVolume1() {
        ctx.clearRect(55, 175, 40, 37);
        //ctx.fillStyle = bgmState1;
        ctx.drawImage(bgmState1, 55, 175, 40, 37);
    }

    function drawBgmVolume2() {
        ctx.clearRect(100, 175, 40, 37);
        //ctx.fillStyle = bgmState2;
        ctx.drawImage(bgmState2, 100, 175, 40, 37);
    }

    function drawBgmVolume3() {
        ctx.clearRect(145, 175, 40, 37);
        //ctx.fillStyle = bgmState3;
        ctx.drawImage(bgmState3,145, 175, 40, 37);
    }

    function drawBgmVolume4() {
        ctx.clearRect(190, 175, 40, 37);
        //ctx.fillStyle = bgmState4;
        ctx.drawImage(bgmState4,190, 175, 40, 37);
    }

    function drawBgmVolume5() {
        ctx.clearRect(235, 175, 40, 37);
        //ctx.fillStyle = bgmState5;
        ctx.drawImage(bgmState5, 235, 175, 40, 37);
    }

    function drawSfxTitle() {
        ctx.drawImage(sfxHeaderImg, 65, 290, 79, 34);
    }


    function drawSfxVolume1() {
        ctx.clearRect(55, 325, 40, 37);
        //ctx.fillStyle = sfxState1;
        ctx.drawImage(sfxState1,55, 325, 40, 37);
    }

    function drawSfxVolume2() {
        ctx.clearRect(100, 325, 40, 37);
        //ctx.fillStyle = sfxState2;
        ctx.drawImage(sfxState2,100, 325, 40, 37);
    }

    function drawSfxVolume3() {
        ctx.clearRect(145, 325, 40, 37);
        //ctx.fillStyle = sfxState3;
        ctx.drawImage(sfxState3,145, 325, 40, 37);
    }

    function drawSfxVolume4() {
        ctx.clearRect(190, 325, 40, 37);
        //ctx.fillStyle = sfxState4;
        ctx.drawImage(sfxState4,190, 325, 40, 37);
    }

    function drawSfxVolume5() {
        ctx.clearRect(235, 325, 40, 37);
        //ctx.fillStyle = sfxState5;
        ctx.drawImage(sfxState5,235, 325, 40, 37);
    }

    function drawBgmMuteButton() {
        ctx.clearRect(110, 220, 100, 40);
        //ctx.fillStyle = bgmMuteState;
        ctx.drawImage(bgmMuteState, 110, 220, 100, 40);
    }

    function drawSfxMuteButton() {
        ctx.clearRect(110, 370, 100, 40);
        //ctx.fillStyle = sfxMuteState;
        ctx.drawImage(sfxMuteState,110, 370, 100, 40);
    }

    function muteBgm() {
        bgm.volume = 0;
    }

    function muteSfx() {
        sfx1.volume = 0;
        sfx2.volume = 0;
    }


    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx1.play();
            startSettings();
            //alert ("this is the back button");
        }

        //Bgm Mute button
        if (x > 110 && x < 210 && y > 220 && y < 260) {
            muteBgm();

            bgmState1 = images[0];
            bgmState2 = images[1];
            bgmState3 = images[2];
            bgmState4 = images[3];
            bgmState5 = images[4];
            bgmMuteState = images[11];
            drawBgmVolume1();
            drawBgmVolume2();
            drawBgmVolume3();
            drawBgmVolume4();
            drawBgmVolume5();
            drawBgmMuteButton();
        }

        //Bgm Volume1
        if (x > 55 && x < 90 && y > 175 && y < 215) {
            //alert("volume1");
            bgm.volume = 0.2;
            bgmState1 = images[5];
            bgmState2 = images[1];
            bgmState3 = images[2];
            bgmState4 = images[3];
            bgmState5 = images[4];
            bgmMuteState = images[10];
            drawBgmVolume1();
            drawBgmVolume2();
            drawBgmVolume3();
            drawBgmVolume4();
            drawBgmVolume5();
            drawBgmMuteButton();


        }
        //Bgm Volume2
        if (x > 100 && x < 140 && y > 175 && y < 215) {
            // alert("volume2");
            bgm.volume = 0.4;
            bgmState1 = images[0];
            bgmState2 = images[6];
            bgmState3 = images[2];
            bgmState4 = images[3];
            bgmState5 = images[4];
            bgmMuteState = images[10];
            drawBgmVolume1();
            drawBgmVolume2();
            drawBgmVolume3();
            drawBgmVolume4();
            drawBgmVolume5();
            drawBgmMuteButton();
        }
        //Bgm Volume3
        if (x > 145 && x < 185 && y > 175 && y < 215) {
            // alert("volume3");
            bgm.volume = 0.6;
            bgmState1 = images[0];
            bgmState2 = images[1];
            bgmState3 = images[7];
            bgmState4 = images[3];
            bgmState5 = images[4];
            bgmMuteState = images[10];
            drawBgmVolume1();
            drawBgmVolume2();
            drawBgmVolume3();
            drawBgmVolume4();
            drawBgmVolume5();
            drawBgmMuteButton();
        }
        //Bgm Volume4
        if (x > 190 && x < 230 && y > 175 && y < 215) {
            //alert("volume4");
            bgm.volume = 0.8;
            bgmState1 = images[0];
            bgmState2 = images[1];
            bgmState3 = images[2];
            bgmState4 = images[8];
            bgmState5 = images[4];
            bgmMuteState = images[10];
            drawBgmVolume1();
            drawBgmVolume2();
            drawBgmVolume3();
            drawBgmVolume4();
            drawBgmVolume5();
            drawBgmMuteButton();
        }
        //Bgm Volume5
        if (x > 235 && x < 275 && y > 175 && y < 215) {
            // alert("volume5");
            bgm.volume = 1.0;
            bgmState1 = images[0];
            bgmState2 = images[1];
            bgmState3 = images[2];
            bgmState4 = images[3];
            bgmState5 = images[9];
            bgmMuteState = images[10];
            drawBgmVolume1();
            drawBgmVolume2();
            drawBgmVolume3();
            drawBgmVolume4();
            drawBgmVolume5();
            drawBgmMuteButton();
        }

        //alert(x + " " + y);

        //Sfx Volume1
        if (x > 55 && x < 95 && y > 325 && y < 365) {
            //alert("sfx1");
            sfx1.volume = 0.2;
            sfx2.volume = 0.2;
            sfx2.play();
            sfxState1 = images[5];
            sfxState2 = images[1];
            sfxState3 = images[2];
            sfxState4 = images[3];
            sfxState5 = images[4];
            sfxMuteState = images[0];
            sfxMuteState = images[10];
            drawSfxVolume1();
            drawSfxVolume2();
            drawSfxVolume3();
            drawSfxVolume4();
            drawSfxVolume5();
            drawSfxMuteButton();
        }

        //Sfx Volume2
        if (x > 100 && x < 140 && y > 325 && y < 365) {
            //alert("sfx2");
            sfx1.volume = 0.4;
            sfx2.volume = 0.4;
            sfx2.play();
            sfxState1 = images[0];
            sfxState2 = images[6];
            sfxState3 = images[2];
            sfxState4 = images[3];
            sfxState5 = images[4];
            sfxMuteState = images[10];
            drawSfxVolume1();
            drawSfxVolume2();
            drawSfxVolume3();
            drawSfxVolume4();
            drawSfxVolume5();
            drawSfxMuteButton();
        }

        //Sfx Volume3
        if (x > 145 && x < 185 && y > 325 && y < 365) {
            //alert("Sfx3");
            sfx1.volume = 0.6;
            sfx2.volume = 0.6;
            sfx2.play();
            sfxState1 = images[0];
            sfxState2 = images[1];
            sfxState3 = images[7];
            sfxState4 = images[3];
            sfxState5 = images[4];
            sfxMuteState = images[10];
            drawSfxVolume1();
            drawSfxVolume2();
            drawSfxVolume3();
            drawSfxVolume4();
            drawSfxVolume5();
            drawSfxMuteButton();
        }

        //Sfx Volume4
        if (x > 190 && x < 230 && y > 325 && y < 365) {
            //alert("sfx4");
            sfx1.volume = 0.8;
            sfx2.volume = 0.8;
            sfx2.play();
            sfxState1 = images[0];
            sfxState2 = images[1];
            sfxState3 = images[2];
            sfxState4 = images[8];
            sfxState5 = images[4];
            sfxMuteState = images[10];
            drawSfxVolume1();
            drawSfxVolume2();
            drawSfxVolume3();
            drawSfxVolume4();
            drawSfxVolume5();
            drawSfxMuteButton();
        }

        //Sfx Volume5
        if (x > 235 && x < 275 && y > 325 && y < 365) {
            //alert("sfx5");
            sfx1.volume = 1.0;
            sfx2.volume = 1.0;
            sfx2.play();
            sfxState1 = images[0];
            sfxState2 = images[1];
            sfxState3 = images[2];
            sfxState4 = images[3];
            sfxState5 = images[9];
            sfxMuteState = images[10];
            drawSfxVolume1();
            drawSfxVolume2();
            drawSfxVolume3();
            drawSfxVolume4();
            drawSfxVolume5();
            drawSfxMuteButton();
        }

        //Sfx Mute button
        if (x > 110 && x < 210 && y > 370 && y < 410) {
            muteSfx();
            sfxState1 = images[0];
            sfxState2 = images[1];
            sfxState3 = images[2];
            sfxState4 = images[3];
            sfxState5 = images[4];
            sfxMuteState = images[11];
            drawSfxVolume1();
            drawSfxVolume2();
            drawSfxVolume3();
            drawSfxVolume4();
            drawSfxVolume5();
            drawSfxMuteButton();
        }
    }

    ctx.clearRect(0, 0, 320, 480);
    drawBackButton();
    drawAudioTitle();
    drawBackgroundMusicTitle();
    drawBgmVolume1();
    drawBgmVolume2();
    drawBgmVolume3();
    drawBgmVolume4();
    drawBgmVolume5();
    drawSfxTitle();
    drawSfxVolume1();
    drawSfxVolume2();
    drawSfxVolume3();
    drawSfxVolume4();
    drawSfxVolume5();
    drawBgmMuteButton();
    drawSfxMuteButton();
}
/* Call Colour Settings */
function startColourSettings() {
    canvas.addEventListener("mouseup", activeArea, false);

    var backButtonImg = document.getElementById("backButton");
    var leftArrowImg = document.getElementById("leftArrow");
    var rightArrowImg = document.getElementById("rightArrow");
    var colourPackTitleImg = document.getElementById("colourPackTitle");



    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx1.play();
            startSettings();
            //alert ("this is the back button");
        }

        //Left Arrow Button
        if (x > 5 && x < 40 && y > 280 && y < 320) {
            if (palette == palette0) {
                palette = palette4;
                paletteTitle = images[16];
                paletteImg = paletteImgArray[4];
            }
            else if (palette == palette4) {
                palette = palette3;
                paletteTitle = images[15];
                paletteImg = paletteImgArray[3];
            }
            else if (palette == palette3) {
                palette = palette2;
                paletteTitle = images[14];
                paletteImg = paletteImgArray[2];
            }
            else if (palette == palette2) {
                palette = palette1;
                paletteTitle = images[13];
                paletteImg = paletteImgArray[1];
            }
            else if (palette == palette1) {
                palette = palette0;
                paletteTitle = images[12];
                paletteImg = paletteImgArray[0];
            }
            sfx2.play();
            drawTile0();
            drawTile1();
            drawTile2();
            drawTile3();
            drawColourPackString();
            drawPackPanel();


        }

        //Right Arrow Button
        if (x > 280 && x < 315 && y > 280 && y < 320) {
            if (palette == palette0) {
                palette = palette1;
                paletteTitle = images[13];
                paletteImg = paletteImgArray[1];

            }
            else if (palette == palette1) {
                palette = palette2;
                paletteTitle = images[14];
                paletteImg = paletteImgArray[2];

            }
            else if (palette == palette2) {
                palette = palette3;
                paletteTitle = images[15];
                paletteImg = paletteImgArray[3];

            }
            else if (palette == palette3) {
                palette = palette4;
                paletteTitle = images[16];
                paletteImg = paletteImgArray[4];

            }
            else if (palette == palette4) {
                palette = palette0;
                paletteTitle = images[12];
                paletteImg = paletteImgArray[0];

            }
            sfx2.play();
            drawTile0();
            drawTile1();
            drawTile2();
            drawTile3();
            drawColourPackString();
            drawPackPanel();
            //alert(palette);
        }

        //Dan's easter egg
        //alert(x + " " + y);

        if (x > 265 && x < 290 && y > 70 && y < 100) {

            danCount++;
            if (danCount % 13 == 0) {
                palette = ["#998365", "#1E3259", "#EF1921", "#678314", "#A1C4A6"];
                paletteTitle = "Ballfondler's Delight";
                paletteImg = "#FF0F0F0";
                drawTile0();
                drawTile1();
                drawTile2();
                drawTile3();
                //drawColourPackString();
                drawPackPanel();
            }

        }

    }

    //Preview Colours

    function drawPreview() {
        ctx.fillStyle = "#F5634A";
        ctx.fillRect(25, 120, 270, 80);
    }

    //The Colour Pack Panel
    function drawPackPanel() {
        ctx.clearRect(50, 220, 220, 170);
        ctx.fillStyle = paletteImg;
        ctx.fillRect(50, 220, 220, 170);
    }

    function drawColourPackString() {
        ctx.clearRect(45, 410, 250, 63);
        ctx.drawImage(paletteTitle, 45, 410, 250, 63);

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



    ctx.clearRect(0, 0, 320, 480);
    //Back button
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);

    //Left arrow
        ctx.drawImage(leftArrowImg, 5, 280, 40, 46);

    //Right arrow
        ctx.drawImage(rightArrowImg, 278, 280, 40, 46);

    //Colour pack title
        ctx.drawImage(colourPackTitleImg, 30, 60, 263, 42);

    drawPackPanel();
    drawTile0();
    drawTile1();
    drawTile2();
    drawTile3();
    drawColourPackString();

}