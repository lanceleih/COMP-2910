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

function randomizeHexagonTiles() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            var row = (i - 1 >= 0) ? i - 1 : 0;
            // 0, -1
            var leftNeighbor = (j - 1 >= 0) ? j - 1 : 0;
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
            var leftColor = tiles[i][leftNeighbor].color;
            var currentColor = -1;
            // Get random color, if it's the same color with the top neighbor or left neighbor, do it again
            do {
                currentColor = Math.floor(Math.random() * 4);
            } while (currentColor === topLeftColor || currentColor === topRightColor || currentColor === leftColor);
            // After you confirmed this tile's color, increment count in the color inventory
            tiles[i][j].color = currentColor;
            colorInventory[currentColor]++;
        }
    }
}

function drawFixedHexagonTiles() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            if (tiles[i][j].fixed === true) {
                ctx.lineWidth=2;
                ctx.strokeStyle = "#000000";
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
                ctx.lineWidth=1;
            }
        }
    }
}

function getHexagonTile(coordX, coordY) {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            // coordinates of the center of the hexagon
            var cx = (tile_width * widthFactor) / 2;
            var cy = (tile_height * widthFactor) / 2;
            // coordinates of p3 with respect to tile center - p3 because it's in quadrant IV, and x and y will always be positive
            var x1 = ((tiles[i][j].coordinates.p3.x * widthFactor) - (tiles[i][j].coordinates.p5.x * widthFactor)) - cx;
            var y1 = ((tiles[i][j].coordinates.p3.y * widthFactor) - (tiles[i][j].coordinates.p1.y * widthFactor)) - cy;
            // coordinates of the click - modified
            var modx = 0;
            if (i % 2 == 1)
                modx = (uw * widthFactor);
            var x2 = coordX - (board_x * widthFactor) - (tile_width * widthFactor) * j - modx;
            var y2 = coordY - (board_y * heightFactor) - (uh * heightFactor) * 3 * i;
            // if mouseclick falls within the square that contains the hexagon
            if (x2 > 0 && x2 < (tile_width * widthFactor) && y2 > 0 && y2 < (tile_height * heightFactor)) {
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
