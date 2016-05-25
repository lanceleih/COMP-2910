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

function drawRemainingColors() {
    ctx.font = "15px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(colorInventory[0], 65, 435);
    ctx.fillText(colorInventory[1], 135, 435);
    ctx.fillText(colorInventory[2], 205, 435);
    ctx.fillText(colorInventory[3], 275, 435);
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

function validateColorInventory() {
    for (var i = 0; i < palette.length; i++) {
        if (palette[i] === 0)
            return false;
    }
    return true;
}

function initializeColorInventory() {
    for (var i = 0; i < colorInventory.length; i++)
        colorInventory[i] = 0;
}
