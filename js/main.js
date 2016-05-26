/* Javascript for All Parts of Game */

function scholours() {
    setGlobalVariables();
    //document.getElementById("mainCanvas").style.display = "block";
    home();
}

/* Javascript for the home page*/
function home() {
    ctx.clearRect(0, 0, 320, 480);
    var count = 0;
    var img = document.getElementById("cube");
    ctx.drawImage(img, 15, 70, 70, 70);
    var img = document.getElementById("logo");
    ctx.drawImage(img, 80, 70, 200, 70);
    var img = document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img = document.getElementById("playButton");
    ctx.drawImage(img, 85, 180, 150, 75);
    var img = document.getElementById("settingsButton");
    ctx.drawImage(img, 85, 260, 150, 75);
    var img = document.getElementById("leaderboardButton");
    ctx.drawImage(img, 85, 340, 150, 75);
    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x;
        var y = event.y;
        
       if (x > (85 * widthFactor + leftMargin) && x < (235 * widthFactor + leftMargin) && y > (180 * heightFactor + topMargin) && y < (255 * heightFactor + topMargin)) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            selectShape();
        } else if(x > (85 * widthFactor + leftMargin) && x < (235 * widthFactor + leftMargin)  && y > (260 * heightFactor + topMargin) && y < (335 * heightFactor + topMargin)) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            startSettings();
        } else if(x > (85 * widthFactor + leftMargin) && x < (235 * widthFactor + leftMargin) && y > (340 * heightFactor + topMargin) && y < (415 * heightFactor + topMargin)) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        } else if (x > (60 * widthFactor + leftMargin) && x < (260 * widthFactor + leftMargin) && y > (420 * heightFactor + topMargin) && y < (470 * heightFactor + topMargin)) {
            count = count + 1;
            if (count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    }
}
