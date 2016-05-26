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

function setResponMargins() {
    mainDiv = document.getElementById("main");
    submitButton = document.getElementById("leaderboardInput");
    easterDiv = document.getElementById("easterEgg");
    leaderboardTableDiv = document.getElementById("leaderboardTable");

    widthFactor = canvas.scrollWidth / canvas.width;
    heightFactor = canvas.scrollHeight / canvas.height;
    ratio = $(window).width() / $(window).height();

    canvasWidth = canvas.scrollWidth;
    canvasHeight = canvas.scrollHeight;

    docWidth = $(window).width();
    docHeight = $(window).height();
    leftMargin = ((docWidth - canvasWidth) / 2);

    if(docWidth < 320) {
        leftMargin = 0;
    }
    mainDiv.style.marginLeft =  leftMargin.toString() + "px";
    submitButton.style.marginLeft =  leftMargin.toString() + "px";
    submitButton.style.width =  canvasWidth.toString() + "px";
    easterDiv.style.marginLeft =  leftMargin.toString() + "px";
    easterDiv.style.width =  canvasWidth.toString() + "px";
    leaderboardTableDiv.style.marginLeft =  leftMargin.toString() + "px";
    leaderboardTableDiv.style.width =  canvasWidth.toString() + "px";
    topMargin = (docHeight - canvasHeight);
}
