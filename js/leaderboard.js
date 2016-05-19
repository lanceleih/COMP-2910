/*The select shape page for the leaderboard*/
function leaderboardShape() {
    ctx.clearRect(0, 0, 320, 480);

    var leaderboardShapeTitle=document.getElementById("leaderboardShapeTitle");
    ctx.drawImage(leaderboardShapeTitle, 15, 40, 300, 132);
    var square = document.getElementById("squareButton");
    ctx.drawImage(square, 20, 180, 125, 100);
    var diamond = document.getElementById("diamondButton");
    ctx.drawImage(diamond, 180, 180, 125, 100);
    var hexagon = document.getElementById("hexButton");
    ctx.drawImage(hexagon, 20, 300, 125, 100);
    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);

    var img=document.getElementById("leaderboardShapeTitle");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("squareButton");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("diamondButton");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("hexButton");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;
        //alert(x + ',' + y);
        if (x > 20 && x < 145 && y > 180 && y < 280) {
            // square shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            loadEasy();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            // rhombus shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            loadEasy();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            // hexagon shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            loadEasy();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            // back button
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            backHome();
        }

    }
}
function loadEasy() {
    
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var easy = document.getElementById("easyTitle");
    ctx.drawImage(easy, 28, 60, 263, 38);
    drawBoard();

    canvas.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            leaderboardShape();
        } else if (x > 28 && x < 235 && y > 38 && y > 60) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            loadMedium();
        }
    }
}
function loadMedium() {
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var mediumTitle = document.getElementById("mediumTitle");
    ctx.drawImage(mediumTitle, 28, 60, 263, 38);
    drawBoard();

    canvas.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            leaderboardShape();
        } else if (x > 28 && x < 235 && y > 38 && y > 60) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            loadHard();
        }
    }
}
function loadHard() {
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var hardTitle = document.getElementById("hardTitle");
    ctx.drawImage(hardTitle, 28, 60, 263, 38);
    drawBoard();

    canvas.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            leaderboardShape();
        } else if (x > 28 && x < 235 && y > 38 && y > 60) {
            canvas.removeEventListener("click", tapped, false);
            sfx2.play();
            loadEasy();
        }
    }
}

function drawBoard() {
    var y1 = 125;
    var y2 = 400;
    var x1 = 30;
    var x2 = 290;

    // Column for rank number
    for (var x = 30; x <= 60; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.closePath();
        ctx.strokeStyle = "black";
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(x2, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();

    // Row for names
    for (var y = 125; y <= 400; y += 27.5) {
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();
    }
}