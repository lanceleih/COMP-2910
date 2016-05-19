/* Javascript for the Paused Page */
function paused() {

    ctx.clearRect(0, 0, 320, 480);
    var pausedTitle = document.getElementById("pausedTitle");
    ctx.drawImage(pausedTitle, 12, 40, 300, 132);
    var resume = document.getElementById("resumeButton");
    ctx.drawImage(resume, 90, 180, 150, 75);
    var restart = document.getElementById("restartButton");
    ctx.drawImage(restart, 90, 260, 150, 75);
    var menu = document.getElementById("menuButton");
    ctx.drawImage(menu, 90, 340, 150, 75);

    canvas.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            game();
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            // alert("Restart game!");
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            newGame();
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
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
    ctx.drawImage(document.getElementById("rightArrow"), 275, 230, 25, 25);
    document.getElementById("addName").style.display = "block";

    ctx.font = "20px monospace";
    ctx.beginPath();
    ctx.fillText("Enter name: ", 10, 250);

    ctx.font = "30px monospace";
    var timeString = formatTime(elapsedTime);
    ctx.beginPath();
    ctx.fillText("Your Time: " + timeString, 10, 200);
    canvas.addEventListener("mouseup", gameResultMouseUp, false);

    function gameResultMouseUp(event) {
        var canvas_x = event.pageX - canvas.offsetLeft;
        var canvas_y = event.pageY - canvas.offsetTop;
        if (canvas_x > 85 && canvas_x < 235 && canvas_y > 300 && canvas_y < 375) {
            document.getElementById("addName").style.display = "none";
            canvas.removeEventListener("mouseup", gameResultMouseUp, false);
            sfx2.play();
            newGame();
        } else if (canvas_x > 85 && canvas_x < 235 && canvas_y > 385 && canvas_y < 460) {
            document.getElementById("addName").style.display = "none";
            canvas.removeEventListener("mouseup", gameResultMouseUp, false);
            sfx1.play();
            home();
        } else if(canvas_x > 275 && canvas_x < 300 && canvas_y > 230 && canvas_y < 255) {
            document.getElementById("addName").style.display = "none";
            // sendInfo();
            backHome();
            //alert("Name submitted.");
        }
    }
}
