/*Global variables*/
    var home;
    var ctx;
/*The select shape page for the game*/
function selectShape() {
    home = document.getElementById("mainCanvas");
    ctx = home.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var img = document.getElementById("shapeTitle");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("squareButton");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("diamondButton");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("hexButton");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);
        if (x > 20 && x < 145 && y > 180 && y < 280) {
            home.removeEventListener("click", getPosition, false);
            shape = 0;
            selectDifficulty();
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            shape = 1;
            //selectDifficulty();
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            //selectDifficulty();
            shape = 2;
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            home.removeEventListener("click", getPosition, false);
            backHome();
        }
    }
}

/*The select difficulty page for the game*/
function selectDifficulty() {
    home = document.getElementById("mainCanvas");
    ctx = home.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var img=document.getElementById("difficultyTitle");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("easyButton");
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("mediumButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("hardButton");
    ctx.drawImage(img,90,340, 150, 75);
    var img=document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);

        if(x > 90 && x < 240 && y > 180 && y < 255) {
            //easy difficulty
            home.removeEventListener("click", getPosition, false);
            difficulty = 0;
            newGame();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            //medium difficulty
            difficulty = 1;
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            //hard difficulty
            difficulty = 2;
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            home.removeEventListener("click", getPosition, false);
            selectShape();
        }
    }
}

