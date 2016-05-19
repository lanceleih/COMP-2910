/* Javascript for All Parts of Game */

/*Global variables*/
var canvas;
var ctx;

/* Audio: BGM & SFX */


/*Game Board variables*/
var maxTiles;
var maxRows;
var maxCols;
var OFFSET_LEFT = 20;
var OFFSET_RIGHT = 20;
var OFFSET_TOP = 100;
var OFFSET_BOTTOM = 100;
var BOARD_WIDTH = 320 - OFFSET_LEFT - OFFSET_RIGHT;
var BOARD_HEIGHT = 480 - OFFSET_TOP - OFFSET_BOTTOM;
var TILE_SHAPE = "square";
var DEFAULT_COLOR = "#FFFFFF";
var TILE_WIDTH;
var TILE_HEIGHT;

var tiles;

/*0=square 1=diamond 2=hexagon*/
var shape;
/*0=easy 1=medium 2=hard*/
var difficulty;

/*Colour Inventory*/
var palette = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
var colorInventory;
var tilesColored;

/*Timer*/
var gameTimer;
var elapsedTime;
var startTime;

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
function backHome() {
    document.getElementById("addName").style.display = "none"; // leaderboard textbox disappears
    var count = 0;
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

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










