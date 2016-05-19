function createSquareArray(row, col) {
    TILE_WIDTH = BOARD_WIDTH / row;
    TILE_HEIGHT = BOARD_HEIGHT / col;
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
function createFixedEasySquare() {
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
}
function createFixedMediumSquare() {
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
function createFixedHardSquare() {
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
    tiles[5][5].fixed = true;
    tiles[5][5].color = 2;
    colorInventory[0]--;
    tilesColored++;
}
function initializeSquareEasyColorInventory() {
    colorInventory[0] = 5;
    colorInventory[1] = 3;
    colorInventory[2] = 3;
    colorInventory[3] = 5;
}
function initializeSquareMediumColorInventory() {
    colorInventory[0] = 7;
    colorInventory[1] = 6;
    colorInventory[2] = 6;
    colorInventory[3] = 6;
}
function initializeSquareHardColorInventory() {
    colorInventory[0] = 10;
    colorInventory[1] = 9;
    colorInventory[2] = 10;
    colorInventory[3] = 7;
}
function squareGame() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    //ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //createTileArray(maxRows, maxCols);
    drawTiles();
    drawColorInventory();
    fillFixedTile();
    drawRemainingColors();
    createPauseBtn();
    createTimer();
    resumeTimer();
    //var gameTimer = setInterval(updateTimer, 100);
    canvas.addEventListener("mouseup", doMouseUp, false);


    function doMouseUp(event) {
        var canvas_x = event.pageX - canvas.offsetLeft;
        var canvas_y = event.pageY - canvas.offsetTop;
        if (canvas_x > OFFSET_LEFT && canvas_x < OFFSET_LEFT + BOARD_WIDTH && canvas_y > OFFSET_TOP && canvas_y < OFFSET_TOP + BOARD_HEIGHT) {
            var tile = getTile(canvas_x, canvas_y);
            if (tile.fixed === false) {
                fillTile(tile);
            }
        } else if (canvas_x > 240 && canvas_x < 300 && canvas_y > 20 && canvas_y < 80) {
            canvas.removeEventListener("mouseup", doMouseUp, false);
            clearInterval(gameTimer);
            paused();
        }

        if (tilesColored == maxTiles) {
            if (validateGame() === true) {
                canvas.removeEventListener("mouseup", doMouseUp, false);
                clearInterval(gameTimer);
                gameResult();
            }
        }
    }
}
