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
        setResponMargins();
        var x = event.x;
        var y = event.y;
        //alert(x + ',' + y);
        if (x > 20 * widthFactor + leftMargin && x < 145 * widthFactor + leftMargin && y > 180 * heightFactor + topMargin && y < 280 * heightFactor + topMargin) {
            // square shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 180 * widthFactor + leftMargin && x < 305 * widthFactor + leftMargin && y > 180 * heightFactor + topMargin && y < 280 * heightFactor + topMargin) {
            // rhombus shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 20 * widthFactor + leftMargin && x < 145 * widthFactor + leftMargin && y > 300 * heightFactor + topMargin && y < 400 * heightFactor + topMargin) {
            // hexagon shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            document.getElementById("main").style.display = "none";
            document.getElementById("leaderboardEasySquareTable").style.display = "block";
        } else if (x > 15 * widthFactor + leftMargin && x < 100 * widthFactor + leftMargin && y > 15 * heightFactor + topMargin && y < 40 * heightFactor + topMargin) {
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
