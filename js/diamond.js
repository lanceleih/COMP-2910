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

function randomizeDiamondTiles() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            // first row tiles have not top left or top right neighbors
            if (i == 0) {
                currentColor = Math.floor(Math.random() * 4);
            }
            else {
                var row = (i - 1 >= 0) ? i - 1 : 0;
                var topLeftNeighbor;
                var topRightNeighbor;
                // if even row
                if (i % 2 == 1) {
                    // -1, 0
                    topLeftNeighbor = j;
                    //  -1, +1
                    topRightNeighbor = (j + 1 < max_col) ? j + 1 : j;
                }
                else {
                    // -1, -1
                    topLeftNeighbor = (j - 1 >= 0) ? j - 1 : 0;
                    // -1, 0
                    topRightNeighbor = j;
                }
                var topLeftColor = tiles[row][topLeftNeighbor].color;
                var topRightColor = tiles[row][topRightNeighbor].color;
                var currentColor = -1;
                // Get random color, if it's the same color with the top neighbor or left neighbor, do it again
                do {
                    currentColor = Math.floor(Math.random() * 4);
                } while (currentColor === topLeftColor || currentColor === topRightColor);
            }
            // After you confirmed this tile's color, increment count in the color inventory
            tiles[i][j].color = currentColor;
            colorInventory[currentColor]++;
        }
    }
}

function drawFixedDiamondTiles() {
    // drawing fixed diamond tiles uses the same code as drawing fixed square tiles
    drawFixedSquareTiles();
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
