/* Javascript for All Parts of Game */

/*Global variables*/
var canvas;
var ctx;

/* Javascript for the home page*/
function home() {
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    var count = 0;

    var img = document.getElementById("logo");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img = document.getElementById("playButton");
    ctx.drawImage(img, 90, 180, 150, 75);
    var img = document.getElementById("settingsButton");
    ctx.drawImage(img, 90, 260, 150, 75);
    var img = document.getElementById("leaderboardButton");
    ctx.drawImage(img, 90, 340, 150, 75);

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            canvas.removeEventListener("click", getPosition, false);
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            canvas.removeEventListener("click", getPosition, false);
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            canvas.removeEventListener("click", getPosition, false);
            leaderboardShape();
        } else if (x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if (count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    }
}
/*Function for returning to the home page*/
/*function backHome() {
    var count = 0;

    ctx.clearRect(0, 0, 320, 480);

    var img = document.getElementById("logo");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img = document.getElementById("playButton");
    ctx.drawImage(img, 90, 180, 150, 75);
    var img = document.getElementById("setttingsButton");
    ctx.drawImage(img, 90, 260, 150, 75);
    var img = document.getElementById("leaderboardButton");
    ctx.drawImage(img, 90, 340, 150, 75);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            canvas.removeEventListener("click", getPosition, false);
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            canvas.removeEventListener("click", getPosition, false);
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            canvas.removeEventListener("click", getPosition, false);
            leaderboardShape();
        } else if (x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if (count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    }
}*/










