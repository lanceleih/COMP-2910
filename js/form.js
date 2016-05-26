/* Javascript for the Form */
function changeValues() {
    nameEntered();

    document.getElementById("time").value = formatTime(elapsedTime);

    if (shape == 0) {
        document.getElementById("shape").value = "square";
    } else if (shape == 1) {
        document.getElementById("shape").value = "diamond";
    } else if (shape == 2) {
        document.getElementById("shape").value = "hexagon";
    }

    if (difficulty == 0) {
        document.getElementById("difficulty").value = "easy";
    } else if (difficulty == 1) {
        document.getElementById("difficulty").value = "medium";
    } else if (difficulty == 2) {
        document.getElementById("difficulty").value = "hard";
    }
    canvas.removeEventListener("mouseup", gameResultMouseUp, false);

}
function nameEntered() {
    document.getElementById("addName").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.addEventListener("mouseup", gameResultMouseUp, false);

    ctx.drawImage(document.getElementById("resultTitle"), 11, 20);
    ctx.drawImage(document.getElementById("restartButton"), 85, 300, 150, 75);
    ctx.drawImage(document.getElementById("menuButton"), 85, 385, 150, 75);

    ctx.font = "30px monospace";
    var timeString = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText("Your Time: " + timeString, 10, 200);

    ctx.font = "30px monospace";
    ctx.beginPath();
    ctx.fillText("Name entered!", 52, 250);

    function gameResultMouseUp(event) {
        setResponMargins();
        var canvas_x = event.pageX - canvas.offsetLeft;
        var canvas_y = event.pageY - canvas.offsetTop;
        if (canvas_x > 85 * widthFactor + leftMargin && canvas_x < 235 * widthFactor + leftMargin && canvas_y > 300 * heightFactor + topMargin && canvas_y < 375 * heightFactor + topMargin) {
            document.getElementById("addName").value = "";
            document.getElementById("addName").style.display = "none";
            document.getElementById("submitButton").style.display = "none";
            canvas.removeEventListener("mouseup", gameResultMouseUp, false);
            sfx2.play();
            newGame();
        } else if (canvas_x > 85 * widthFactor + leftMargin && canvas_x < 235 * widthFactor + leftMargin && canvas_y > 385 * heightFactor + topMargin && canvas_y < 460 * heightFactor + topMargin) {
            document.getElementById("addName").value = "";
            document.getElementById("addName").style.display = "none";
            document.getElementById("submitButton").style.display = "none";
            canvas.removeEventListener("mouseup", gameResultMouseUp, false);
            sfx1.play();
            home();
        }
    }
    
}