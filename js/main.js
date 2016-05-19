/* Javascript for All Parts of Game */

/*Global variables*/
var canvas;
var ctx;

/* Audio: BGM & SFX */
var bgm = new Audio("../audio/shop.mp3");
var sfx1 = new Audio("../audio/tap.wav");
var sfx2 = new Audio("../audio/click.wav");


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

/*0=square 1=diamond 2=hexagon*/
var shape;
/*0=easy 1=medium 2=hard*/
var difficulty;

/*Colour Inventory*/
var palette = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];

// new global variables
// offsets, margins, and x, y, width, height of every components in game
var offset_left;
var offset_right;
var offset_top;
var offset_bottom;
var margin_x;
var margin_y;
var timer_x;
var timer_y;
var timer_width;
var timer_height;
var pause_x;
var pause_y;
var pause_width;
var pause_height;
var inventory_width;
var inventory_height;
var board_x;
var board_y;
var board_width;
var board_height;
var inventory_x;
var inventory_y;

// variable values that change based on shape and difficulty
var max_row;
var max_col;
var max_tile;
var tile_width;
var tile_height;

//specific units for hexagon -- unit width
var uw;
//specific units for hexagon -- unit height
var uh;

// tile array
var tiles;
// coloring palette array
//var palette = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
// default color -- white
var default_color = "#FFFFFF";

// timer
var gameTimer;
// the starting time
var startTime;
// how long has it been since timer started
var elapsedTime;
// color inventory array
var colorInventory = new Array(4);
// how many tiles has been colored -- fires validation when all tiles are colored
var tilesColored;

/* Javascript for the home page*/
function home() {
    bgm.volume = 0.2;
    sfx1.volume = 0.8;
    sfx2.volume = 0.8;
    bgm.play();
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    var count = 0;
    var img = document.getElementById("cube");
    ctx.drawImage(img, 15, 70, 70, 70);
    var img = document.getElementById("logo");
    ctx.drawImage(img, 80, 70, 200, 70);
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
            sfx2.play();
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
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

    var img = document.getElementById("cube");
    ctx.drawImage(img, 15, 70, 70, 70);
    var img = document.getElementById("logo");
    ctx.drawImage(img, 80, 70, 200, 70);
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
            sfx2.play();
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
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










