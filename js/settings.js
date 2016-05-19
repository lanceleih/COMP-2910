var palette0 = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];
// Backstreet's Back
var palette1 = ["#1E3259", "#BFA58E", "#736B6A", "#260101"];
// Spooky Ghosts
var palette2 = ["#EF1921", "#00FFE1", "#FEBDDD", "#FFBE44"];
// Beer Goggles
var palette3 = ["#678314", "#D66718", "#F8E5A1", "#B05514"];
//Ice Cream Supreme
var palette4 = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];

var paletteTitleArray = ["Jungle Love", "Backstreet's Back", "Spooky Ghosts", "Beer Goggles", "Ice Cream Supreme"];
var paletteTitle = paletteTitleArray[4];

var colourModeStateFill;
var colourModeState;

/* Call settings */
function startSettings() {
    //var palette = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];

    // /var storePalette = null;
    //var blindPalette = ["I", "II", "III", "IV"];
    canvas.addEventListener("mouseup", activeArea, false);

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
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            canvas.removeEventListener("mouseup", activeArea, false);
            backHome();
            //alert("this is the back button");
        }

        //Audio Button function
        if (x > 90 && x < 240 && y > 180 && y < 250) {
            canvas.removeEventListener("mouseup", activeArea, false);
            startAudioSettings();
            //alert("this is the audio button");
        }

        //Colour Pack function
        if (x > 90 && x < 240 && y > 260 && y < 330) {
            canvas.removeEventListener("mouseup", activeArea, false);
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
    canvas.addEventListener("mouseup", activeArea, false);
    var backButtonImg = document.getElementById("backButton");
    var audioTitleImg = document.getElementById("audioTitle");

    function drawBackButton() {
        ctx.drawImage(backButtonImg, 0, 0, 100, 50);
    }

    function drawAudioTitle(){
        ctx.drawImage(audioTitleImg, 30, 60, 263, 42);
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
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            canvas.removecanvasEventListener("mouseup", activeArea, false);
            startSettings();
            //alert ("this is the back button");
        }

    }
    ctx.clearRect(0, 0, 320, 480);
    drawBackButton();
    drawAudioTitle();
    drawBackgroundMusicTitle();
    drawBackgroundSlider();
    drawSfxTitle();
    drawSfxSlider();
}
/* Call Colour Settings */
function startColourSettings() {
    canvas.addEventListener("mouseup", activeArea, false);

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
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //Back button function
        if (x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            canvas.removeEventListener("mouseup", activeArea, false);
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
        ctx.clearRect(25, 410, 270, 55);
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