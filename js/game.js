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
    initializeColorInventory();
    initializeFixedTiles();
}

function initializeSquareArray() {
    tiles = new Array(max_row);
    for (var i = 0; i < max_row; i++) {
        tiles[i] = new Array(max_col);
        for (var j = 0; j < max_col; j++) {
            tiles[i][j] = {
                color: -1,
                /*width: tile_width,
                 height: tile_height,
                 x: board_x + tile_width * j,
                 y: board_y + tile_height * i,*/
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

function initializeDiamondArray() {
    tiles = new Array(max_row);
    for (var i = 0; i < max_row; i++) {
        tiles[i] = new Array(max_col);
        for (var j = 0; j < max_col; j++) {
            // if odd row
            var modx = 0;
            if (i % 2 == 1)
                modx = uw;
            tiles[i][j] = {
                color: -1,
                side: 4,
                coordinates: {
                    p1: {x: board_x + uw + tile_width*j + modx, y: board_y + uh*i},
                    p2: {x: board_x + tile_width*(j+1) + modx, y: board_y + uh*(i+1)},
                    p3: {x: board_x + uw + tile_width*j + modx, y: board_y + tile_height + uh*i},
                    p4: {x: board_x + tile_width*j + modx, y: board_y + uh*(i+1)}
                },
                fixed: false
            };
        }
    }
}

function initializeHexagonArray() {
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
        tiles[1][3].fixed = true;
        tiles[1][3].color = 0;
        colorInventory[0]--;
        tilesColored++;
    }
    if (difficulty > 1) {
        tiles[0][2].fixed = true;
        tiles[0][2].color = 1;
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

    // drawComponent();
    drawTiles();
    drawColorInventory();
    drawFixedTile();
    drawRemainingColors();
    createPauseBtn();
    createTimer();
    resumeTimer();
    canvas.addEventListener("mouseup", clickGame, false);

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
                    fillTile(tile);
                }
        } else if (canvas_x > pause_x && canvas_x < pause_x + pause_width && canvas_y > pause_y && canvas_y < pause_y + pause_height) {
            // clicks pause button
            canvas.removeEventListener("mouseup", clickGame, false);
            clearInterval(gameTimer);
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
        for (var i = 0; i < max_row; i++) {
            for (var j = 0; j < max_col; j++) {
                // coordinates of the center of the diamond
                var cx = tile_width / 2;
                var cy = tile_height / 2;
                var modx = 0;
                if (i % 2 == 1)
                    modx = uw;
                var x1 = coordX - board_x - tile_width * j - modx;
                var y1 = coordY - board_y - uh * i;
                if (x1 > 0 && x1 < tile_width && y1 > 0 && y1 < tile_height) {
                    // courtesy of http://stackoverflow.com/questions/27022064/detect-click-in-a-diamond
                    var dx = Math.abs(x1 - cx);
                    var dy = Math.abs(y1 - cy);
                    var d = dx / tile_width + dy / tile_height;
                    if (d <= 0.5) {
                        // alert("You clicked [" + i + "][" + j + "]");
                        return tiles[i][j];
                    }
                }
            }
        }
        return null;
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
                var modx = 0;
                if (i % 2 == 1)
                    modx = uw;
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
}