function createTimer() {
    var img = document.getElementById("timerImage");
    ctx.drawImage(img, timer_x, timer_y, timer_width, timer_height);
    startTime = new Date().getTime();
}

function updateTimer() {
    ctx.fillStyle = "#C7B577";
    ctx.beginPath();
    ctx.fillRect(90, 40, 120, 20);

    ctx.fillStyle = "#000000";
    ctx.font = "30px monospace";
    elapsedTime = parseInt((new Date().getTime() - startTime) / 100, 10);
    var timeString = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText(timeString, 90, 60);
}

function resumeTimer() {
    startTime = new Date().getTime() - new Date(elapsedTime * 100);
    gameTimer = setInterval(updateTimer, 100);
}
