function firstTutorial() {
    ctx.clearRect(0, 0, 320, 480);
    var leftArrowTutorial = document.getElementById("leftArrow");
    var rightArrowTutorial = document.getElementById("rightArrow");

    //Left arrow
    ctx.drawImage(leftArrowTutorial, 5, 280, 40, 46);
    //Right arrow
    ctx.drawImage(rightArrowTutorial, 278, 280, 40, 46);

    var firstImage = document.getElementById("1");
    ctx.drawImage(firstImage, 50, 60, 220, 400);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);
    /*var secondimg = document.getElementById("2");
     ctx.drawImage(secondimg, 80, 70, 200, 70);
     var thirdimg = document.getElementById("slogan");
     ctx.drawImage(thirdimg, 60, 420, 200, 50);
     var fourthimg = document.getElementById("playButton");
     ctx.drawImage(fourthimg, 90, 180, 150, 75);*/
    canvas.addEventListener("click", getPosition, false);

    function getPosition() {
        var x = event.x;
        var y = event.y;

        if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            // back to home
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            selectShape();

        }
    }
}