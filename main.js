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
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,90,340, 150, 75);
    
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
   
        if(x > 90 && x < 240 && y > 180 && y < 255) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            ctx.clearRect(0, 0, 320, 480);
            leaderboardShape();
        }
    } 
}
function backHome() {
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
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,90,340, 150, 75);
    
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
   
        if(x > 90 && x < 240 && y > 180 && y < 255) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            ctx.clearRect(0, 0, 320, 480);
            leaderboardShape();
        }
    } 
}
function selectShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("title").src = "title/shapetitle.png";
    document.getElementById("firstButton").src = "icons/square.png";
    document.getElementById("secondButton").src = "icons/polygon.png";
    document.getElementById("thirdButton").src = "icons/hexa.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,20,180, 125, 100);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,180,180, 125, 100);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,20,300, 125, 100);
    var img=document.getElementById("backButton")
    ctx.drawImage(img, 0, 0, 100, 50);
    
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
        if(x > 20 && x < 145 && y > 180 && y < 280) {
            ctx.clearRect(0, 0, 320, 480);
            selectDifficulty();
        } else if(x > 180 && x < 305 && y > 180 && y < 280) {
            ctx.clearRect(0, 0, 320, 480);
            selectDifficulty();
        } else if(x > 20 && x < 145 && y > 300 && y < 400) {
            ctx.clearRect(0, 0, 350, 480);
            selectDifficulty();
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
        }
    } 
}
function selectDifficulty() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("firstButton").src = "icons/easy.png";
    document.getElementById("secondButton").src = "icons/medium.png";
    document.getElementById("thirdButton").src = "icons/hard.png";
    document.getElementById("title").src = "title/difficultytitle.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,90,180, 150, 75);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,90,260, 150, 75);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,90,340, 150, 75);
    var img=document.getElementById("backButton")
    ctx.drawImage(img, 0, 0, 100, 50);

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
   
        if(x > 90 && x < 240 && y > 180 && y < 255) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            selectShape();
        }
    } 
}
function leaderboardShape() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    document.getElementById("title").src = "title/leaderboardtitle.png";
    document.getElementById("firstButton").src = "icons/square.png";
    document.getElementById("secondButton").src = "icons/polygon.png";
    document.getElementById("thirdButton").src = "icons/hexa.png";
    var img=document.getElementById("title");
    ctx.drawImage(img, 15, 40, 300, 132);
    var img=document.getElementById("firstButton");
    ctx.drawImage(img,20,180, 125, 100);
    var img=document.getElementById("secondButton");
    ctx.drawImage(img,180,180, 125, 100);
    var img=document.getElementById("thirdButton");
    ctx.drawImage(img,20,300, 125, 100);
    var img=document.getElementById("backButton")
    ctx.drawImage(img, 0, 0, 100, 50);
    
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
        if(x > 20 && x < 145 && y > 180 && y < 280) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 180 && x < 305 && y > 180 && y < 280) {
            //ctx.clearRect(0, 0, 320, 480);
        } else if(x > 20 && x < 145 && y > 300 && y < 400) {
            //ctx.clearRect(0, 0, 350, 480);
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            backHome();
        }
    } 
}

