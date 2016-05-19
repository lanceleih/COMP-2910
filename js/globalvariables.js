/* Javascript for All Parts of Game */
/*Global variables*/
    var canvas;
    var ctx;

    /* Audio: BGM & SFX */
    var bgm = new Audio("../audio/shop.mp3");
    var sfx1 = new Audio("../audio/tap.wav");
    var sfx2 = new Audio("../audio/click.wav");

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
