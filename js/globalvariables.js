/* Javascript for All Parts of Game */
/*Global variables*/
var canvas;
var ctx;

/* Audio: BGM & SFX */
var bgm = new Audio("../audio/shopExtended.mp3");
var sfx1 = new Audio("../audio/tap.wav");
var sfx2 = new Audio("../audio/click.wav");

bgm.volume = 0.2;
sfx1.volume = 0.8;
sfx2.volume = 0.8;


/*0=square 1=diamond 2=hexagon*/
var shape;
/*0=easy 1=medium 2=hard*/
var difficulty;

/*Colour Inventory*/
// Jungle Love
var palette0 = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];
// Autumn's Splendor
var palette1 = ["#FE845F", "#51545B", "#FAD0B8", "#BCC4C7"];
// Pacman Ghosts
var palette2 = ["#EF1921", "#00FFE1", "#FEBDDD", "#FFBE44"];
// Ice Cream Desserts
var palette3 = ["#7D9772", "#BDDFBB", "#F9B899", "#FBC86B"];
// Beer Goggles
var palette4 = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
// R/G Colour Blind Palette
var rgPalette = ["#004163", "#FFC740", "#A09EC5", "#A69F8D"];
var preload = [
    //Default volume icons
    "../img/volume/volumeOne.png", //0
    "../img/volume/volumeTwo.png", //1
    "../img/volume/volumeThree.png", //2
    "../img/volume/volumeFour.png",  //3
    "../img/volume/volumeFive.png",  //4
    //Selected volume icons
    "../img/volume/volumeOneClicked.png", //5
    "../img/volume/volumeTwoClicked.png",  //6
    "../img/volume/volumeThreeClicked.png",  //7
    "../img/volume/volumeFourClicked.png", //8
    "../img/volume/volumeFiveClicked.png", //9
    // Mute buttons
    "../img/volume/mute.png",  //10
    "../img/volume/muteClicked.png", //11
    // Colour Pack Title Images
    "../img/icons/Jungle%20love.png", //12
    "../img/icons/Autumn's%20Splendor.png", //13
    "../img/icons/pacman%20ghosts.png", //14
    "../img/icons/icecream.png", //15
    "../img/icons/Beer%20Goggles.png" //16

];

var images = [];
for (i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
}

var paletteTitle = images[16];
var storePalette = null;
var paletteImgArray = ["#FEF216", "#260101", "#FFBE44", "#B05514", "#953B32"];
var paletteImg = paletteImgArray[4];
var colourModeStateFill = "#FFFFFF";
var colourModeState = false;


var bgmState1 = images[5];
var bgmState2 = images[1];
var bgmState3 = images[2];
var bgmState4 = images[3];
var bgmState5 = images[4];
var bgmMuteState = images[10];

var sfxState1 = images[0];
var sfxState2 = images[1];
var sfxState3 = images[2];
var sfxState4 = images[8];
var sfxState5 = images[4];
var sfxMuteState = images[10];
var danCount = 0;
var palette = palette4;

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
