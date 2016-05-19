function createDiamondArray(row, col) {
    TILE_WIDTH = BOARD_WIDTH / row;
    TILE_HEIGHT = BOARD_HEIGHT / col;
    tiles = new Array(row);
    for (var i = 0; i < row; i++) {
        tiles[i] = new Array(col);
        for (var j = 0; j< col; j++) {
            tiles[i][j] = {
                shape: TILE_SHAPE,
                color: -1,
                width: TILE_WIDTH - 2,
                height: TILE_HEIGHT - 2,
                x: TILE_WIDTH * j + OFFSET_LEFT + 1,
                y: TILE_HEIGHT * i + OFFSET_TOP + 1,
                fixed: false
            };
        }
    }
}
function createFixedEasyDiamond() {
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
}
function createFixedMediumDiamond() {
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
    tiles[4][4].fixed = true;
    tiles[4][4].color = 0;
    colorInventory[0]--;
    tilesColored++;
}
function createFixedHardDiamond() {
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
    tiles[4][4].fixed = true;
    tiles[4][4].color = 0;
    colorInventory[0]--;
    tilesColored++;
    tiles[5][5].fixed = true;
    tiles[5][5].color = 0;
    colorInventory[0]--;
    tilesColored++;
}

