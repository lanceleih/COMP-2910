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
}

/*Pause Button for Game*/
function createPauseBtn() {
    var img = document.getElementById("pauseButton");
    ctx.drawImage(img, pause_x, pause_y, pause_width, pause_height);
}
