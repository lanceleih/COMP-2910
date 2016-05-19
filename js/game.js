function calculateMaxTilesRowCol() {
    switch(shape) {
        case 0:
            if (difficulty == 0) {
                maxCols = 4;
                maxRows = 4;
                maxTiles = maxRows * maxCols;
            } else if (difficulty == 1) {
                maxCols = 5;
                maxRows = 5;
                maxTiles = maxRows * maxCols;
            } else {
                maxCols = 6;
                maxRows = 6;
                maxTiles = maxRows * maxCols;
            }
            break;
        case 1:
            if(difficulty == 0) {
                maxCols = 4;
                maxRows = 8;
                maxTiles = maxRows * maxCols;
            } else if(difficulty == 1) {
                maxCols = 5;
                maxRows = 9;
                maxTiles = maxRows * maxCols;
            } else {
                maxCols = 6;
                maxRows = 10;
                maxTiles = maxRows * maxCols;
            }
            break;
        case 2:
            if(difficulty == 0) {
                maxCols = 4;
                maxRows = 4;
                maxTiles = maxRows * maxCols;
            } else if(difficulty == 1) {
                maxCols = 5;
                maxRows = 5;
                maxTiles = maxRows * maxCols;
            } else {
                maxCols = 6;
                maxRows = 6;
                maxTiles = maxRows * maxCols;
            }
            break;
    }
}

function newGame() {
    startTime = 0;
    elapsedTime = 0;
    colorInventory = new Array(4);
    tilesColored = 0;
    calculateMaxTilesRowCol();
    startGame();
}

function startGame() {
    switch(shape) {
        case 0:
            if (difficulty == 0) {
                createSquareArray(maxRows, maxCols);
                initializeSquareEasyColorInventory();
                createFixedEasySquare();
                squareGame();
                //gameResult();
            } else if (difficulty == 1) {
                createSquareArray(maxRows, maxCols);
                initializeSquareMediumColorInventory();
                createFixedMediumSquare();
                squareGame();
                //gameResult();
            } else {
                createSquareArray(maxRows, maxCols);
                initializeSquareHardColorInventory();
                createFixedHardSquare();
                squareGame();
                //gameResult();
            }
            break;
        case 1:
            if(difficulty == 0) {
                createDiamondArray(maxRows, maxCols);
                initializeDiamondEasyColorInventory();
                createFixedEasyDiamond();
                diamondGame();
                //gameResult();
            } else if(difficulty == 1) {
                createDiamondArray(maxRows, maxCols);
                initializeDiamondMediumColorInventory();
                createFixedMediumDiamond();
                diamondGame();
                //gameResult();
            } else {
                createDiamondArray(maxRows, maxCols);
                initializeDiamondHardColorInventory();
                createFixedHardDiamond();
                diamondGame();
                //gameResult();
            }
            break;
        case 2:
            if(difficulty == 0) {
                
            } else if(difficulty == 1) {
                
            } else {
                
            }
            break;
    }
}
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

function getTile(coordX, coordY) {
    for (var i = 0; i < tiles.length; i++) {
        for (var j = 0; j < tiles[0].length; j++) {
            if (tiles[i][j].x < coordX && tiles[i][j].x + tiles[i][j].width > coordX) {
                if (tiles[i][j].y < coordY && tiles[i][j].y + tiles[i][j].height > coordY) {
                    //alert(tiles[i][j].x + " < " + coordX + " < " + (tiles[i][j].x + tiles[i][j].width) + "\n"
                    //+ tiles[i][j].y + " < " + coordY + " < " + (tiles[i][j].y + tiles[i][j].height) + "\n"
                    //+ "It's tiles[" + j + "][" + i + "]");
                    return tiles[i][j];
                }
            }
        }
    }
}
function getNextColor(colorIndex) {
    if (colorIndex < palette.length - 1) {
        return colorIndex + 1;
    }
    else {
        return -1;
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

function fillFixedTile() {
    for (var i = 0; i < maxRows; i++) {
        for (var j = 0; j < maxCols; j++) {
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
