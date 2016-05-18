const MAX_TILES = 25;
const MAX_ROWS = 5;
const MAX_COLS = MAX_TILES / MAX_ROWS;
const OFFSET_LEFT = 20;
const OFFSET_RIGHT = 20;
const OFFSET_TOP = 100;
const OFFSET_BOTTOM = 100;
const BOARD_WIDTH = 320 - OFFSET_LEFT - OFFSET_RIGHT;
const BOARD_HEIGHT = 480 - OFFSET_TOP - OFFSET_BOTTOM;
const TILE_SHAPE = "square";
const DEFAULT_COLOR = "#FFFFFF";
const TILE_WIDTH = BOARD_WIDTH / MAX_COLS;
const TILE_HEIGHT = BOARD_HEIGHT / MAX_ROWS;

var tiles;

var palette = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];

var gameTimer;
var startTime = 0;
var elapsedTime = 0;
var colorInventory = new Array(4);
var tilesColored = 0;
