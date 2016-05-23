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
