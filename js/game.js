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

/* Javascript for the Paused Page */
function paused() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);
    var pausedTitle = document.getElementById("pausedTitle");
    ctx.drawImage(pausedTitle, 12, 40, 300, 132);
    var resume = document.getElementById("resumeButton");
    ctx.drawImage(resume, 90, 180, 150, 75);
    var restart = document.getElementById("restartButton");
    ctx.drawImage(restart, 90, 260, 150, 75);
    var menu = document.getElementById("menuButton");
    ctx.drawImage(menu, 90, 340, 150, 75);

    home.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x;
        var y = event.y;

        x -= home.offsetLeft;
        y -= home.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            home.removeEventListener("click", tapped, false);
            game();
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            // alert("Restart game!");
            home.removeEventListener("click", tapped, false);
            newGame();
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
            // alert("go home");
            home.removeEventListener("click", tapped, false);
            backHome();
        }
    }
}


function newGame() {

    var startTime = 0;
    var elapsedTime = 0;
    var colorInventory = new Array(4);
    var tilesColored = 0;
    createTileArray(MAX_ROWS, MAX_COLS);
    initializeColorInventory();
    createFixedTiles();
    game();
    //gameResult();
}

function createTileArray(row, col) {
    tiles = new Array(row);
    for (var i = 0; i < row; i++) {
        tiles[i] = new Array(col);
        for (var j = 0; j< col; j++) {
            tiles[i][j] = {
                shape: TILE_SHAPE,
                color: -1,
                width: TILE_WIDTH - 2,
                height: TILE_HEIGHT - 2,
                x: TILE_WIDTH * j + OFFSET_LEFT + 1,
                y: TILE_HEIGHT * i + OFFSET_TOP + 1,
                fixed: false
            };
        }
    }
}

function initializeColorInventory() {
    colorInventory[0] = 7;
    colorInventory[1] = 6;
    colorInventory[2] = 6;
    colorInventory[3] = 6;
}

function createFixedTiles() {
    tiles[0][0].fixed = true;
    tiles[0][0].color = 0;
    colorInventory[0]--;
    tilesColored++;
    tiles[1][1].fixed = true;
    tiles[1][1].color = 1;
    colorInventory[1]--;
    tilesColored++;
    tiles[2][2].fixed = true;
    tiles[2][2].color = 2;
    colorInventory[2]--;
    tilesColored++;
    tiles[3][3].fixed = true;
    tiles[3][3].color = 3;
    colorInventory[3]--;
    tilesColored++;
    tiles[4][4].fixed = true;
    tiles[4][4].color = 0;
    colorInventory[0]--;
    tilesColored++;
}

function game() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    //ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, c.width, c.height);

    //createTileArray(MAX_ROWS, MAX_COLS);
    drawTiles();
    drawColorInventory();
    fillFixedTile();
    drawRemainingColors();
    createPauseBtn();
    createTimer();
    resumeTimer();
    //var gameTimer = setInterval(updateTimer, 100);
    c.addEventListener("mouseup", doMouseUp, false);

    function drawTiles() {
        for (var i = 0; i < tiles.length; i++) {
            for (var j = 0; j < tiles[0].length; j++) {
                var tileColor;
                if (tiles[i][j].color === -1) {
                    tileColor = DEFAULT_COLOR;
                }
                else {
                    tileColor = palette[tiles[i][j].color];
                }
                ctx.fillStyle = tileColor;
                ctx.beginPath();
                ctx.rect(tiles[i][j].x, tiles[i][j].y, tiles[i][j].width, tiles[i][j].height);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    function doMouseUp(event) {
        var canvas_x = event.pageX - c.offsetLeft;
        var canvas_y = event.pageY - c.offsetTop;
        if (canvas_x > OFFSET_LEFT && canvas_x < OFFSET_LEFT + BOARD_WIDTH && canvas_y > OFFSET_TOP && canvas_y < OFFSET_TOP + BOARD_HEIGHT) {
            var tile = getTile(canvas_x, canvas_y);
            if (tile.fixed === false) {
                fillTile(tile);
            }
        } else if (canvas_x > 240 && canvas_x < 300 && canvas_y > 20 && canvas_y < 80) {
            c.removeEventListener("mouseup", doMouseUp, false);
            clearInterval(gameTimer);
            paused();
        }

        if (tilesColored == MAX_TILES) {
            if (validateGame() === true) {
                c.removeEventListener("mouseup", doMouseUp, false);
                clearInterval(gameTimer);
                gameResult();
            }
        }
    }

    function getTile(coordX, coordY) {
        for (var i = 0; i < tiles.length; i++) {
            for (var j = 0; j < tiles[0].length; j++) {
                if (tiles[i][j].x < coordX && tiles[i][j].x + tiles[i][j].width > coordX) {
                    if (tiles[i][j].y < coordY && tiles[i][j].y + tiles[i][j].height > coordY) {
                        //							alert(tiles[i][j].x + " < " + coordX + " < " + (tiles[i][j].x + tiles[i][j].width) + "\n"
                        //								+ tiles[i][j].y + " < " + coordY + " < " + (tiles[i][j].y + tiles[i][j].height) + "\n"
                        //								+ "It's tiles[" + j + "][" + i + "]");
                        return tiles[i][j];
                    }
                }
            }
        }
    }

    function fillTile(tile) {
        var newColor = getNextColor(tile.color);
        // Check if newColor is usable -- is there any newColor left in the color inventory
        while (colorInventory[newColor] === 0) {
            newColor = getNextColor(newColor);
        }
        if (newColor === -1) {
            ctx.fillStyle = DEFAULT_COLOR;
        } else {
            ctx.fillStyle = palette[newColor];
        }
        ctx.clearRect(tile.x, tile.y, tile.width, tile.height);
        ctx.beginPath();
        ctx.rect(tile.x, tile.y, tile.width, tile.height);
        ctx.fill();
        if (tile.color == -1) {
            // no color -> a color
            tilesColored++;
            colorInventory[newColor]--;
        } else if (newColor == -1) {
            // a color -> no color
            tilesColored--;
            colorInventory[tile.color]++;
        } else {
            // this color -> new color
            colorInventory[tile.color]++;
            colorInventory[newColor]--;
        }
        updateRemainingColors();
        tile.color = newColor;
    }

    function getNextColor(colorIndex) {
        if (colorIndex < palette.length - 1) {
            return colorIndex + 1;
        }
        else {
            return -1;
        }
    }

    function validateGame() {
        switch (TILE_SHAPE) {
            case "square":
                return validateSquareGame();
            case "rhombus":
            case "hexagon":
            default:
                return false;
        }
    }

    function validateSquareGame() {
        for (var i = 0; i < MAX_TILES; i++) {
            var row = ~~(i/MAX_ROWS);
            var col = i%MAX_COLS;
            if (row - 1 >= 0) {
                if (tiles[row][col].color === tiles[row - 1][col].color) {
                    //						alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row-1) + "][" + col + "] (" + tiles[row-1][col].color + ")");
                    return false;
                }
            }
            if (col - 1 >= 0) {
                if (tiles[row][col].color === tiles[row][col - 1].color) {
                    //						alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col-1) + "] (" + tiles[row][col-1].color + ")");
                    return false;
                }
            }
            if (row + 1 < MAX_ROWS) {
                if (tiles[row][col].color === tiles[row + 1][col].color) {
                    //						alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row+1) + "][" + col + "] (" + tiles[row+1][col].color + ")");
                    return false;
                }
            }
            if (col + 1 < MAX_COLS) {
                if (tiles[row][col].color === tiles[row][col + 1].color) {
                    //						alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col+1) + "] (" + tiles[row][col+1].color + ")");
                    return false;
                }
            }
        }
        return true;
    }

    function fillFixedTile() {
        for (var i = 0; i < MAX_ROWS; i++) {
            for (var j = 0; j < MAX_COLS; j++) {
                if (tiles[i][j].fixed === true) {
                    ctx.fillStyle = palette[tiles[i][j].color];
                    ctx.strokeStyle = "#000000";
                    ctx.clearRect(tiles[i][j].x, tiles[i][j].y, tiles[i][j].width, tiles[i][j].height);

                    // // fill color
                    ctx.beginPath();
                    ctx.rect(tiles[i][j].x, tiles[i][j].y, tiles[i][j].width, tiles[i][j].height);
                    ctx.fill();
                    //ctx.stroke();
                    ctx.closePath();

                    // draw X on fixed tile
                    ctx.beginPath();
                    ctx.moveTo(tiles[i][j].x, tiles[i][j].y);
                    ctx.lineTo(tiles[i][j].x+tiles[i][j].width, tiles[i][j].y+tiles[i][j].height);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.beginPath();
                    ctx.moveTo(tiles[i][j].x+tiles[i][j].width, tiles[i][j].y);
                    ctx.lineTo(tiles[i][j].x, tiles[i][j].y+tiles[i][j].height);
                    ctx.stroke();
                    ctx.closePath();


                }
            }
        }
    }



    function drawColorInventory() {
        //alert(c.height);
        var colorInvX = OFFSET_LEFT;
        // OFFSET_TOP + BOARD_HEIGHT + OFFSET_LEFT
        var colorInvY = 400;
        var colorInvWidth = BOARD_WIDTH;
        // c.height - OFFSET_TOP - BOARD_HEIGHT - OFFSET_LEFT - OFFSET_LEFT
        var colorInvHeight = 60;

        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.rect(colorInvX, colorInvY, colorInvWidth, colorInvHeight);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = palette[0];
        ctx.fillRect(30, 410, 30, 40);
        ctx.fillStyle = palette[1];
        ctx.fillRect(100, 410, 30, 40);
        ctx.fillStyle = palette[2];
        ctx.fillRect(170, 410, 30, 40);
        ctx.fillStyle = palette[3];
        ctx.fillRect(240, 410, 30, 40);
    }

    function drawRemainingColors() {
        ctx.font = "15px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText(colorInventory[0], 65, 435);
        ctx.fillText(colorInventory[1], 135, 435);
        ctx.fillText(colorInventory[2], 205, 435);
        ctx.fillText(colorInventory[3], 275, 435);
    }

    function updateRemainingColors() {
        ctx.fillStyle = "#FFFFFF";
        ctx.clearRect(65, 410, 20, 40);
        ctx.fillRect(65, 410, 20, 40);
        ctx.clearRect(135, 410, 20, 40);
        ctx.fillRect(135, 410, 20, 40);
        ctx.clearRect(205, 410, 20, 40);
        ctx.fillRect(205, 410, 20, 40);
        ctx.clearRect(275, 410, 20, 40);
        ctx.fillRect(275, 410, 20, 40);
        drawRemainingColors();
    }

    function createTimer() {
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(20, 20, 200, 60);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        startTime = new Date().getTime();
    }

    function updateTimer() {
        ctx.clearRect(21, 21, 198, 58);
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.fillRect(21, 21, 198, 58);

        ctx.fillStyle = "#000000";
        ctx.font = "30px monospace";
        elapsedTime = parseInt((new Date().getTime()-startTime) / 100, 10);
        var timeString = formatTime(elapsedTime);
        ctx.beginPath();
        ctx.fillText(timeString, 30, 60);
    }

    function resumeTimer() {
        startTime = new Date().getTime() - new Date(elapsedTime * 100);
        gameTimer = setInterval(updateTimer, 100);
    }

    function createPauseBtn() {
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(240, 20, 60, 60);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.fillText("Pause", 250, 55);
    }
}

function gameResult() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    //ctx.shadowColor = "transparent";

    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#000000";
    ctx.font = "30px monospace";

    ctx.drawImage(document.getElementById("resultTitle"), 11, 20);
    ctx.drawImage(document.getElementById("restart"), 85, 300, 150, 75);
    ctx.drawImage(document.getElementById("menu"), 85, 385, 150, 75);

    var timeString = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText("Game Over", 85, 200);

    ctx.beginPath();
    ctx.fillText("Your Time: " + timeString, 10, 250);
    c.addEventListener("mouseup", gameResultMouseUp, false);

    function gameResultMouseUp(event) {
        var canvas_x = event.pageX - c.offsetLeft;
        var canvas_y = event.pageY - c.offsetTop;
        if (canvas_x > 85 && canvas_x < 235 && canvas_y > 300 && canvas_y < 375) {
            c.removeEventListener("mouseup", gameResultMouseUp, false);
            newGame();
        } else if (canvas_x > 85 && canvas_x < 235 && canvas_y > 385 && canvas_y < 460) {
            c.removeEventListener("mouseup", gameResultMouseUp, false);
            backHome();
        }
    }
}