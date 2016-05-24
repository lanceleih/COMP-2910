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
            showSquareEasy();
        } else if (x > 180 && x < 305 && y > 180 && y < 280) {
            // rhombus shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            // hexagon shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            // back button
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            home();
        }

    }
}
function backEasySquareLeaderboard() {
    document.getElementById("leaderboardEasySquareTable").style.display = "none";
    document.getElementById("main").style.display = "block";
    leaderboardShape();
}
function backMediumSquareLeaderboard() {
    document.getElementById("leaderboardMediumSquareTable").style.display = "none";
    document.getElementById("main").style.display = "block";
    leaderboardShape();
}
function backHardSquareLeaderboard() {
    document.getElementById("leaderboardHardSquareTable").style.display = "none";
    document.getElementById("main").style.display = "block";
    leaderboardShape();
}
function leaderboardEasyToMedium() {
    document.getElementById("leaderboardEasySquareTable").style.display = "none";
    document.getElementById("leaderboardMediumSquareTable").style.display = "block";
}
function leaderboardEasyToHard() {
    document.getElementById("leaderboardEasySquareTable").style.display = "none";
    document.getElementById("leaderboardHardSquareTable").style.display = "block";
}
function leaderboardMediumToHard() {
    document.getElementById("leaderboardMediumSquareTable").style.display = "none";
    document.getElementById("leaderboardHardSquareTable").style.display = "block";
}
function leaderboardMediumToEasy() {
    document.getElementById("leaderboardMediumSquareTable").style.display = "none";
    document.getElementById("leaderboardEasySquareTable").style.display = "block";
}
function leaderboardHardToEasy() {
    document.getElementById("leaderboardHardSquareTable").style.display = "none";
    document.getElementById("leaderboardEasySquareTable").style.display = "block";
}
function leaderboardHardToMedium() {
    document.getElementById("leaderboardHardSquareTable").style.display = "none";
    document.getElementById("leaderboardMediumSquareTable").style.display = "block";
}
function showSquareEasy() {
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("easyTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardEasySquareTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/squareeasy.php",true);
    xmlhttp.send();
}