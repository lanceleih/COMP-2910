function newGame() {
    initializePositions();
    initializeGame();
    // insert countdown animation

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
                    max_col = 4;
                    break;
                case 2:
                    max_row = 6;
                    max_col = 4;
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

    do {
        initializeColorInventory();
        randomizeTiles();
    } while (!validateColorInventory());
    randomizeFixedTiles();
    cleanBoard();
}

function randomizeTiles() {
    switch (shape) {
        case 0: 
            randomizeSquareTiles();
            break;
        case 1:
            randomizeDiamondTiles();
            break;
        case 2:
            randomizeHexagonTiles();
            break;
        default:
            alert("Error: shape is not set");
            break;
    }
}

function randomizeFixedTiles() {
    var count = Math.floor(Math.pow(max_tile, (2/3)));
    while (count > 0) {
        var num = Math.floor(Math.random() * max_tile);
        var row = ~~(num / max_row);
        var col = num % max_col;
        if (tiles[row][col].fixed == false) {
            tiles[row][col].fixed = true;
            count--;
            colorInventory[tiles[row][col].color]--;
            tilesColored++;
        }
    }
}

function cleanBoard() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            if (tiles[i][j].fixed == false)
                tiles[i][j].color = -1;
        }
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
    drawFixedTiles();
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
            //var grd = ctx.createLinearGradient(0,0,tiles[i][j].coordinates.p3.x + tile_width * 2,0);
            var grd = ctx.createRadialGradient(tiles[i][j].coordinates.p2.x,tiles[i][j].coordinates.p2.y,0,tiles[i][j].coordinates.p2.x,tiles[i][j].coordinates.p2.y,tile_width/3);
            grd.addColorStop(1,tileColor);
            grd.addColorStop(0,"white");
            ctx.fillStyle = grd;
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

            // draw array index
            // ctx.font = "15px Arial";
            // ctx.fillStyle = "#000000";
            // ctx.beginPath();
            // ctx.fillText(i + ", " + j, tiles[i][j].coordinates.p1.x, tiles[i][j].coordinates.p1.y);
        }
    }
}

function clickGame(event) {
    setResponMargins();
    var canvas_x = event.pageX - canvas.offsetLeft;
    var canvas_y = event.pageY - canvas.offsetTop;
    var x = event.pageX;
    var y = event.pageY;
    // clicks game board
    if (canvas_x > board_x && canvas_x < board_x + board_width && canvas_y > board_y && canvas_y < board_y + board_height) {
        var tile = getTile(canvas_x, canvas_y);
        if (tile != null)
            if (tile.fixed === false) {
                sfx3.play();
                fillTile(tile);
            }
    } else if (x > pause_x * widthFactor + leftMargin && x < ((pause_x * widthFactor + leftMargin) + (pause_width * widthFactor)) && y > pause_y * heightFactor + topMargin && y < ((pause_y * heightFactor + topMargin) + (pause_height * heightFactor))) {
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
        var grd = ctx.createRadialGradient(tile.coordinates.p2.x,tile.coordinates.p2.y,0,tile.coordinates.p2.x,tile.coordinates.p2.y,tile_width/3);
        grd.addColorStop(1,palette[newColor]);
        grd.addColorStop(0,"white");
        ctx.fillStyle = grd;
        //ctx.fillStyle = palette[newColor];
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

function drawFixedTiles() {
    switch (shape) {
        case 0:
            drawFixedSquareTiles();
            break;
        case 1:
            drawFixedDiamondTiles();
            break;
        case 2:
            drawFixedHexagonTiles();
            break;
        default:
            alert("Error, shape is not set.");
    }
}

