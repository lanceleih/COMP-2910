function formatTime(time) {
    var minute = Math.floor(time / 600);
    var second = Math.floor(time / 10) % 60;
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    var decisecond = time % 10;
    return minute + ":" + second + "." + decisecond;
}

/* Hides the easter egg div*/
function backEaster() {
    document.getElementById("easterEgg").style.display = "none";
    document.getElementById("main").style.display = "block";
}
/*Pause Button for Game*/
function createPauseBtn() {
    var img = document.getElementById("pauseButton");
    ctx.drawImage(img, pause_x, pause_y, pause_width, pause_height);
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

