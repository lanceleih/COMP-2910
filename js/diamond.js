function createDiamondArray(row, col) {
    TILE_WIDTH = (BOARD_WIDTH / col) * 0.9;
    TILE_HEIGHT = (BOARD_HEIGHT / row) * 1.9;
    tiles = new Array(row);
    for (var i = 0; i < row; i++) {
        tiles[i] = new Array(col);
        for (var j = 0; j< col; j++) {
            if (i % 2 == 0) {
                tiles[i][j] = {
                    shape: TILE_SHAPE,
                    color: -1,
                    width: TILE_WIDTH - 2,
                    height: TILE_HEIGHT - 2,
                    x: TILE_WIDTH * j + OFFSET_LEFT + 1,
                    y: TILE_HEIGHT * (i / 2) + OFFSET_TOP + 1,
                    fixed: false,
                    odd: false
                };
            } else {
                tiles[i][j] = {
                    shape: TILE_SHAPE,
                    color: -1,
                    width: TILE_WIDTH - 2,
                    height: TILE_HEIGHT - 2,
                    x: (TILE_WIDTH * j + OFFSET_LEFT + 1) + (TILE_WIDTH / 2) ,
                    y: (TILE_HEIGHT * (i / 2) + OFFSET_TOP + 1),
                    fixed: false,
                    odd: true
                };
            }
        }
    }
}
function createFixedEasyDiamond() {
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
function createFixedMediumDiamond() {
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
function createFixedHardDiamond() {
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
    tiles[5][5].color = 0;
    colorInventory[0]--;
    tilesColored++;
}
function initializeDiamondEasyColorInventory() {
    colorInventory[0] = 5;
    colorInventory[1] = 3;
    colorInventory[2] = 3;
    colorInventory[3] = 5;
}
function initializeDiamondMediumColorInventory() {
    colorInventory[0] = 7;
    colorInventory[1] = 6;
    colorInventory[2] = 6;
    colorInventory[3] = 6;
}
function initializeDiamondHardColorInventory() {
    colorInventory[0] = 10;
    colorInventory[1] = 9;
    colorInventory[2] = 10;
    colorInventory[3] = 7;
}
function diamondGame() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    //ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //createTileArray(maxRows, maxCols);
    drawDiamondTiles();
    drawColorInventory();
    fillDiamondFixedTile();
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
                fillDiamondTile(tile);
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
function drawDiamondTiles() {
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < tiles[0].length; j++) {
            var tileColor;
            if (tiles[i][j].color === -1) {
                tileColor = DEFAULT_COLOR;
            }
            else {
                tileColor = palette[tiles[i][j].color];
            }
                ctx.beginPath();
                /*Top*/
                ctx.moveTo((tiles[i][j].x + (tiles[i][j].width / 2)), (tiles[i][j].y));
                /*Right*/
                ctx.lineTo((tiles[i][j].x + (tiles[i][j].width)),(tiles[i][j].y + (tiles[i][j].height / 2)));
                /*Bottom*/
                ctx.lineTo((tiles[i][j].x + (tiles[i][j].width / 2)),(tiles[i][j].y + (tiles[i][j].height)));
                /*Left*/
                ctx.lineTo((tiles[i][j].x),(tiles[i][j].y + (tiles[i][j].height / 2)));
                ctx.closePath();
                ctx.fill();
        }
    }
}
function fillDiamondTile(tile) {
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
    /*Top*/
    ctx.moveTo((tile.x + (tile.width / 2)), (tile.y));
    /*Right*/
    ctx.lineTo((tile.x + (tile.width)),(tile.y + (tile.height / 2)));
    /*Bottom*/
    ctx.lineTo((tile.x + (tile.width / 2)),(tile.y + (tile.height)));
    /*Left*/
    ctx.lineTo((tile.x),(tile.y + (tile.height / 2)));
    ctx.closePath();
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

function fillDiamondFixedTile() {
    for (var i = 0; i < maxRows; i++) {
        for (var j = 0; j < maxCols; j++) {
            if (tiles[i][j].fixed === true) {
                ctx.fillStyle = palette[tiles[i][j].color];
                ctx.strokeStyle = "#000000";
                ctx.clearRect(tiles[i][j].x, tiles[i][j].y, tiles[i][j].width, tiles[i][j].height);

                // // fill color
                ctx.beginPath();
                /*Top*/
                ctx.moveTo((tiles[i][j].x + (tiles[i][j].width / 2)), (tiles[i][j].y));
                /*Right*/
                ctx.lineTo((tiles[i][j].x + (tiles[i][j].width)),(tiles[i][j].y + (tiles[i][j].height / 2)));
                /*Bottom*/
                ctx.lineTo((tiles[i][j].x + (tiles[i][j].width / 2)),(tiles[i][j].y + (tiles[i][j].height)));
                /*Left*/
                ctx.lineTo((tiles[i][j].x),(tiles[i][j].y + (tiles[i][j].height / 2)));
                ctx.closePath();
                ctx.fill();

                // draw X on fixed tile
                ctx.beginPath();
                /*Top*/
                ctx.moveTo((tiles[i][j].x + (tiles[i][j].width / 2)), (tiles[i][j].y));
                /*Bottom*/
                ctx.lineTo((tiles[i][j].x + (tiles[i][j].width / 2)),(tiles[i][j].y + (tiles[i][j].height)));
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                /*Right*/
                ctx.moveTo((tiles[i][j].x + (tiles[i][j].width)),(tiles[i][j].y + (tiles[i][j].height / 2)));
                /*Left*/
                ctx.lineTo((tiles[i][j].x),(tiles[i][j].y + (tiles[i][j].height / 2)));
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}
