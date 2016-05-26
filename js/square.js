function initializeSquareArray() {
    tiles = new Array(max_row);
    for (var i = 0; i < max_row; i++) {
        tiles[i] = new Array(max_col);
        for (var j = 0; j < max_col; j++) {
            tiles[i][j] = {
                color: -1,
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

function randomizeSquareTiles() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            var topNeighbor = (i - 1 >= 0) ? i - 1 : 0;
            var leftNeighbor = (j - 1 >= 0) ? j - 1 : 0;
            var topColor = tiles[topNeighbor][j].color;
            var leftColor = tiles[i][leftNeighbor].color;
            var currentColor = -1;
            // Get random color, if it's the same color with the top neighbor or left neighbor, do it again
            do {
                currentColor = Math.floor(Math.random() * 4);
            } while (currentColor === topColor || currentColor === leftColor);
            // After you confirmed this tile's color increment count in the color inventory
            tiles[i][j].color = currentColor;
            colorInventory[currentColor]++;
        }
    }
}

function drawFixedSquareTiles() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            if (tiles[i][j].fixed === true) {
                ctx.lineWidth=2;
                ctx.strokeStyle = "#000000";
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
                ctx.lineWidth=1;
            }
        }
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
