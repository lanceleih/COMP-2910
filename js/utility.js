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
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.rect(240, 20, 60, 60);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.fillText("Pause", 250, 55);
}
