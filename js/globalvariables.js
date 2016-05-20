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


/*0=square 1=diamond 2=hexagon*/
var shape;
/*0=easy 1=medium 2=hard*/
var difficulty;

/*Colour Inventory*/
// Jungle Love
var palette0 = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];
// Autumn's Splendor
var palette1 = ["#BEDFBD", "#51545B", "#FAD0B8", "#BCC4C7"];
// Pacman Ghosts
var palette2 = ["#EF1921", "#00FFE1", "#FEBDDD", "#FFBE44"];
// Beer Goggles for now
var palette3 = ["#FFCC00", "#BDDFBB", "#688315", "#B15515"];
// Ice Cream Desserts
var palette4 = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
// R/G Colour Blind Palette
var rgPalette = ["#004163", "#FFC740", "#A09EC5", "#A69F8D"];
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
    //Easter Egg
    "../img/background/eastereggpanel.jpg", //22
    "../img/background/eastereggtitle.png" //23
];

var images = [];
for (i = 0; i < preload.length; i++) {
    images[i] = new Image();
    images[i].src = preload[i];
}

var paletteTitle = images[16];
var storeImg = null;
var storePaletteTitle = null;
var storePalette = null;
var paletteImg = images[21];
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
