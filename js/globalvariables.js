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

var paletteTitle0Img = document.getElementById("paletteTitle0");
var paletteTitle1Img = document.getElementById("paletteTitle1");
var paletteTitle2Img = document.getElementById("paletteTitle2");
var paletteTitle3Img = document.getElementById("paletteTitle3");
var paletteTitle4Img = document.getElementById("paletteTitle4");

var paletteTitleArray = [paletteTitle0Img, paletteTitle1Img, paletteTitle2Img, paletteTitle3Img, paletteTitle4Img];
var paletteTitle = paletteTitle4Img;
var storePalette = null;
var paletteImgArray = ["#FEF216", "#260101", "#FFBE44", "#B05514", "#953B32"];
var paletteImg = paletteImgArray[4];
var colourModeStateFill = "#FFFFFF";
var colourModeState = false;

var volume1Img = document.getElementById("volume1");
var volume2Img = document.getElementById("volume2");
var volume3Img = document.getElementById("volume3");
var volume4Img = document.getElementById("volume4");
var volume5Img = document.getElementById("volume5");

var volume1SelectImg = document.getElementById("volume1Select");
var volume2SelectImg = document.getElementById("volume2Select");
var volume3SelectImg = document.getElementById("volume3Select");
var volume4SelectImg = document.getElementById("volume4Select");
var volume5SelectImg = document.getElementById("volume5Select");

var muteImg = document.getElementById("volumeMute");
var muteSelectImg = document.getElementById("volumeMuteSelect");

var bgmStateArray = ["#008000", "#998365"];
var bgmState1 = volume1SelectImg;
var bgmState2 = volume2Img;
var bgmState3 = volume3Img;
var bgmState4 = volume4Img;
var bgmState5 = volume5Img;
var bgmMuteState = muteImg;
var sfxStateArray = ["#008000", "#998365"];
var sfxState1 = volume1Img;
var sfxState2 = volume2Img;
var sfxState3 = volume3Img;
var sfxState4 = volume4SelectImg;
var sfxState5 = volume5Img;
var sfxMuteState = muteImg;
var danCount = 0;
var palette = palette4;

<<<<<<< HEAD

=======
>>>>>>> 1c990e939383eefec7f25e1bd00b552081c38fa1
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
