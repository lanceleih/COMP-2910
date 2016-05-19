// old global variables -- debricated
var MAX_TILES;
var MAX_ROWS;
var MAX_COLS;
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

// new global variables
var shape;
var difficulty;
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
var palette = ["#A1C4A6", "#FBD78D", "#F5634A", "#953B32"];
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

/*The select shape page for the game*/
function selectShape() {

    ctx.clearRect(0, 0, 320, 480);

    var img = document.getElementById("shapeTitle");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("squareButton");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("diamondButton");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("hexButton");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        //alert(x + ',' + y);
        if (x > 20 && x < 145 && y > 180 && y < 280) {
            // square shape
            shape = 0;
            canvas.removeEventListener("click", getPosition, false);
            selectDifficulty();
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            // diamond shape
            shape = 1;
            canvas.removeEventListener("click", getPosition, false);
            selectDifficulty();
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            // hexagon shape
            shape = 2;
            canvas.removeEventListener("click", getPosition, false);
            selectDifficulty();
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            // back to home
            canvas.removeEventListener("click", getPosition, false);
            backHome();
        }
    }
}

/*The select difficulty page for the game*/
function selectDifficulty() {
    ctx.clearRect(0, 0, 320, 480);

    var img=document.getElementById("difficultyTitle");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("easyButton");
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("mediumButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("hardButton");
    ctx.drawImage(img,90,340, 150, 75);
    var img=document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;
        //alert(x + ',' + y);

        if(x > 90 && x < 240 && y > 180 && y < 255) {
            // easy difficulty
            difficulty = 0;
            canvas.removeEventListener("click", getPosition, false);
            newGame();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            // medium difficulty
            difficulty = 1;
            canvas.removeEventListener("click", getPosition, false);
            newGame();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            // hard difficulty
            difficulty = 2;
            canvas.removeEventListener("click", getPosition, false);
            newGame();
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            // back to select shape
            canvas.removeEventListener("click", getPosition, false);
            selectShape();
        }
    }
}

function newGame() {
    initializePositions();
    initializeGame();
    drawComponent();
    game();
}

function initializePositions() {
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
}

function initializeGame() {
    startTime = 0;
    elapsedTime = 0;
    tilesColored = 0;
    switch (shape) {
        case 0:
            switch (difficulty) {
                case 0:
                    max_row = 4;
                    max_col = 4;
                    break;
                case 1:
                    max_row = 5;
                    max_col = 5;
                    break;
                case 2:
                    max_row = 6;
                    max_col = 6;
                    break;
            }
            max_tile = max_row * max_col;
            tile_width = board_width / max_col;
            tile_height = board_height / max_row;
            initializeSquareArray(max_row, max_col);
            break;
        case 1:
            switch (difficulty) {
                case 0:
                    max_row = 4;
                    max_col = 4;
                    break;
                case 1:
                    max_row = 5;
                    max_col = 5;
                    break;
                case 2:
                    max_row = 6;
                    max_col = 6;
                    break;
            }
            max_tile = max_row * max_col;
            tile_width = board_width / max_col;
            tile_height = board_height / max_row;
            initializeSquareArray(max_row, max_col);
            //initializeDiamondArray(max_row, max_col);
            break;
        case 2:
            switch (difficulty) {
                case 0:
                    max_row = 4;
                    max_col = 4;
                    break;
                case 1:
                    max_row = 5;
                    max_col = 5;
                    break;
                case 2:
                    max_row = 6;
                    max_col = 6;
                    break;
            }
            max_tile = max_row * max_col;
            tile_width = board_width / (max_row + 0.5);
            tile_height = board_height / ( 1 + (0.75) * (max_col - 1));
            uw = tile_width / 2;
            uh = tile_height / 4;
            initializeHexagonArray(max_row, max_col);
            break;
    }
    initializeColorInventory();
    initializeFixedTiles();
}

function initializeSquareArray(row, col) {
    tiles = new Array(row);
    for (var i = 0; i < row; i++) {
        tiles[i] = new Array(col);
        for (var j = 0; j < col; j++) {
            tiles[i][j] = {
                color: -1,
                width: tile_width,
                height: tile_height,
                x: board_x + tile_width * j,
                y: board_y + tile_height * i,
                side: 4,
                coordinates: {
                    p1: {x: board_x + tile_width * j, y: board_y + tile_height * i},
                    p2: {x: board_x + tile_width * (j+1), y: board_y + tile_height * i},
                    p3: {x: board_x + tile_width * (j+1), y: board_y + tile_height * (i+1)},
                    p4: {x: board_x + tile_width * j, y: board_y + tile_height * (i+1)}
                },
                fixed: false
            };
        }
    }
}

function initializeHexagonArray(row, col) {
    tiles = new Array(max_row);
    for (var i = 0; i < max_row; i++) {
        tiles[i] = new Array(max_col);
        for (var j = 0; j < max_col; j++) {
            var modx=0;
            if (i % 2 == 1)
                modx=uw;
            tiles[i][j] = {
                color: -1,
                side: 6,
                coordinates: {
                    p1: {x: board_x + uw + tile_width*j + modx, y: board_y + 3*uh*i},
                    p2: {x: board_x + tile_width*(j+1) + modx, y: board_y + uh + 3*uh*i},
                    p3: {x: board_x + tile_width*(j+1) + modx, y: board_y + 3*uh*(i+1)},
                    p4: {x: board_x + uw + tile_width*j + modx, y: board_y + tile_height + 3*uh*i},
                    p5: {x: board_x + tile_width*j + modx, y: board_y + 3*uh*(i+1)},
                    p6: {x: board_x + tile_width*j + modx, y: board_y + uh + 3*uh*i}
                },
                fixed: false
            };
        }
    }
}

function initializeColorInventory() {
    if (max_tile == 16) {
        colorInventory[0] = 4;
        colorInventory[1] = 4;
        colorInventory[2] = 4;
        colorInventory[3] = 4;
    }
    else if (max_tile == 25) {
        colorInventory[0] = 7;
        colorInventory[1] = 6;
        colorInventory[2] = 6;
        colorInventory[3] = 6;
    }
    else if (max_tile == 36) {
        colorInventory[0] = 10;
        colorInventory[1] = 9;
        colorInventory[2] = 10;
        colorInventory[3] = 7;
    }
    else if (max_tile == 32) {
        colorInventory[0] = 8;
        colorInventory[1] = 8;
        colorInventory[2] = 8;
        colorInventory[3] = 8;
    }
    else if (max_tile == 24) {
        colorInventory[0] = 6;
        colorInventory[1] = 6;
        colorInventory[2] = 6;
        colorInventory[3] = 6;
    }
    else {
        colorInventory[0] = 7;
        colorInventory[1] = 6;
        colorInventory[2] = 6;
        colorInventory[3] = 6;
    }
}

function initializeFixedTiles() {
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
    if (difficulty > 0) {
        tiles[4][4].fixed = true;
        tiles[4][4].color = 0;
        colorInventory[0]--;
        tilesColored++;
    }
    if (difficulty > 1) {
        tiles[5][5].fixed = true;
        tiles[5][5].color = 1;
        colorInventory[1]--;
        tilesColored++;
    }

}

function drawComponent() {
    ctx.strokeStyle = "#000000";
    // timer border
    ctx.strokeRect(timer_x, timer_y, timer_width, timer_height);
    // pause button border
    ctx.strokeRect(pause_x, pause_y, pause_width, pause_height);
    // game board border
    ctx.strokeRect(board_x, board_y , board_width, board_height);
    // color inventory border
    ctx.strokeRect(inventory_x, inventory_y, inventory_width, inventory_height);
}

function game() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 1;
    // ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTiles();
    drawColorInventory();
    drawFixedTile();
    drawRemainingColors();
    createPauseBtn();
    createTimer();
    resumeTimer();
    canvas.addEventListener("click", clickGame, false);

    function drawTiles() {
        ctx.strokeStyle = "#000000";
        for (var i = 0; i < max_row; i++) {
            for (var j = 0; j < max_col; j++) {
                var tileColor;
                if (tiles[i][j].color === -1) {
                    tileColor = default_color;
                }
                else {
                    tileColor = palette[tiles[i][j].color];
                }
                ctx.fillStyle = tileColor;
                ctx.beginPath();
                ctx.moveTo(tiles[i][j].coordinates.p1.x, tiles[i][j].coordinates.p1.y);
                ctx.lineTo(tiles[i][j].coordinates.p2.x, tiles[i][j].coordinates.p2.y);
                ctx.lineTo(tiles[i][j].coordinates.p3.x, tiles[i][j].coordinates.p3.y);
                ctx.lineTo(tiles[i][j].coordinates.p4.x, tiles[i][j].coordinates.p4.y);
                if (tiles[i][j].side > 4) // pentagon + hexagon
                    ctx.lineTo(tiles[i][j].coordinates.p5.x, tiles[i][j].coordinates.p5.y);
                if (tiles[i][j].side > 5) // hexagon
                    ctx.lineTo(tiles[i][j].coordinates.p6.x, tiles[i][j].coordinates.p6.y);
                ctx.lineTo(tiles[i][j].coordinates.p1.x, tiles[i][j].coordinates.p1.y);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                // tile number for square
                // ctx.strokeText(i+", "+j, tiles[i][j].coordinates.p1.x + tile_width / 2, tiles[i][j].coordinates.p1.y + tile_height / 2 );
                // tile number for hexagon
                // ctx.strokeText(i+", "+j, tiles[i][j].coordinates.p1.x-8, tiles[i][j].coordinates.p1.y + tile_height / 2 );
            }
        }
    }

    function clickGame(event) {
        var canvas_x = event.pageX - canvas.offsetLeft;
        var canvas_y = event.pageY - canvas.offsetTop;
        // clicks game board
        if (canvas_x > board_x && canvas_x < board_x + board_width && canvas_y > board_y && canvas_y < board_y + board_height) {
            var tile = getTile(canvas_x, canvas_y);
            if (tile != null)
                if (tile.fixed === false) {
                    fillTile(tile);
                }
        } else if (canvas_x > pause_x && canvas_x < pause_x + pause_width && canvas_y > pause_y && canvas_y < pause_y + pause_height) {
            // clicks pause button
            canvas.removeEventListener("click", clickGame, false);
            clearInterval(gameTimer);
            paused();
        }

        // validates when all tiles are colored
        if (tilesColored == max_tile) {
            if (validateGame() === true) {
                canvas.removeEventListener("click", clickGame, false);
                clearInterval(gameTimer);
                gameResult();
            }
        }
    }

    function getTile(coordX, coordY) {
        switch (shape) {
            case 0:
                return getSquareTile(coordX, coordY);
                break;
            case 1:
                return getDiamondTile(coordX, coordY);
                break;
            case 2:
                return getHexagonTile(coordX, coordY);
                break;
        }
    }

    function getSquareTile(coordX, coordY) {
        for (var i = 0; i < max_row; i++) {
            for (var j = 0; j < max_col; j++) {
                if (tiles[i][j].coordinates.p1.x < coordX && tiles[i][j].coordinates.p2.x > coordX) {
                    if (tiles[i][j].coordinates.p1.y < coordY && tiles[i][j].coordinates.p3.y > coordY) {
                        return tiles[i][j];
                    }
                }
            }
        }
    }

    function getDiamondTile(coordX, coordY) {
        return tiles[0][0];
    }

    function getHexagonTile(coordX, coordY) {
        for (var i = 0; i < max_row; i++) {
            for (var j = 0; j < max_col; j++) {
                // coordinates of the center of the hexagon
                var cx = tile_width / 2;
                var cy = tile_height / 2;
                // coordinates of p3 with respect to tile center - p3 because it's in quadrant IV, and x and y will always be positive
                var x1 = (tiles[i][j].coordinates.p3.x - tiles[i][j].coordinates.p5.x) - cx;
                var y1 = (tiles[i][j].coordinates.p3.y - tiles[i][j].coordinates.p1.y) - cy;
                // coordinates of the click - modified
                modx = 0;
                if (i % 2 == 1)
                    modx =  uw;
                var x2 = coordX - board_x - tile_width * j - modx;
                var y2 = coordY - board_y - uh * 3 * i;
                // if mouseclick falls within the square that contains the hexagon
                if (x2 > 0 && x2 < tile_width && y2 > 0 && y2 < tile_height) {
                    // coordinates of the click with respect to the center
                    var x3 = Math.abs(x2 - cx);
                    var y3 = Math.abs(y2 - cy);
                    // Now I can use this formula to figure out if click is within the hexagon using the following formula
                    // courtesy of http://www.playchilla.com/how-to-check-if-a-point-is-inside-a-hexagon
                    var d = 2 * x1 * y1 - y1 * x3 - x1 * y3;
                    if (d > 0) {
                        //alert("You clicked [" + i + "][" + j + "]");
                        return tiles[i][j];
                    }
                }
            }
        }
        return null;
    }

    function fillTile(tile) {
        var newColor = getNextColor(tile.color);
        // Check if newColor is usable -- is there any newColor left in the color inventory
        while (colorInventory[newColor] === 0) {
            newColor = getNextColor(newColor);
        }
        if (newColor === -1) {
            ctx.fillStyle = default_color;
        } else {
            ctx.fillStyle = palette[newColor];
        }
        //ctx.clearRect(tile.x, tile.y, tile.width, tile.height);
        ctx.beginPath();
        // ctx.rect(tile.x, tile.y, tile.width, tile.height);
        ctx.moveTo(tile.coordinates.p1.x, tile.coordinates.p1.y);
        ctx.lineTo(tile.coordinates.p2.x, tile.coordinates.p2.y);
        ctx.lineTo(tile.coordinates.p3.x, tile.coordinates.p3.y);
        ctx.lineTo(tile.coordinates.p4.x, tile.coordinates.p4.y);
        if (tile.side > 4) // pentagon + hexagon
            ctx.lineTo(tile.coordinates.p5.x, tile.coordinates.p5.y);
        if (tile.side > 5) // hexagon
            ctx.lineTo(tile.coordinates.p6.x, tile.coordinates.p6.y);
        ctx.lineTo(tile.coordinates.p1.x, tile.coordinates.p1.y);
        ctx.fill();
        ctx.stroke();

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
        switch (shape) {
            case 0:
                return validateSquareGame();
                break;
            case 1:
                return false;
                break;
            case 2:
                return validateHexagonGame();
                break;
            default:
                return false;
                break;
        }
    }

    function validateSquareGame() {
        for (var i = 0; i < max_tile; i++) {
            var row = ~~(i/max_row);
            var col = i%max_col;
            // -1, 0
            if (row - 1 >= 0) {
                if (tiles[row][col].color === tiles[row - 1][col].color) {
                    //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row-1) + "][" + col + "] (" + tiles[row-1][col].color + ")");
                    return false;
                }
            }
            // 0, -1
            if (col - 1 >= 0) {
                if (tiles[row][col].color === tiles[row][col - 1].color) {
                    //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col-1) + "] (" + tiles[row][col-1].color + ")");
                    return false;
                }
            }
            // +1, 0
            if (row + 1 < max_row) {
                if (tiles[row][col].color === tiles[row + 1][col].color) {
                    //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row+1) + "][" + col + "] (" + tiles[row+1][col].color + ")");
                    return false;
                }
            }
            // 0, +1
            if (col + 1 < max_col) {
                if (tiles[row][col].color === tiles[row][col + 1].color) {
                    //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col+1) + "] (" + tiles[row][col+1].color + ")");
                    return false;
                }
            }
        }
        return true;
    }

    function validateHexagonGame() {
        for (var i = 0; i < max_row; i++) {
            for (var j =0; j < max_col; j++) {
                // if even row
                if (i % 2 == 1) {
                    // -1, +1
                    if (i - 1 >= 0 && j + 1 < max_col) {
                        if (tiles[i][j].color === tiles[i - 1][j + 1].color) {
                            // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + (j+1) + "] (" + tiles[i-1][j+1].color + ")");
                            return false;
                        }
                    }
                    // +1, +1
                    if (i + 1 < max_row && j + 1 < max_col) {
                        if (tiles[i][j].color === tiles[i + 1][j + 1].color) {
                            // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + (j+1) + "] (" + tiles[i+1][j+1].color + ")");
                            return false;
                        }
                    }
                }
                else {
                    // -1, -1
                    if (i - 1 >= 0 && j - 1 >= 0) {
                        if (tiles[i][j].color === tiles[i - 1][j - 1].color) {
                            // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + (j-1) + "] (" + tiles[i-1][j-1].color + ")");
                            return false;
                        }
                    }
                    // +1, -1
                    if (i + 1 < max_row && j - 1 >= 0) {
                        if (tiles[i][j].color === tiles[i + 1][j - 1].color) {
                            // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + (j-1) + "] (" + tiles[i+1][j-1].color + ")");
                            return false;
                        }
                    }
                }
                // -1, 0
                if (i - 1 >= 0) {
                    if (tiles[i][j].color === tiles[i - 1][j].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + j + "] (" + tiles[i-1][j].color + ")");
                        return false;
                    }
                }
                // +1, 0
                if (i + 1 < max_row) {
                    if (tiles[i][j].color === tiles[i + 1][j].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + j + "] (" + tiles[i+1][j].color + ")");
                        return false;
                    }
                }
                // 0, -1
                if (j - 1 >= 0) {
                    if (tiles[i][j].color === tiles[i][j - 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + i + "][" + (j-1) + "] (" + tiles[i][j-1].color + ")");
                        return false;
                    }
                }
                // 0, +1
                if (j + 1 < max_col) {
                    if (tiles[i][j].color === tiles[i][j + 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + i + "][" + (j+1) + "] (" + tiles[i][j+1].color + ")");
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function drawFixedTile() {
        for (var i = 0; i < max_row; i++) {
            for (var j = 0; j < max_col; j++) {
                if (tiles[i][j].fixed === true) {
                    ctx.strokeStyle = "#000000";
                    switch (shape) {
                        case 0:
                            // draw \ on fixed tile
                            ctx.beginPath();
                            ctx.moveTo(tiles[i][j].coordinates.p1.x, tiles[i][j].coordinates.p1.y);
                            ctx.lineTo(tiles[i][j].coordinates.p3.x, tiles[i][j].coordinates.p3.y);
                            ctx.stroke();
                            ctx.closePath();
                            // draw / on fixed tile
                            ctx.beginPath();
                            ctx.moveTo(tiles[i][j].coordinates.p2.x, tiles[i][j].coordinates.p2.y);
                            ctx.lineTo(tiles[i][j].coordinates.p4.x, tiles[i][j].coordinates.p4.y);
                            ctx.stroke();
                            ctx.closePath();
                            break;
                        case 1:
                            break;
                        case 2:
                            // draw \ on fixed tile
                            ctx.beginPath();
                            ctx.moveTo(tiles[i][j].coordinates.p6.x+11, tiles[i][j].coordinates.p6.y-7);
                            ctx.lineTo(tiles[i][j].coordinates.p3.x-11, tiles[i][j].coordinates.p3.y+7);
                            ctx.stroke();
                            ctx.closePath();
                            // draw / on fixed tile
                            ctx.beginPath();
                            ctx.moveTo(tiles[i][j].coordinates.p2.x-11, tiles[i][j].coordinates.p2.y-7);
                            ctx.lineTo(tiles[i][j].coordinates.p5.x+11, tiles[i][j].coordinates.p5.y+7);
                            ctx.stroke();
                            ctx.closePath();
                            break;
                    }
                }
            }
        }
    }

    function drawColorInventory() {
        //draw the inventory
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.rect(inventory_x, inventory_y, inventory_width, inventory_height);
        // ctx.stroke();
        ctx.fill();
        ctx.closePath();

        // draw the palette colors
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
        // removes previous numbers
        ctx.fillStyle = "#FFFFFF";
        //ctx.clearRect(65, 410, 20, 40);
        ctx.fillRect(65, 410, 20, 40);
        //ctx.clearRect(135, 410, 20, 40);
        ctx.fillRect(135, 410, 20, 40);
        //ctx.clearRect(205, 410, 20, 40);
        ctx.fillRect(205, 410, 20, 40);
        //ctx.clearRect(275, 410, 20, 40);
        ctx.fillRect(275, 410, 20, 40);
        drawRemainingColors();
    }

    function createTimer() {
        ctx.strokeStyle = "#000000";
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.rect(20, 20, 200, 60);
        //ctx.stroke();
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
        //ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.fillText("Pause", 250, 55);
    }
}

/* Javascript for the Paused Page */
function paused() {

    ctx.clearRect(0, 0, 320, 480);
    var pausedTitle = document.getElementById("pausedTitle");
    ctx.drawImage(pausedTitle, 12, 40, 300, 132);
    var resume = document.getElementById("resumeButton");
    ctx.drawImage(resume, 90, 180, 150, 75);
    var restart = document.getElementById("restartButton");
    ctx.drawImage(restart, 90, 260, 150, 75);
    var menu = document.getElementById("menuButton");
    ctx.drawImage(menu, 90, 340, 150, 75);

    canvas.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            canvas.removeEventListener("click", tapped, false);
            game();
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            // alert("Restart game!");
            canvas.removeEventListener("click", tapped, false);
            newGame();
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
            // alert("go home");
            canvas.removeEventListener("click", tapped, false);
            backHome();
        }
    }
}

/* Javascript for the Game Result Page*/
function gameResult() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    //ctx.shadowColor = "transparent";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.font = "30px monospace";

    ctx.drawImage(document.getElementById("resultTitle"), 11, 20);
    ctx.drawImage(document.getElementById("restartButton"), 85, 300, 150, 75);
    ctx.drawImage(document.getElementById("menuButton"), 85, 385, 150, 75);

    var timeString = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText("Congratulations", 35, 200);

    ctx.beginPath();
    ctx.fillText("Your Time: " + timeString, 10, 250);
    canvas.addEventListener("mouseup", gameResultMouseUp, false);

    function gameResultMouseUp(event) {
        var canvas_x = event.pageX - canvas.offsetLeft;
        var canvas_y = event.pageY - canvas.offsetTop;
        if (canvas_x > 85 && canvas_x < 235 && canvas_y > 300 && canvas_y < 375) {
            canvas.removeEventListener("mouseup", gameResultMouseUp, false);
            newGame();
        } else if (canvas_x > 85 && canvas_x < 235 && canvas_y > 385 && canvas_y < 460) {
            canvas.removeEventListener("mouseup", gameResultMouseUp, false);
            backHome();
        }
    }
}