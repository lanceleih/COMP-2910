/* Javascript for the home page*/
function home() {
    bgm.volume = 0.2;
    sfx1.volume = 0.8;
    sfx2.volume = 0.8;
    bgm.play();
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 320, 480);
    var count = 0;
    var img = document.getElementById("cube");
    ctx.drawImage(img, 15, 70, 70, 70);
    var img = document.getElementById("logo");
    ctx.drawImage(img, 80, 70, 200, 70);
    var img = document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img = document.getElementById("playButton");
    ctx.drawImage(img, 90, 180, 150, 75);
    var img = document.getElementById("settingsButton");
    ctx.drawImage(img, 90, 260, 150, 75);
    var img = document.getElementById("leaderboardButton");
    ctx.drawImage(img, 90, 340, 150, 75);

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            startSettings();
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        } else if (x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if (count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    }
}
/*Function for returning to the home page*/
// function backHome() {
//     document.getElementById("addName").style.display = "none"; // leaderboard textbox disappears
//     var count = 0;
//     canvas = document.getElementById("mainCanvas");
//     ctx = canvas.getContext("2d");
//     ctx.clearRect(0, 0, 320, 480);
//
//     var img = document.getElementById("cube");
//     ctx.drawImage(img, 15, 70, 70, 70);
//     var img = document.getElementById("logo");
//     ctx.drawImage(img, 80, 70, 200, 70);
//     var img = document.getElementById("slogan");
//     ctx.drawImage(img, 60, 420, 200, 50);
//     var img = document.getElementById("playButton");
//     ctx.drawImage(img, 90, 180, 150, 75);
//     var img = document.getElementById("settingsButton");
//     ctx.drawImage(img, 90, 260, 150, 75);
//     var img = document.getElementById("leaderboardButton");
//     ctx.drawImage(img, 90, 340, 150, 75);
//
//     canvas.addEventListener("click", getPosition, false);
//
//     function getPosition(event) {
//         var x = event.x - canvas.offsetLeft;
//         var y = event.y - canvas.offsetTop;
//
//         if (x > 90 && x < 240 && y > 180 && y < 255) {
//             canvas.removeEventListener("click", getPosition, false);
//             sfx2.play();
//             selectShape();
//         } else if(x > 90 && x < 240 && y > 260 && y < 335) {
//             canvas.removeEventListener("click", getPosition, false);
//             sfx2.play();
//             startSettings();
//         } else if(x > 90 && x < 240 && y > 340 && y < 415) {
//             canvas.removeEventListener("click", getPosition, false);
//             sfx2.play();
//             leaderboardShape();
//         } else if (x > 60 && x < 260 && y > 420 && y < 470) {
//             count = count + 1;
//             if (count == 10) {
//                 document.getElementById("main").style.display = "none";
//                 document.getElementById("easterEgg").style.display = "block";
//                 count = 0;
//             }
//         }
//     }
// }










