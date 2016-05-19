function validateGame() {
    switch (TILE_SHAPE) {
        case "square":
            return validateSquareGame();
            break;
        case "rhombus":
        case "hexagon":
        default:
            return false;
    }
}

function validateSquareGame() {
    for (var i = 0; i < maxTiles; i++) {
        var row = ~~(i/maxRows);
        var col = i%maxCols;
        if (row - 1 >= 0) {
            if (tiles[row][col].color === tiles[row - 1][col].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row-1) + "][" + col + "] (" + tiles[row-1][col].color + ")");
                return false;
            }
        }
        if (col - 1 >= 0) {
            if (tiles[row][col].color === tiles[row][col - 1].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col-1) + "] (" + tiles[row][col-1].color + ")");
                return false;
            }
        }
        if (row + 1 < maxRows) {
            if (tiles[row][col].color === tiles[row + 1][col].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row+1) + "][" + col + "] (" + tiles[row+1][col].color + ")");
                return false;
            }
        }
        if (col + 1 < maxCols) {
            if (tiles[row][col].color === tiles[row][col + 1].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col+1) + "] (" + tiles[row][col+1].color + ")");
                return false;
            }
        }
    }
    return true;
}
