var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

    function home() {
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
                ctx.clearRect(0, 0, 320, 480);
                startSettings();
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