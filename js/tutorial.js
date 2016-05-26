/**
 * Created by Kunlaya on 2016-05-26.
 */
function callTutorial() {
    //Event listener for the click-able areas
    canvas.addEventListener("mouseup", activeArea, false);

    //Button ID's and headers/titles
    var backButtonImg = document.getElementById("backButton");
    var leftArrowImg = document.getElementById("leftArrow");
    var rightArrowImg = document.getElementById("rightArrow");
    var imageone = document.getElementById("1");
    var imagetwo = document.getElementById("2");
    var imagethree = document.getElementById("3");
    var imagefour = document.getElementById("4");

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