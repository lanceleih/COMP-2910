/* Javascript for All Parts of Game */ 

/* Javascript for the home page*/
function home() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    var count = 0;

    
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
        } else if(x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if(count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    } 
}
/*Function for returning to the home page*/
function backHome() {
    var home = document.getElementById("mainCanvas");
    var ctx = home.getContext("2d");
    var count = 0;

    
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
        } else if(x > 60 && x < 260 && y > 420 && y < 470) {
            count = count + 1;
            if(count == 10) {
                document.getElementById("main").style.display = "none";
                document.getElementById("easterEgg").style.display = "block";
                count = 0;
            }
        }
    } 
}
/* Hides the easter egg div*/
function backEaster() {
    document.getElementById("easterEgg").style.display = "none";
}
/*The select shape page for the game*/
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


/* Grace updated difficulty function */
 function selectDifficulty() {
    var c= document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");

    var difficulty = document.getElementById("difficulty");
    ctx.drawImage(difficulty, 15, 40, 300, 132);
    var easy = document.getElementById("easy");
    ctx.drawImage(easy, 90,180, 150, 75);
    var medium = document.getElementById("medium");
    ctx.drawImage(medium, 90,260, 150, 75);
    var hard = document.getElementById("hard");
    ctx.drawImage(hard, 90,340, 150, 75);
    var back=document.getElementById("back")
    ctx.drawImage(back, 0, 0, 100, 50);

    c.addEventListener("click", getPosition, false);


    function getPosition(event)
    {
        var x = event.x;
        var y = event.y;
        var selectDifficulty= document.getElementById("mainCanvas");
        var ctx = selectDifficulty.getContext("2d");

        x -= selectDifficulty.offsetLeft;
        y -= selectDifficulty.offsetTop;
        //alert(x + ',' + y);

        if(x > 90 && x < 240 && y > 180 && y < 255) {
            //ctx.clearRect(0, 0, 320, 480);
            //alert("you like easy eh");
            //selectShape();
           // home();
        } else if(x > 90 && x < 240 && y > 260 && y < 335) {
            ctx.clearRect(0, 0, 320, 480);
            selectDifficulty();
            //alert("you like medium");
        } else if(x > 90 && x < 240 && y > 340 && y < 415) {
            ctx.clearRect(0, 0, 320, 480);
            home();
            //alert("this is difficult one!");
        } else if(x > 15 && x < 100 && y > 15 && y < 40) {
            ctx.clearRect(0, 0, 320, 480);
            //selectShape();
            //alert("let's go back!");
            selectShape();

        }
    }

}
/*The select shape page for the leaderboard*/
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

/* Javascript for the Paused Page */
function paused() {
    var c = document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");

    var pausedTitle = document.getElementById("pausedTitle");
    ctx.drawImage(pausedTitle, 12, 40, 300, 132);
    var resume = document.getElementById("resume");
    ctx.drawImage(resume, 90, 180, 150, 75);
    var restart = document.getElementById("restart");
    ctx.drawImage(restart, 90, 260, 150, 75);
    var menu = document.getElementById("menu");
    ctx.drawImage(menu, 90, 340, 150, 75);

    c.addEventListener("click", tapped, false);

    function tapped(event) {
        var x = event.x;
        var y = event.y;
        var page = document.getElementById("mainCanvas");
        var ctx = page.getContext("2d");

        x -= page.offsetLeft;
        y -= page.offsetTop;

        if (x > 90 && x < 240 && y > 180 && y < 255) {
            // alert("Resume game");
        } else if (x > 90 && x < 240 && y > 260 && y < 335) {
            // alert("Restart game!");
        } else if (x > 90 && x < 240 && y > 340 && y < 415) {
            ctx.clearRect(0, 0, 320, 480);
            home();
        };
    }
}    

