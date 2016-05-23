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
