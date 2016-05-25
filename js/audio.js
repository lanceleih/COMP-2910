/* Call audio settings */
function startAudioSettings() {
    //Event listener for click-able areas
    canvas.addEventListener("mouseup", activeArea, false);

    //Button ID's and Title's
    var backButtonImg = document.getElementById("backButton");
    var audioTitleImg = document.getElementById("audioTitle");
    var bgmHeaderImg = document.getElementById("bgmHeader");
    var sfxHeaderImg = document.getElementById("sfxHeader");



    // Draw functions and mute functions 
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

    //Mute background music
    function muteBgm() {
        bgm.volume = 0;
    }
    //Mute sound effects
    function muteSfx() {
        sfx1.volume = 0;
        sfx2.volume = 0;
    }


    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        setResponMargins();
        var x = event.x;
        var y = event.y;

        //Back button function
        if (x > (15 * widthFactor + leftMargin) && x < (100 * widthFactor + leftMargin) && y > (15 * heightFactor + topMargin) && y < (40* heightFactor + topMargin)) {
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

        //Bgm Volume1 selected
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
        //Bgm Volume2 selected
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
        //Bgm Volume3 selected
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
        //Bgm Volume4 selected
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
        //Bgm Volume5 selected
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

        //Sfx Volume1 selected
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

        //Sfx Volume2 selected
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

        //Sfx Volume3 selected
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

        //Sfx Volume4 selected
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

        //Sfx Volume5 selected
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

        //Sfx Mute button selected
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

    //Initialized graphics and functions

    //Clears the previous page
    ctx.clearRect(0, 0, 320, 480);

    //Draws back button
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);


    //Draws the audio title
        ctx.drawImage(audioTitleImg, 30, 60, 263, 42);

    //Draws the background music header
        ctx.drawImage(bgmHeaderImg, 65, 140, 150, 34);

    //Draws the sound effects sounds header
        ctx.drawImage(sfxHeaderImg, 65, 290, 79, 34);


    drawBgmVolume1();
    drawBgmVolume2();
    drawBgmVolume3();
    drawBgmVolume4();
    drawBgmVolume5();
    drawSfxVolume1();
    drawSfxVolume2();
    drawSfxVolume3();
    drawSfxVolume4();
    drawSfxVolume5();
    drawBgmMuteButton();
    drawSfxMuteButton();

}