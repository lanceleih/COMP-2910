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
        setResponMargins();
        var x = event.x;
        var y = event.y;

        //Back button function
        if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            ctx.clearRect(0, 0, 320, 480);
            canvas.removeEventListener("mouseup", activeArea, false);
            sfx1.play();
            startSettings();
            //alert ("this is the back button");
        }

        //Left Arrow Button clicks
        if (x > 5 * widthFactor + leftMargin && x < 40 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 320 * heightFactor + topMargin) {
            if (palette == palette0) {
                palette = palette4;
                paletteTitle = images[16];
                paletteImg = images[21];

            }
            else if (palette == palette4) {
                palette = palette3;
                paletteTitle = images[15];
                paletteImg = images[20];
            }
            else if (palette == palette3) {
                palette = palette2;
                paletteTitle = images[14];
                paletteImg = images[19];
            }
            else if (palette == palette2) {
                palette = palette1;
                paletteTitle = images[13];
                paletteImg = images[18];
            }
            else if (palette == palette1) {
                palette = palette0;
                paletteTitle = images[12];
                paletteImg = images[17];
            }
            sfx2.play();
            drawTile0();
            drawTile1();
            drawTile2();
            drawTile3();
            drawColourPackString();
            drawPackPanel();


        }

        //Right Arrow Button clicks
        if (x > 280 * widthFactor + leftMargin && x < 315 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 320 * heightFactor + topMargin) {
            if (palette == palette0) {
                palette = palette1;
                paletteTitle = images[13];
                paletteImg = images[18];

            }
            else if (palette == palette1) {
                palette = palette2;
                paletteTitle = images[14];
                paletteImg = images[19];

            }
            else if (palette == palette2) {
                palette = palette3;
                paletteTitle = images[15];
                paletteImg = images[20];

            }
            else if (palette == palette3) {
                palette = palette4;
                paletteTitle = images[16];
                paletteImg = images[21];

            }
            else if (palette == palette4) {
                palette = palette0;
                paletteTitle = images[12];
                paletteImg = images[17];

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
            if (danCount % 3 == 0 && danFlag == false) {
                danFlag = true;
                alert(danFlag);
                palette = ["#998365", "#1E3259", "#EF1921", "#678314", "#A1C4A6"];
                storeImg = paletteImg;
                storePaletteTitle = paletteTitle;
                paletteTitle = images[23];
                paletteImg = images[22];
                drawTile0();
                drawTile1();
                drawTile2();
                drawTile3();
                drawColourPackString();
                drawPackPanel();
            }
            else if (danCount % 3 != 0 && danFlag == true){
                danFlag = false;
                alert(danFlag);
                paletteImg = storeImg;
                paletteTitle = storePaletteTitle;
                drawTile0();
                drawTile1();
                drawTile2();
                drawTile3();
                drawColourPackString();
                drawPackPanel();
            }

        }

    }

    //Functions


    //Draws palette image
    function drawPackPanel() {
        ctx.clearRect(50, 220, 220, 170);
        ctx.drawImage(paletteImg, 50, 220, 220, 170);
    }

    //Draws palette colour pack titles
    function drawColourPackString() {
        ctx.clearRect(45, 410, 250, 63);
        ctx.drawImage(paletteTitle, 45, 410, 250, 63);

    }

    //Draws the first colour in the colour pack
    function drawTile0() {
        ctx.clearRect(25, 125, 65, 70);
        ctx.fillStyle = palette[0];
        ctx.fillRect(25, 125, 65, 70)
    }

    //Draws the second colour in the colour pack
    function drawTile1() {
        ctx.clearRect(95, 125, 65, 70);
        ctx.fillStyle = palette[1];
        ctx.fillRect(95, 125, 65, 70)
    }

    //Draws the third colour in the colour pack
    function drawTile2() {
        ctx.clearRect(165, 125, 65, 70);
        ctx.fillStyle = palette[2];
        ctx.fillRect(165, 125, 65, 70)
    }
    
    //Draws the fourth colour in the colour pack
    function drawTile3() {
        ctx.clearRect(235, 125, 65, 70);
        ctx.fillStyle = palette[3];
        ctx.fillRect(235, 125, 65, 70)
    }


    // Initialized buttons and images
    //Clears previous page
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
