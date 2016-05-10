/* Javascript for All Parts of Game */ 

/* Javascript for the home page*/
function home() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("firstButton").src = "icons/play.png";
    document.getElementById("secondButton").src = "icons/settings.png";
    document.getElementById("thirdButton").src = "icons/leaderboard.png";
    document.getElementById("title").src = "title/titleIcon.png";
    document.getElementById("slogan").src= "title/slogan.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("slogan");
    ctx.drawImage(img, 60, 420, 200, 50);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,30,150, 300, 150);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,30,230, 300, 150);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,30,310, 300, 150);
    
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
   
        if(x > 70 && x < 250 && y > 190 && y < 250) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        } else if(x > 70 && x < 250 && y > 270 && y < 330) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 70 && x < 250 && y > 350 && y < 410) {
            //ctx.clearRect(0, 0, 320, 480);
        }
    } 
}
function selectShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("title").src = "title/shapetitle.png";
    document.getElementById("firstButton").src = "icons/rectangle.png";
    document.getElementById("secondButton").src = "icons/polygon.png";
    document.getElementById("thirdButton").src = "icons/hexa.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,10,180, 200, 200);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,150,180, 200, 200);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,10,280, 200, 200);
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
        if(x > 40 && x < 150 && y > 230 && y < 320) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 180 && x < 300 && y > 230 && y < 320) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 40 && x < 150 && y > 330 && y < 410) {
            //ctx.clearRect(0, 0, 350, 480);
        } else if(x > 20 && x < 100 && y > 20 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
        }
    } 
}
function backHome() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillText('The "U" makes it Canadian',40,460);
    document.getElementById("firstButton").src = "icons/play.png";
    document.getElementById("secondButton").src = "icons/settings.png";
    document.getElementById("thirdButton").src = "icons/leaderboard.png";
    document.getElementById("title").src = "title/titleIcon.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,30,150, 300, 150);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,30,230, 300, 150);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,30,310, 300, 150);
    
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
   
        if(x > 70 && x < 250 && y > 190 && y < 250) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        } else if(x > 70 && x < 250 && y > 270 && y < 330) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 70 && x < 250 && y > 350 && y < 410) {
            //ctx.clearRect(0, 0, 320, 480);
        }
    } 
}
