function validateGame() {
    switch (shape) {
        case 0:
            return validateSquareGame();
            break;
        case 1:
            return validateDiamondGame();
            break;
        case 2:
            return validateHexagonGame();
            break;
        default:
            return false;
            break;
    }
}

function validateSquareGame() {
    for (var i = 0; i < max_tile; i++) {
        var row = ~~(i / max_row);
        var col = i % max_col;
        // -1, 0
        if (row - 1 >= 0) {
            if (tiles[row][col].color === tiles[row - 1][col].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row-1) + "][" + col + "] (" + tiles[row-1][col].color + ")");
                return false;
            }
        }
        // 0, -1
        if (col - 1 >= 0) {
            if (tiles[row][col].color === tiles[row][col - 1].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col-1) + "] (" + tiles[row][col-1].color + ")");
                return false;
            }
        }
        // +1, 0
        if (row + 1 < max_row) {
            if (tiles[row][col].color === tiles[row + 1][col].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + (row+1) + "][" + col + "] (" + tiles[row+1][col].color + ")");
                return false;
            }
        }
        // 0, +1
        if (col + 1 < max_col) {
            if (tiles[row][col].color === tiles[row][col + 1].color) {
                //alert("tiles[" + row + "][" + col + "] (" + tiles[row][col].color + ") == tiles[" + row + "][" + (col+1) + "] (" + tiles[row][col+1].color + ")");
                return false;
            }
        }
    }
    return true;
}
function validateDiamondGame() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            // if even row
            if (i % 2 == 1) {
                // -1, +1
                if (i - 1 >= 0 && j + 1 < max_col) {
                    if (tiles[i][j].color === tiles[i - 1][j + 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + (j+1) + "] (" + tiles[i-1][j+1].color + ")");
                        return false;
                    }
                }
                // +1, +1
                if (i + 1 < max_row && j + 1 < max_col) {
                    if (tiles[i][j].color === tiles[i + 1][j + 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + (j+1) + "] (" + tiles[i+1][j+1].color + ")");
                        return false;
                    }
                }
            }
            else {
                // -1, -1
                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (tiles[i][j].color === tiles[i - 1][j - 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + (j-1) + "] (" + tiles[i-1][j-1].color + ")");
                        return false;
                    }
                }
                // +1, -1
                if (i + 1 < max_row && j - 1 >= 0) {
                    if (tiles[i][j].color === tiles[i + 1][j - 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + (j-1) + "] (" + tiles[i+1][j-1].color + ")");
                        return false;
                    }
                }
            }
            // -1, 0
            if (i - 1 >= 0) {
                if (tiles[i][j].color === tiles[i - 1][j].color) {
                    // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + j + "] (" + tiles[i-1][j].color + ")");
                    return false;
                }
            }
            // +1, 0
            if (i + 1 < max_row) {
                if (tiles[i][j].color === tiles[i + 1][j].color) {
                    // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + j + "] (" + tiles[i+1][j].color + ")");
                    return false;
                }
            }
        }
    }
    return true;
}

function validateHexagonGame() {
    for (var i = 0; i < max_row; i++) {
        for (var j = 0; j < max_col; j++) {
            // if even row
            if (i % 2 == 1) {
                // -1, +1
                if (i - 1 >= 0 && j + 1 < max_col) {
                    if (tiles[i][j].color === tiles[i - 1][j + 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + (j+1) + "] (" + tiles[i-1][j+1].color + ")");
                        return false;
                    }
                }
                // +1, +1
                if (i + 1 < max_row && j + 1 < max_col) {
                    if (tiles[i][j].color === tiles[i + 1][j + 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + (j+1) + "] (" + tiles[i+1][j+1].color + ")");
                        return false;
                    }
                }
            }
            else {
                // -1, -1
                if (i - 1 >= 0 && j - 1 >= 0) {
                    if (tiles[i][j].color === tiles[i - 1][j - 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + (j-1) + "] (" + tiles[i-1][j-1].color + ")");
                        return false;
                    }
                }
                // +1, -1
                if (i + 1 < max_row && j - 1 >= 0) {
                    if (tiles[i][j].color === tiles[i + 1][j - 1].color) {
                        // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + (j-1) + "] (" + tiles[i+1][j-1].color + ")");
                        return false;
                    }
                }
            }
            // -1, 0
            if (i - 1 >= 0) {
                if (tiles[i][j].color === tiles[i - 1][j].color) {
                    // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i-1) + "][" + j + "] (" + tiles[i-1][j].color + ")");
                    return false;
                }
            }
            // +1, 0
            if (i + 1 < max_row) {
                if (tiles[i][j].color === tiles[i + 1][j].color) {
                    // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + (i+1) + "][" + j + "] (" + tiles[i+1][j].color + ")");
                    return false;
                }
            }
            // 0, -1
            if (j - 1 >= 0) {
                if (tiles[i][j].color === tiles[i][j - 1].color) {
                    // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + i + "][" + (j-1) + "] (" + tiles[i][j-1].color + ")");
                    return false;
                }
            }
            // 0, +1
            if (j + 1 < max_col) {
                if (tiles[i][j].color === tiles[i][j + 1].color) {
                    // alert("tiles[" + i + "][" + j + "] (" + tiles[i][j].color + ") == tiles[" + i + "][" + (j+1) + "] (" + tiles[i][j+1].color + ")");
                    return false;
                }
            }
        }
    }
    return true;
}
