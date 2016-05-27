function firstTutorial() {
    ctx.clearRect(0, 0, 320, 480);
    var rightArrowTutorial = document.getElementById("rightArrow");

    //Right arrow
    ctx.drawImage(rightArrowTutorial, 278, 280, 40, 46);

    var firstImage = document.getElementById("1");
    ctx.drawImage(firstImage, 50, 60, 220, 400);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);
    canvas.addEventListener("click", getPosition, false);
    ctx.strokeStyle = '#000';  // some color/style
    ctx.lineWidth = 5;         // thickness
    ctx.strokeRect( 55, 60, 220, 400);
    function getPosition() {
        var x = event.x;
        var y = event.y;

        if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            // back to home
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            selectShape();
        } else if(x > 278 * widthFactor + leftMargin && x < 318 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 326 * heightFactor + topMargin) {
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            secondTutorial();
        }
    }
}
function secondTutorial() {
    ctx.clearRect(0, 0, 320, 480);
    var leftArrowTutorial = document.getElementById("leftArrow");
    var rightArrowTutorial = document.getElementById("rightArrow");

    //Left arrow
    ctx.drawImage(leftArrowTutorial, 5, 280, 40, 46);
    //Right arrow
    ctx.drawImage(rightArrowTutorial, 278, 280, 40, 46);

    var secondImage = document.getElementById("2");
    ctx.drawImage(secondImage, 50, 60, 220, 400);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);
    canvas.addEventListener("click", getPosition, false);
    ctx.strokeStyle = '#000';  // some color/style
    ctx.lineWidth = 5;         // thickness
    ctx.strokeRect( 55, 60, 220, 400);
    function getPosition() {
        var x = event.x;
        var y = event.y;

        if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            // back to home
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            selectShape();
        } else if (x > 278 * widthFactor + leftMargin && x < 318 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 326 * heightFactor + topMargin) {
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            thirdTutorial();
        } else if (x > 5 * widthFactor + leftMargin && x < 45 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 326 * heightFactor + topMargin) {
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            firstTutorial();
        }
    }
}
function thirdTutorial() {
    ctx.clearRect(0, 0, 320, 480);
    var leftArrowTutorial = document.getElementById("leftArrow");

    //Left arrow
    ctx.drawImage(leftArrowTutorial, 5, 280, 40, 46);

    var secondImage = document.getElementById("3");
    ctx.drawImage(secondImage, 50, 60, 220, 400);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);
    canvas.addEventListener("click", getPosition, false);
    ctx.strokeStyle = '#000';  // some color/style
    ctx.lineWidth = 5;         // thickness
    ctx.strokeRect( 55, 60, 220, 400);
    function getPosition() {
        var x = event.x;
        var y = event.y;

        if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            // back to home
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            selectShape();
        } else if (x > 5 * widthFactor + leftMargin && x < 45 * widthFactor + leftMargin && y > 280 * heightFactor + topMargin && y < 326 * heightFactor + topMargin) {
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            secondTutorial();
        }
    }
}