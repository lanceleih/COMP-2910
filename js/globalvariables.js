/* Javascript for All Parts of Game */
/*Global variables*/
var canvas;
var ctx;

/* Audio: BGM & SFX */
var bgm = new Audio("../audio/shop.mp3");
var sfx1 = new Audio("../audio/tap2.wav");
var sfx2 = new Audio("../audio/click2.wav");
var sfx3 = new Audio("../audio/glass2.wav");

bgm.volume = 0.2;
sfx1.volume = 0.8;
sfx2.volume = 0.8;
sfx3.volume = 0.8;

/*Variables for getting offset for responsive design*/
var canvasWidth;
var canvasHeight;
var docWidth;
var docHeight;
var leftMargin;
var topMargin;
var widthFactor;
var heightFactor;


/*0=square 1=diamond 2=hexagon*/
var shape;
/*0=easy 1=medium 2=hard*/
var difficulty;

/*index 0: square index: 1 index: 2
* Number of games played*/
var gamesPlayed = [0, 0, 0];

var gamesSqu = 0;
var gamesDia = 0;
var gamesHex = 0;

/*Colour Inventory*/
// Jungle Love
var paletteA = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];
// Autumn's Splendor
var paletteB = ["#BEDFBD", "#51545B", "#FAD0B8", "#BCC4C7"];
// Pacman Ghosts
var paletteC = ["#EF1921", "#00FFE1", "#FEBDDD", "#FFBE44"];
// Beer Goggles for now
var paletteD = ["#FFCC00", "#BDDFBB", "#688315", "#B15515"];
// Ice Cream Desserts
var paletteE = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
// R/G Colour Blind Palette
var rgPalette = ["#004163", "#FFC740", "#A09EC5", "#A69F8D"];
// Locked palette
var paletteF = ["#333333", "#666666", "#999999", "#CCCCCC"];



var preload = [
    //Default volume icons
    "../img/volume/volumeone.png", //0
    "../img/volume/volumetwo.png", //1
    "../img/volume/volumethree.png", //2
    "../img/volume/volumefour.png",  //3
    "../img/volume/volumefive.png",  //4
    //Selected volume icons
    "../img/volume/volumeoneclicked.png", //5
    "../img/volume/volumetwoclicked.png",  //6
    "../img/volume/volumethreeclicked.png",  //7
    "../img/volume/volumefourclicked.png", //8
    "../img/volume/volumefiveclicked.png", //9
    // Mute buttons
    "../img/volume/mute.png",  //10
    "../img/volume/muteclicked.png", //11
    // Colour Pack Title Images
    "../img/icons/junglelove.png", //12
    "../img/icons/autumn.png", //13
    "../img/icons/pacmanghosts.png", //14
    "../img/icons/beergoggles.png", //15
    "../img/icons/icecream.png", //16
    // Colour Pack Panel Images
    "../img/background/junglelovepanel.jpg", //17
    "../img/background/autumnpanel.jpg", //18
    "../img/background/pacmanghostpanel.jpg", //19
    "../img/background/beergogglespanel.jpg", //20
    "../img/background/icecreampanel.jpg", //21
    "../img/background/lockedimage.jpg", //22
    //Easter Egg
    "../img/background/eastereggpanel.jpg", //23
    "../Unused/icons/easterEggTitle.png" //24
];

var images = [];
for (i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
}
//Jungle love array
var palette0 = [images[12], images[17], paletteA, true];
//Autumn's splendor array
var palette1 = [images[13], images[18], paletteB, true];
//Pacman Ghost array
var palette2 = [images[14], images[19], paletteC, true];
//Beer Goggles array
var palette3 = [images[15], images[20], paletteD, true];
//Ice Cream desserts array
var palette4 = [images[16], images[21], paletteE, true];
//Locked array
var palette5 = [images[12], images[22], paletteF, false];

var paletteTitle = palette4[0];
var storeImg = null;
var storePaletteTitle = null;
var storePalette = null;
var paletteImg = palette4[1];
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
var danFlag = false;
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
