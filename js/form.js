/* Javascript for the Form */
function changeValues() {
    nameEntered();
    document.getElementById("addName").value = document.getElementById("addName").value.toUpperCase();
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
/* Javascript for the Game Result Page*/
function nameEntered() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hide input form + submit button
    document.getElementById("addName").style.display = "none";
    document.getElementById("submitButton").style.display = "none";

    ctx.drawImage(document.getElementById("resultTitle"), 11, 20);
    ctx.drawImage(document.getElementById("restartButton"), 85, 300, 150, 75);
    ctx.drawImage(document.getElementById("menuButton"), 85, 385, 150, 75);

    // Text label - Your Time: formated_time
    ctx.font = "25px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Your Time: " + formatTime(elapsedTime), (canvas.width / 2), 200);
    ctx.textAlign = "start";

    // Text label - Name Entered:
    ctx.font = "25px monospace";
    ctx.textAlign = "center";
    ctx.fillText("Name Entered! ", (canvas.width / 2), 250);
    ctx.textAlign = "start";
}
