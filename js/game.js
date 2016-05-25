function newGame() {
    initializePositions();
    initializeGame();
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
    document.getElementById("addName").style.display = "none"; // leaderboard textbox disappears
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
            initializeSquareArray();
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
            tile_width = board_width / (max_col + 0.5);
            tile_height = board_height / (1 + 0.5 * (max_row - 1));
            uw = tile_width / 2;
            uh = tile_height / 2;
            initializeDiamondArray();
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
            tile_width = board_width / (max_col + 0.5);
            tile_height = board_height / ( 1 + 0.75 * (max_row - 1));
            uw = tile_width / 2;
            uh = tile_height / 4;
            initializeHexagonArray();
            break;
    }
    initializeColorInventory();
    initializeFixedTiles();
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

function game() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 1;
    // ctx.shadowColor = "transparent";
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // drawComponent();
    drawTiles();
    drawColorInventory();
    drawFixedTile();
    drawRemainingColors();
    createPauseBtn();
    createTimer();
    resumeTimer();
    canvas.addEventListener("mouseup", clickGame, false);
}

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
                sfx3.play();
                fillTile(tile);
            }
    } else if (canvas_x > pause_x && canvas_x < pause_x + pause_width && canvas_y > pause_y && canvas_y < pause_y + pause_height) {
        // clicks pause button
        canvas.removeEventListener("mouseup", clickGame, false);
        clearInterval(gameTimer);
        sfx2.play();
        paused();
    }

    // validates when all tiles are colored
    if (tilesColored == max_tile) {
        if (validateGame() === true) {
            canvas.removeEventListener("mouseup", clickGame, false);
            clearInterval(gameTimer);
            // THIS IS WHERE I SHOULD PUT IN COUNTER FOR UNLOCKABLE -- DAN
            if (gamesSqu >= 1){
                
            } else if (gamesDia >= 1) {
                
            } else if (gamesHex >= 1) {
                
            }
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
                        // draw | on fixed tile
                        ctx.beginPath();
                        ctx.moveTo(tiles[i][j].coordinates.p1.x, tiles[i][j].coordinates.p1.y);
                        ctx.lineTo(tiles[i][j].coordinates.p3.x, tiles[i][j].coordinates.p3.y);
                        ctx.stroke();
                        ctx.closePath();
                        // draw - on fixed tile
                        ctx.beginPath();
                        ctx.moveTo(tiles[i][j].coordinates.p2.x, tiles[i][j].coordinates.p2.y);
                        ctx.lineTo(tiles[i][j].coordinates.p4.x, tiles[i][j].coordinates.p4.y);
                        ctx.stroke();
                        ctx.closePath();
                        break;
                    case 2:
                        // draw \ on fixed tile
                        ctx.beginPath();
                        ctx.moveTo(tiles[i][j].coordinates.p6.x + 11, tiles[i][j].coordinates.p6.y - 7);
                        ctx.lineTo(tiles[i][j].coordinates.p3.x - 11, tiles[i][j].coordinates.p3.y + 7);
                        ctx.stroke();
                        ctx.closePath();
                        // draw / on fixed tile
                        ctx.beginPath();
                        ctx.moveTo(tiles[i][j].coordinates.p2.x - 11, tiles[i][j].coordinates.p2.y - 7);
                        ctx.lineTo(tiles[i][j].coordinates.p5.x + 11, tiles[i][j].coordinates.p5.y + 7);
                        ctx.stroke();
                        ctx.closePath();
                        break;
                }
            }
        }
    }
}

