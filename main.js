/* Javascript for All Parts of Game */ 

/* Game Paused Page Script */


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("GAME PAUSED",10,50);

function home() {
    var home = document.getElementById("main");
    var ctx = home.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Scholours",90,50);
    ctx.fillStyle = "#A1C4A6";
    ctx.fillRect(90,126,150,75);
}