/* Javascript for the Paused Page */
function paused() {

    ctx.clearRect(0, 0, 320, 480);
    var pausedTitle = document.getElementById("pausedTitle");
    ctx.drawImage(pausedTitle, 12, 40, 300, 132);
    var resume = document.getElementById("resumeButton");
    ctx.drawImage(resume, 85, 180, 150, 75);
    var restart = document.getElementById("restartButton");
    ctx.drawImage(restart, 85, 260, 150, 75);
    var menu = document.getElementById("menuButton");
    ctx.drawImage(menu, 85, 340, 150, 75);

    canvas.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x;
        var y = event.y;

       if (x > (85 * widthFactor + leftMargin) && x < (235 * widthFactor + leftMargin) && y > (180 * heightFactor + topMargin) && y < (255 * heightFactor + topMargin)) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            game();
        } else if(x > (85 * widthFactor + leftMargin) && x < (235 * widthFactor + leftMargin)  && y > (260  * heightFactor + topMargin) && y < (335 * heightFactor + topMargin)) {
            // alert("Restart game!");
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            newGame();
        } else if(x > (85 * widthFactor + leftMargin) && x < (235 * widthFactor + leftMargin) && y > (340 * heightFactor + topMargin) && y < (415 * heightFactor + topMargin)) {
            // alert("go home");
            canvas.removeEventListener("click", tapped, false);
            sfx1.play();
            home();
        }
    }
}

/* Javascript for the Game Result Page*/
function gameResult() {
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#FFFFFF";
    ctx.lineWidth = 2;
    //ctx.shadowColor = "transparent";

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";

    ctx.drawImage(document.getElementById("resultTitle"), 11, 20);
    ctx.drawImage(document.getElementById("restartButton"), 85, 300, 150, 75);
    ctx.drawImage(document.getElementById("menuButton"), 85, 385, 150, 75);

    if (elapsedTime <= expiryGameTime) {
        // Text label - Your Time: formated_time
        ctx.font = "25px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Your Time: " + formatTime(elapsedTime), (canvas.width / 2), 200);
        ctx.textAlign = "start";

        // Text label - Enter name:
        ctx.font = "20px monospace";
        ctx.fillText("Enter name: ", 10, 250);

        // Display input form + submit button
        document.getElementById("addName").style.display = "block";
        document.getElementById("submitButton").style.display = "block";
    }
    else {
        ctx.textAlign = "center";
        ctx.font = 25 + "px monospace";
        ctx.fillText("Game Over", (canvas.width / 2), 200);
        ctx.font = 20 + "px monospace";
        ctx.fillText("You ran out of time.", (canvas.width / 2), 250);
        ctx.textAlign = "start";
    }

    // Add event listener for game result page
    canvas.addEventListener("mouseup", gameResultMouseUp, false);

    function gameResultMouseUp(event) {
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
function nameEntered() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("addName").value = "";
    document.getElementById("addName").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    
    ctx.drawImage(document.getElementById("resultTitle"), 11, 20);
    ctx.drawImage(document.getElementById("restartButton"), 85, 300, 150, 75);
    ctx.drawImage(document.getElementById("menuButton"), 85, 385, 150, 75);

    // Add event listener for game result page
    canvas.addEventListener("mouseup", gameResultMouseUp, false);

    ctx.font = "30px monospace";
    var timeString2 = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText("Your Time: " + timeString2, 10, 200);

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

