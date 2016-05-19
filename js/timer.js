function createTimer() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.rect(20, 20, 200, 60);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    startTime = new Date().getTime();
}

function updateTimer() {
    ctx.clearRect(21, 21, 198, 58);
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.fillRect(21, 21, 198, 58);

    ctx.fillStyle = "#000000";
    ctx.font = "30px monospace";
    elapsedTime = parseInt((new Date().getTime()-startTime) / 100, 10);
    var timeString = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText(timeString, 30, 60);
}

function resumeTimer() {
    startTime = new Date().getTime() - new Date(elapsedTime * 100);
    gameTimer = setInterval(updateTimer, 100);
}
