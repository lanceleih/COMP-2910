/*The select shape page for the leaderboard*/
function leaderboardShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var img=document.getElementById("leaderboardShapeTitle");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img = document.getElementById("square");
    ctx.drawImage(img, 20, 180, 125, 100);
    var img = document.getElementById("diamond");
    ctx.drawImage(img, 180, 180, 125, 100);
    var img = document.getElementById("hex");
    ctx.drawImage(img, 20, 300, 125, 100);
    var img = document.getElementById("backButton");
    ctx.drawImage(img, 0, 0, 100, 50);

    home.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);
        if (x > 20 && x < 145 && y > 180 && y < 280) {
            // square shape
            home.removeEventListener("click", getPosition, false);
            loadEasy();
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            // rhombus shape
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            // hexagon shape
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            // back button
            home.removeEventListener("click", getPosition, false);
            backHome();
        }

    }
}
function loadEasy() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("back");
    ctx.drawImage(back, 0, 0, 100, 50);
    var easyTitle = document.getElementById("easyTitle");
    ctx.drawImage(easyTitle, 28, 60, 263, 38);
    drawBoard();

    c.addEventListener("click", tapped, false);

    function drawBoard() {
        var c = document.getElementById("mainCanvas");
        var ctx = c.getContext("2d");
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

    function tapped(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;

        if (x > 0 && x < 100 && y > 0 && y < 50) {
            home.removeEventListener("click", tapped, false);
            leaderboardShape();
        } else if (x > 28 && x < 235 && y > 38 && y > 60) {
            loadMedium();
        }
    }
}
function loadMedium() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("back");
    ctx.drawImage(back, 0, 0, 100, 50);
    var easyTitle = document.getElementById("mediumTitle");
    ctx.drawImage(easyTitle, 28, 60, 263, 38);
    drawBoard();

    c.addEventListener("click", tapped, false);

    function drawBoard() {
        var c = document.getElementById("mainCanvas");
        var ctx = c.getContext("2d");
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

    function tapped(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;

        if (x > 0 && x < 100 && y > 0 && y < 50) {
            home.removeEventListener("click", tapped, false);
            leaderboardShape();
        } else if (x > 28 && x < 235 && y > 38 && y > 60) {
            loadHard();
        }
    }
}
function loadHard() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("back");
    ctx.drawImage(back, 0, 0, 100, 50);
    var easyTitle = document.getElementById("hardTitle");
    ctx.drawImage(easyTitle, 28, 60, 263, 38);
    drawBoard();

    c.addEventListener("click", tapped, false);

    function drawBoard() {
        var c = document.getElementById("mainCanvas");
        var ctx = c.getContext("2d");
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

    function tapped(event) {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;

        if (x > 0 && x < 100 && y > 0 && y < 50) {
            home.removeEventListener("click", tapped, false);
            leaderboardShape();
        } else if (x > 28 && x < 235 && y > 38 && y > 60) {
            loadEasy();
        }
    }
}