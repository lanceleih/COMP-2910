/* Call settings */
function startSettings() {
    //The event listener for the buttons
    canvas.addEventListener("mouseup", activeArea, false);

    // Button ID's
    var backButtonImg = document.getElementById("backButton");
    var audioButtonImg = document.getElementById("audioButton");
    var colourPackButtonImg = document.getElementById("colourPackButton");
    var settingsTitleImg = document.getElementById("settingsTitle");
    var colourBlindImg = document.getElementById("colourBlindText");

    // draw the colour blind toggle fill when colour blind is on or off
    function drawColourBlindToggleFill() {
        ctx.fillStyle = colourModeStateFill;
        ctx.fillRect(65, 355, 15, 15);
    }

    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function: goes to previous page
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx1.play();
            home();
            //alert("this is the back button");
        }

        //Audio Button function: goes into audio settings page
        if (x > 90 && x < 240 && y > 180 && y < 250) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx2.play();
            startAudioSettings();
            //alert("this is the audio button");
        }

        //Colour Pack function: goes into the colour pack selection page
        if (x > 90 && x < 240 && y > 260 && y < 330) {
            canvas.removeEventListener("mouseup", activeArea, false);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx2.play();
            startColourSettings();
            //alert("this is the colour pack button");
        }

        //Colour blind mode function: toggles colour blind mode on and off
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

    //Initialize buttons

    //Clears previous page
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
    
    drawColourBlindToggleFill();

}

