/* Javascript for All Parts of Game */ 

/* Game Paused Page Script */


var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("GAME PAUSED",10,50);


function home() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Scholours",90,80);
    ctx.font = "20px Arial";
    ctx.fillText('The "U" makes it Canadian',40,420);
    document.getElementById("firstButton").src = "icons/play.png";
    document.getElementById("secondButton").src = "icons/settings.png";
    document.getElementById("thirdButton").src = "icons/leaderboard.png";
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,30,80, 300, 150);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,30,170, 300, 150);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,30,260, 300, 150);
    
    home.addEventListener("click", getPosition, false);

    function getPosition(event)
    {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
   
        if(x > 30 && x < 330 && y > 110 && y < 180) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
            //alert(x + ',' + y);
        } else if(x > 30 && x < 330 && y > 200 && y < 270) {
            ctx.clearRect(0, 0, 320, 480);
        } else if(x > 30 && x < 330 && y > 290 && y < 360) {
            ctx.clearRect(0, 0, 320, 480);
        }
    } 
}
function selectShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Select Shape",70,90);
    document.getElementById("firstButton").src = "icons/rectangle.png";
    document.getElementById("secondButton").src = "icons/polygon.png";
    document.getElementById("thirdButton").src = "icons/hexa.png";
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,30,50, 300, 250);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,30,170, 300, 250);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,30,290, 300, 250);
    var img=document.getElementById("backButton")
    ctx.drawImage(img, 0, 0, 125, 50);
    
    home.addEventListener("click", getPosition, false);

    function getPosition(event)
    {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
        //alert(x + ',' + y);
        if(x > 70 && x < 250 && y > 110 && y < 210) {
            ctx.clearRect(0, 0, 320, 480);
        } else if(x > 70 && x < 250 && y > 230 && y < 330) {
            ctx.clearRect(0, 0, 320, 480);
        } else if(x > 70 && x < 250 && y > 330 && y < 450) {
            ctx.clearRect(0, 0, 350, 480);
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
        }
    } 
}
function backHome() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Scholours",90,80);
    ctx.font = "20px Arial";
    ctx.fillText('The "U" makes it Canadian',40,420);
    document.getElementById("firstButton").src = "icons/play.png";
    document.getElementById("secondButton").src = "icons/settings.png";
    document.getElementById("thirdButton").src = "icons/leaderboard.png";
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,30,80, 300, 150);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,30,170, 300, 150);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,30,260, 300, 150);
    
    home.addEventListener("click", getPosition, false);

    function getPosition(event)
    {
        var x = event.x;
        var y = event.y;
        var home = document.getElementById("mainCanvas");
        var ctx = home.getContext("2d");

        x -= home.offsetLeft;
        y -= home.offsetTop;
   
        if(x > 30 && x < 330 && y > 110 && y < 180) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
            //alert(x + ',' + y);
        } else if(x > 30 && x < 330 && y > 200 && y < 270) {
            ctx.clearRect(0, 0, 320, 480);
        } else if(x > 30 && x < 330 && y > 290 && y < 360) {
            ctx.clearRect(0, 0, 320, 480);
        }
    } 
}
