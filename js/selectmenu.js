/*Global variables*/
    var home;
    var ctx;
/*The select shape page for the game*/
function selectShape() {
    ctx.clearRect(0, 0, 320, 480);

    var img = document.getElementById("shapeTitle");
    ctx.drawImage(img, 13, 40, 300, 132);
    var img = document.getElementById("squareButton");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("diamondButton");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("hexButton");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("tutorial");
    ctx.drawImage(img, 180, 300, 125, 100);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);   

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        setResponMargins();
        var x = event.x;
        var y = event.y;

        //alert(x + ',' + y);
        if (x > 20 * widthFactor + leftMargin && x < 145 * widthFactor + leftMargin && y > 180 * heightFactor + topMargin && y < 280 * heightFactor + topMargin) {
            // square shape
            shape = 0;
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            selectDifficulty();
        } else if (x > 180 * widthFactor + leftMargin && x < 305 * widthFactor + leftMargin && y > 180 * heightFactor + topMargin && y < 280 * heightFactor + topMargin) {
            // diamond shape
            shape = 1;
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            selectDifficulty();
        } else if (x > 20 * widthFactor + leftMargin && x < 145 * widthFactor + leftMargin && y > 300 * heightFactor + topMargin && y < 400 * heightFactor + topMargin) {
            // hexagon shape
            shape = 2;
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            selectDifficulty();
        } else if (x > 180 * widthFactor + leftMargin && x < 305 * widthFactor + leftMargin && y > 300 * heightFactor + topMargin && y < 400 * heightFactor + topMargin) {
            // Tutorial
        } else if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            // back to home
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            home();
        }
    }
}

/*The select difficulty page for the game*/
function selectDifficulty() {
    ctx.clearRect(0, 0, 320, 480);

    var img=document.getElementById("difficultyTitle");
    ctx.drawImage(img, 13, 40, 300, 132);
    var img=document.getElementById("easyButton");
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("mediumButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("hardButton");
    ctx.drawImage(img,90,340, 150, 75);
    var img=document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        setResponMargins();
        var x = event.x;
        var y = event.y;
        //alert(x + ',' + y);

        if(x > 90 * widthFactor + leftMargin && x < 240 * widthFactor + leftMargin && y > 180 * heightFactor + topMargin && y < 255 * heightFactor + topMargin) {
            // easy difficulty
            difficulty = 0;
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            newGame();
        } else if(x > 90 * widthFactor + leftMargin && x < 240 * widthFactor + leftMargin && y > 260 * heightFactor + topMargin && y < 335 * heightFactor + topMargin) {
            // medium difficulty
            difficulty = 1;
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            newGame();
        } else if(x > 90 * widthFactor + leftMargin && x < 240 * widthFactor + leftMargin && y > 340 * heightFactor + topMargin && y < 415 * heightFactor + topMargin) {
            // hard difficulty
            difficulty = 2;
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            newGame();
        } else if(x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
            // back to select shape
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            selectShape();
        }
    }
}

