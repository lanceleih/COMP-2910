/* Call Colour Settings */
function startColourSettings() {
    //Event listener for the click-able areas
    canvas.addEventListener("mouseup", activeArea, false);

    //Button ID's and headers/titles
    var backButtonImg = document.getElementById("backButton");
    var leftArrowImg = document.getElementById("leftArrow");
    var rightArrowImg = document.getElementById("rightArrow");
    var colourPackTitleImg = document.getElementById("colourPackTitle");



    //Maps the coordinates for the clickable areas on the screen
    function activeArea(event) {
        var x = event.x;
        var y = event.y;

        //Back button function
        if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {

            if (palette == palette5 || palette == palette6 || palette == palette7) {
                sfx5.play();
            }
            else {
                ctx.clearRect(0, 0, 320, 480);
                canvas.removeEventListener("mouseup", activeArea, false);
                startSettings();
                sfx1.play();
            }
            //alert ("this is the back button");
        }

        //Left Arrow Button clicks
        if (colourModeState == false) {
            if (x > (5 * widthFactor + leftMargin) && x < (40 * widthFactor + leftMargin) && y > (280 * heightFactor + topMargin) && y < (320 * heightFactor + topMargin)) {
                whichStateLeft();
                if (palette == palette5 || palette == palette6 || palette == palette7) {
                    sfx4.play();
                } else {
                    sfx2.play();
                }
                drawTile0();
                drawTile1();
                drawTile2();
                drawTile3();
                drawColourPackString();
                drawPackPanel();


            }

            //Right Arrow Button clicks
            if (x > 280 * widthFactor + leftMargin && x < 315 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 320 * heightFactor + topMargin) {
                whichStateRight();
                if (palette == palette5 || palette == palette6 || palette == palette7) {
                    sfx4.play();
                } else {
                    sfx2.play();
                }
                drawTile0();
                drawTile1();
                drawTile2();
                drawTile3();
                drawColourPackString();
                drawPackPanel();
                //alert(palette);
            }

        }
    }
    //Functions
    //Draws palette image
    function drawPackPanel() {
        ctx.clearRect(50, 220, 220, 170);
        ctx.drawImage(palette[1], 50, 220, 220, 170);
    }

    //Draws palette colour pack titles
    function drawColourPackString() {
        ctx.clearRect(35, 410, 250, 63);
        ctx.drawImage(palette[0], 35, 410, 250, 63);

    }

    //Draws the first colour in the colour pack
    function drawTile0() {
        ctx.clearRect(25, 125, 65, 70);
        ctx.fillStyle = palette[2][0];
        ctx.fillRect(25, 125, 65, 70)
    }

    //Draws the second colour in the colour pack
    function drawTile1() {
        ctx.clearRect(95, 125, 65, 70);
        ctx.fillStyle = palette[2][1];
        ctx.fillRect(95, 125, 65, 70)
    }

    //Draws the third colour in the colour pack
    function drawTile2() {
        ctx.clearRect(165, 125, 65, 70);
        ctx.fillStyle = palette[2][2];
        ctx.fillRect(165, 125, 65, 70)
    }
    
    //Draws the fourth colour in the colour pack
    function drawTile3() {
        ctx.clearRect(235, 125, 65, 70);
        ctx.fillStyle = palette[2][3];
        ctx.fillRect(235, 125, 65, 70)
    }

    //State 0: No levels unlocked 0 0 0
    function state0Left(){
        if (palette == palette0) {

            palette = palette4;
        }
        else if (palette == palette5){
            palette = palette0;
        }
        else if (palette == palette6) {
            palette = palette5;
        }
        else if (palette == palette7) {
            palette = palette6;
        }
        else if (palette == palette4){
            palette = palette7;
        }
    }
    function state0Right(){
        if (palette == palette0) {
            palette = palette5;
        }
        else if (palette == palette5){
            palette = palette6;
        }
        else if (palette == palette6) {
            palette = palette7;
        }
        else if (palette == palette7) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }

    //State 1: Only Square unlocked 0 0 1
    function state1Left() {
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette1){
            palette = palette0;
        }
        else if (palette == palette6) {
            palette = palette1;
        }
        else if (palette == palette7) {
            palette = palette6;
        }
        else if (palette == palette4){
            palette = palette7;
        }
    }
    function state1Right() {
        if (palette == palette0) {
            palette = palette1;
        }
        else if (palette == palette1){
            palette = palette6;
        }
        else if (palette == palette6) {
            palette = palette7;
        }
        else if (palette == palette7) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }

    //State 2: Only Diamond unlocked 0 1 0
    function state2Left() {
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette5){
            palette = palette0;
        }
        else if (palette == palette2) {
            palette = palette5;
        }
        else if (palette == palette7) {
            palette = palette2;
        }
        else if (palette == palette4){
            palette = palette7;
        }
    }
    function state2Right() {
        if (palette == palette0) {
            palette = palette5;
        }
        else if (palette == palette5){
            palette = palette2;
        }
        else if (palette == palette2) {
            palette = palette7;
        }
        else if (palette == palette7) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }

    //State 3: Square and Diamond unlocked 0 1 1
    function state3Left() {
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette1){
            palette = palette0;
        }
        else if (palette == palette2) {
            palette = palette1;
        }
        else if (palette == palette7) {
            palette = palette2;
        }
        else if (palette == palette4){
            palette = palette7;
        }
    }
    function state3Right() {
        if (palette == palette0) {
            palette = palette1;
        }
        else if (palette == palette1){
            palette = palette2;
        }
        else if (palette == palette2) {
            palette = palette7;
        }
        else if (palette == palette7) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }
    //State 4: Only Hexagon unlocked 1 0 0
    function state4Left() {
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette5){
            palette = palette0;
        }
        else if (palette == palette6) {
            palette = palette5;
        }
        else if (palette == palette3) {
            palette = palette6;
        }
        else if (palette == palette4){
            palette = palette3;
        }
    }
    function state4Right() {
        if (palette == palette0) {
            palette = palette5;
        }
        else if (palette == palette5){
            palette = palette6;
        }
        else if (palette == palette6) {
            palette = palette3;
        }
        else if (palette == palette3) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }

    //State 5: Square and hexagon unlocked 1 0 1
    function state5Left() {
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette1){
            palette = palette0;
        }
        else if (palette == palette6) {
            palette = palette1;
        }
        else if (palette == palette3) {
            palette = palette6;
        }
        else if (palette == palette4){
            palette = palette3;
        }
    }
    function state5Right() {
        if (palette == palette0) {
            palette = palette1;
        }
        else if (palette == palette1){
            palette = palette6;
        }
        else if (palette == palette6) {
            palette = palette3;
        }
        else if (palette == palette3) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }

    //State 6: Diamond and hexagon unlocked 1 1 0
    function state6Left() {
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette5){
            palette = palette0;
        }
        else if (palette == palette2) {
            palette = palette5;
        }
        else if (palette == palette3) {
            palette = palette2;
        }
        else if (palette == palette4){
            palette = palette3;
        }
    }
    function state6Right() {
        if (palette == palette0) {
            palette = palette5;
        }
        else if (palette == palette5){
            palette = palette2;
        }
        else if (palette == palette2) {
            palette = palette3;
        }
        else if (palette == palette3) {
            palette = palette4;
        }
        else if (palette == palette4){
            palette = palette0;
        }
    }

    //State 7: All levels unlocked 1 1 1
    function state7Left(){
        if (palette == palette0) {
            palette = palette4;
        }
        else if (palette == palette1) {
            palette = palette0;
        }
        else if (palette == palette2) {
            palette = palette1;
        }
        else if (palette == palette3) {
            palette = palette2;
        }
        else if (palette == palette4) {
            palette = palette3;
        }
    }
    function state7Right() {
        if (palette == palette0) {
            palette = palette1;
        }
        else if (palette == palette1) {
            palette = palette2;
        }
        else if (palette == palette2) {
            palette = palette3;
        }
        else if (palette == palette3) {
            palette = palette4;
        }
        else if (palette == palette4) {
            palette = palette0;
        }

    }

    // Looks at how many unlockables have been unlocked to rotate left
    function whichStateLeft() {
        if (gamesHex == 0 && gamesDia == 0 && gamesSqu == 0){
            state0Left();
        }
        else if (gamesHex == 0 && gamesDia == 0 && gamesSqu >= 1){
            state1Left();
        }
        else if (gamesHex == 0 && gamesDia >= 1 && gamesSqu == 0){
            state2Left();
        }
        else if (gamesHex == 0 && gamesDia >= 1 && gamesSqu >= 1){
            state3Left();
        }
        else if (gamesHex >= 1 && gamesDia == 0 && gamesSqu == 0){
            state4Left();
        }
        else if (gamesHex >= 1 && gamesDia == 0 && gamesSqu >= 1){
            state5Left();
        }
        else if (gamesHex >= 1 && gamesDia >= 1 && gamesSqu == 0){
            state6Left();
        }
        else if (gamesHex >= 1 && gamesDia >= 1 && gamesSqu >= 1){
            state7Left();
        }
    }
    // Looks at how many unlockables have been unlocked to rotate right 
    function whichStateRight() {
        if (gamesHex == 0 && gamesDia == 0 && gamesSqu == 0){
            state0Right();
        }
        else if (gamesHex == 0 && gamesDia == 0 && gamesSqu >= 1){
            state1Right();
        }
        else if (gamesHex == 0 && gamesDia >= 1 && gamesSqu == 0){
            state2Right();
        }
        else if (gamesHex == 0 && gamesDia >= 1 && gamesSqu >= 1){
            state3Right();
        }
        else if (gamesHex >= 1 && gamesDia == 0 && gamesSqu == 0){
            state4Right();
        }
        else if (gamesHex >= 1 && gamesDia == 0 && gamesSqu >= 1){
            state5Right();
        }
        else if (gamesHex >= 1 && gamesDia >= 1 && gamesSqu == 0){
            state6Right();
        }
        else if (gamesHex >= 1 && gamesDia >= 1 && gamesSqu >= 1){
            state7Right();
        }
    }
    // Initialized buttons and images
    //Clears previous page
    ctx.clearRect(0, 0, 320, 480);
    //Back button
    ctx.drawImage(backButtonImg, 0, 0, 100, 50);

    //Left arrow
    if (colourModeState == false) {
        ctx.drawImage(leftArrowImg, 5, 280, 40, 46);
        //Right arrow
        ctx.drawImage(rightArrowImg, 278, 280, 40, 46);
    }
    //Colour pack title
    ctx.drawImage(colourPackTitleImg, 30, 60, 263, 42);

    drawPackPanel();
    drawTile0();
    drawTile1();
    drawTile2();
    drawTile3();
    drawColourPackString();

}

