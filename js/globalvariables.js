/* Javascript for All Parts of Game */
/*Global variables*/
var canvas;
var ctx;

/* Audio: BGM & SFX */
var bgm;
var sfx1;
var sfx2;
var sfx3;
var sfx4;
var sfx5;

/*Responsive Margins*/
var mainDiv;
var submitButton;
var easterDiv;
var leaderboardTableDiv;

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

// Number of games played*
var gamesSqu;
var gamesDia;
var gamesHex;

/*Colour Inventory*/
// Jungle Love
var paletteA;
// Autumn's Splendor
var paletteB;
// Pacman Ghosts
var paletteC;
// Beer Goggles for now
var paletteD;
// Ice Cream Desserts
var paletteE;
// R/G Colour Blind Palette
var rgPalette;
// Locked palette Autumn's splendor
var paletteF;
// Locked palette Pacman ghosts
var paletteG;
// Locked palette Beer Goggles
var paletteH;

var preload;

var images;

//Jungle love array
var palette0;
//Autumn's splendor array
var palette1;
//Pacman Ghost array
var palette2;
//Beer Goggles array
var palette3;
//Ice Cream desserts array
var palette4;
//Locked Autumn array
var palette5;
//Locked Pacman Ghost Array
var palette6;
//Locked Beer Goggles Array
var palette7;
//Colour Blind Palette Array
var palette8;

var paletteTitle;
var storeImg;
var storePaletteTitle;
var storePalette;
var paletteImg;
var colourModeStateFill;
var colourModeState;

var bgmState1;
var bgmState2;
var bgmState3;
var bgmState4;
var bgmState5;
var bgmMuteState;

var sfxState1;
var sfxState2;
var sfxState3;
var sfxState4;
var sfxState5;
var sfxMuteState;

/* Dan's Testing variables*/
var danCount;
var danFlag;

var palette;

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

// default color -- white
var default_color;

// timer
var gameTimer;
// the starting time
var startTime;
// how long has it been since timer started - in 1/10 of a second or 100 milli-seconds
var elapsedTime;
// The amount of time you're allowed to play per game - 30 minutes = 10 * 60 * 30
var expiryGameTime;

// color inventory array
var colorInventory;
// how many tiles has been colored -- fires validation when all tiles are colored
var tilesColored;

function setGlobalVariables() {
    // Canvas
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");

    // Responsive design
    setResponMargins();
    /* AUDIO and COLOR PACK images*/
    // preload audio and color pack images into images[]
    preload = [
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
        // Locked Colour Pack Title Images
        "../img/icons/beatSquare.png", //23
        "../img/icons/beatDiamond.png", //24
        "../img/icons/beatHexagon.png", //25
        //Colour Blind Images and Titles
        "../img/icons/active.png" //26
    ];
    images = [];
    for (i = 0; i < preload.length; i++) {
        images[i] = new Image();
        images[i].src = preload[i];
    }

    /* DAN's testing variables */
    danCount = 0;
    danFlag = false;

    setDefaultGameSettings();
    setDefaultAudioSettings();
    setDefaultColorSettings();

    $(window).resize(setResponMargins);
}

function setDefaultGameSettings() {
    // Number of games played*
    gamesSqu = 0;
    gamesDia = 0;
    gamesHex = 0;

    // offsets, margins, and x, y, width, height of every components in game
    offset_left = 20;
    offset_right = offset_left;
    offset_top = 20;
    offset_bottom = offset_top;
    margin_x = 20;
    margin_y = 20;
    timer_x = offset_left;
    timer_y = offset_top;
    timer_width = 200;
    timer_height = 60;
    pause_x = timer_x + timer_width + margin_x;
    pause_y = offset_top;
    pause_width = 60;
    pause_height = timer_height;
    inventory_width = canvas.width - offset_left - offset_right;
    inventory_height = timer_height;
    board_x = offset_left;
    board_y = offset_top + timer_height + margin_y;
    board_width = canvas.width - offset_left - offset_right;
    board_height = canvas.height - offset_top - offset_bottom - timer_height - margin_x * 2 - inventory_height;
    inventory_x = offset_left;
    inventory_y = offset_top + timer_height + margin_y * 2 + board_height;

    // default color -- white
    default_color = "#FFFFFF";

    // The amount of time you're allowed to play per game - 30 minutes = 10 deci-seconds per second  * 60 seconds per minute  * 60 minutes
    expiryGameTime = 10 * 60 * 60;
    //expiryGameTime = 10 * 5; // testing purpose - 5 seconds only

    // color inventory array
    colorInventory = new Array(4);
    // how many tiles has been colored -- fires validation when all tiles are colored
}

function setDefaultAudioSettings() {
    /* Audio: BGM & SFX */
    bgm = new Audio("../audio/shop.mp3");
    sfx1 = new Audio("../audio/tap2.wav");
    sfx2 = new Audio("../audio/click2.wav");
    sfx3 = new Audio("../audio/glass2.wav");
    sfx4 = new Audio("../audio/clank.wav");
    sfx5 = new Audio("../audio/whistle.wav");

    // set default bgm + sfx volume level
    bgm.volume = 0.2;
    sfx1.volume = 0.8;
    sfx2.volume = 0.8;
    sfx3.volume = 0.8;
    sfx4.volume = 0.8;
    sfx5.volume= 0.8;

    // play and loop bgm
    bgm.play();
    bgm.loop = true;

    // set default bgm button states
    bgmState1 = images[5]; // clicked
    bgmState2 = images[1];
    bgmState3 = images[2];
    bgmState4 = images[3];
    bgmState5 = images[4];
    bgmMuteState = images[10];

    // set default sfx button states
    sfxState1 = images[0];
    sfxState2 = images[1];
    sfxState3 = images[2];
    sfxState4 = images[8]; // clicked
    sfxState5 = images[4];
    sfxMuteState = images[10];
}

function setDefaultColorSettings() {
    /*Colour Inventory*/
    // Jungle Love
    paletteA = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];
    // Autumn's Splendor
    paletteB = ["#BEDFBD", "#51545B", "#FAD0B8", "#BCC4C7"];
    // Pacman Ghosts
    paletteC = ["#EF1921", "#00FFE1", "#FEBDDD", "#FFBE44"];
    // Beer Goggles for now
    paletteD = ["#FFCC00", "#BDDFBB", "#688315", "#B15515"];
    // Ice Cream Desserts
    paletteE = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
    // R/G Colour Blind Palette
    rgPalette = ["#3860B3", "#FFC740", "#A09EC5", "#A69F8D"];
    // Locked palette Autumn's splendor
    paletteF = ["#666666", "#666666", "#666666", "#666666"];
    // Locked palette Pacman ghosts
    paletteG = ["#999999", "#999999", "#999999", "#999999"];
    // Locked palette Beer Goggles
    paletteH = ["#CCCCCC", "#CCCCCC", "#CCCCCC", "#CCCCCC"];

    //Jungle love array
    palette0 = [images[12], images[17], paletteA, true];
    //Autumn's splendor array
    palette1 = [images[13], images[18], paletteB, true];
    //Pacman Ghost array
    palette2 = [images[14], images[19], paletteC, true];
    //Beer Goggles array
    palette3 = [images[15], images[20], paletteD, true];
    //Ice Cream desserts array
    palette4 = [images[16], images[21], paletteE, true];
    //Locked Autumn array
    palette5 = [images[23], images[22], paletteF, false];
    //Locked Pacman Ghost Array
    palette6 = [images[24], images[22], paletteG, false];
    //Locked Beer Goggles Array
    palette7 = [images[25], images[22], paletteH, false];
    //Colour Blind Palette Array
    palette8 = [images[26], images[22], rgPalette, false];

    //set default palette
    palette = palette4;
    //set default palette title
    paletteTitle = palette4[0];
    //set default palette image
    paletteImg = palette4[1];

    storeImg = null;
    storePaletteTitle = null;
    storePalette = null;
    colourModeStateFill = "#FFFFFF";
    colourModeState = false;
}
