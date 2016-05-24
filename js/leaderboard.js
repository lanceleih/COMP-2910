/*The select shape page for the leaderboard*/
function leaderboardShape() {
    ctx.clearRect(0, 0, 320, 480);
    document.getElementById("leaderboardTable").style.display = "none";

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
            // diamond shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondEasy();
        } else if (x > 20 && x < 145 && y > 300 && y < 400) {
            // hexagon shape
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonEasy();
        } else if (x > 15 && x < 100 && y > 15 && y < 40) {
            // back button
            canvas.removeEventListener("click", getPosition, false);
            sfx1.play();
            home();
        }

    }
}
/* Square Leaderboard Tables */
function showSquareEasy() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

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
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/squareeasy.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showSquareMedium();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showSquareHard();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
function showSquareMedium() {
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("mediumTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/squaremedium.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showSquareHard();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showSquareEasy();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
function showSquareHard() {
    ctx.clearRect(0, 0, 320, 480);

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("hardTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/squarehard.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showSquareEasy();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showSquareMedium();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
/* Diamond Leaderboard Tables */
function showDiamondEasy() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

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
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/diamondeasy.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondMedium();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondHard();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
function showDiamondMedium() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("mediumTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/diamondmedium.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondHard();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondEasy();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
function showDiamondHard() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("hardTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/diamondhard.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondEasy();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showDiamondMedium();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
/* Hexagon Leaderboard Tables */
function showHexagonEasy() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

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
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/hexagoneasy.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonMedium();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonHard();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
function showHexagonMedium() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("mediumTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/hexagonmedium.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonHard();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonEasy();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}
function showHexagonHard() {
    ctx.clearRect(0, 0, 320, 480);

    document.getElementById("leaderboardTable").style.display = "block";

    var back = document.getElementById("backButton");
    ctx.drawImage(back, 0, 0, 100, 50);
    var squareEasyTitle = document.getElementById("hardTitle");
    ctx.drawImage(squareEasyTitle, 13, 50, 300, 50);
    var rightArrow = document.getElementById("rightArrow");
    ctx.drawImage(rightArrow, 190, 400, 50, 57);
    var leftArrow = document.getElementById("leftArrow");
    ctx.drawImage(leftArrow, 70, 400, 50, 57);

    xmlhttp = new XMLHttpRequest();
        
    xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("leaderboardTable").innerHTML = xmlhttp.responseText;
    }
    };

    xmlhttp.open("POST","http://scholours.net23.net/php/hexagonhard.php",true);
    xmlhttp.send();

    canvas.addEventListener("click", getPosition, false);

    function getPosition(event) {
        var x = event.x - canvas.offsetLeft;
        var y = event.y - canvas.offsetTop;

        if(x > 190 && x < 240 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonEasy();
        } else if(x > 70 && x < 120 && y > 400 && y < 450) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            showHexagonMedium();
        } else if(x > 0 && x < 100 && y > 0 && y < 50) {
            canvas.removeEventListener("click", getPosition, false);
            sfx2.play();
            leaderboardShape();
        }
    }
    
}