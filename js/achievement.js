function unlockPack() {
    if (shape == 0){
        unlockAutumnsSplendor();
    } else if (shape == 1) {
        unlockPackmansGhosts();
    } else if (shape == 2) {
        unlockBeerGoggles();
    }
}

function unlockAutumnsSplendor() {
    if (gamesSqu === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var fontSize = 20 * widthFactor;

        // msg 1 settings
        var msg = "You've unlocked";
        var msgX = canvas.width / 2;
        var msgY = 60;

        // msg 2 settings
        var msg2 = "a new colour pack!";
        var msg2X = canvas.width / 2;
        var msg2Y = msgY + fontSize;

        // color pack panel settings
        var colorPackImg = palette1[1];
        var colorPackImgX = 50;
        var colorPackImgY = msg2Y + 30;
        var colorPackImgWidth = 220;
        var colorPackImgHeight = 170;

        // color pack title settings
        var colorPackTitleImg = palette1[0];
        var colorPackTitleWidth = 250;
        var colorPackTitleHeight = 63;
        var colorPackTitleX = canvas.width / 2 - colorPackTitleWidth / 2;
        var colorPackTitleY = colorPackImgY + colorPackImgHeight;

        // continue button settings
        var continueImg = document.getElementById("continueButton");
        var continueImgX = 85;
        var continueImgY = 360;
        var continueImgWidth = 150;
        var continueImgHeight = 75;

        ctx.fillStyle = "#000000";
        ctx.font = fontSize + "px monospace";
        ctx.textAlign = "center";
        // msg 1
        ctx.fillText(msg, msgX, msgY);
        // msg 2
        ctx.fillText(msg2, msg2X, msg2Y);
        ctx.textAlign = "start";
        // color pack image
        ctx.drawImage(colorPackImg, colorPackImgX, colorPackImgY, colorPackImgWidth, colorPackImgHeight);
        // color pack title
        ctx.drawImage(colorPackTitleImg, colorPackTitleX, colorPackTitleY, colorPackTitleWidth, colorPackTitleHeight);
        // continue
        ctx.drawImage(continueImg, continueImgX, continueImgY, continueImgWidth, continueImgHeight);

        canvas.addEventListener("mouseup", clicked, false);
    }
    else {
        gameResult();
    }

    function clicked(event) {
        var x = (event.x - leftMargin) / widthFactor;
        var y = (event.y - topMargin) / heightFactor;

        if (x > 85 && x < 235 && y > 360 && y < 435) {
            canvas.removeEventListener("mouseup", clicked, false);
            gameResult();
        }
    }
}

function unlockPackmansGhosts() {
    if (gamesDia === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var fontSize = 20;

        // msg 1 settings
        var msg = "You've unlocked";
        var msgX = canvas.width / 2;
        var msgY = 60;

        // msg 2 settings
        var msg2 = "a new colour pack!";
        var msg2X = canvas.width / 2;
        var msg2Y = msgY + fontSize;

        // color pack panel settings
        var colorPackImg = palette2[1];
        var colorPackImgX = 50;
        var colorPackImgY = msg2Y + 30;
        var colorPackImgWidth = 220;
        var colorPackImgHeight = 170;

        // color pack title settings
        var colorPackTitleImg = palette2[0];
        var colorPackTitleWidth = 250;
        var colorPackTitleHeight = 63;
        var colorPackTitleX = canvas.width / 2 - colorPackTitleWidth / 2;
        var colorPackTitleY = colorPackImgY + colorPackImgHeight;

        // continue button settings
        var continueImg = document.getElementById("continueButton");
        var continueImgX = 85;
        var continueImgY = 360;
        var continueImgWidth = 150;
        var continueImgHeight = 75;

        ctx.fillStyle = "#000000";
        ctx.font = fontSize + "px monospace";
        ctx.textAlign = "center";
        // msg 1
        ctx.fillText(msg, msgX, msgY);
        // msg 2
        ctx.fillText(msg2, msg2X, msg2Y);
        ctx.textAlign = "start";
        // color pack image
        ctx.drawImage(colorPackImg, colorPackImgX, colorPackImgY, colorPackImgWidth, colorPackImgHeight);
        // color pack title
        ctx.drawImage(colorPackTitleImg, colorPackTitleX, colorPackTitleY, colorPackTitleWidth, colorPackTitleHeight);
        // continue
        ctx.drawImage(continueImg, continueImgX, continueImgY, continueImgWidth, continueImgHeight);

        canvas.addEventListener("mouseup", clicked, false);
    }
    else {
        gameResult();
    }

    function clicked(event) {
        var x = (event.x - leftMargin) / widthFactor;
        var y = (event.y - topMargin) / heightFactor;

        if (x > 85 && x < 235 && y > 360 && y < 435) {
            canvas.removeEventListener("mouseup", clicked, false);
            gameResult();
        }
    }
}

function unlockBeerGoggles() {
    if (gamesHex === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var fontSize = 20 * widthFactor;

        // msg 1 settings
        var msg = "You've unlocked";
        var msgX = canvas.width / 2;
        var msgY = 60;

        // msg 2 settings
        var msg2 = "a new colour pack!";
        var msg2X = canvas.width / 2;
        var msg2Y = msgY + fontSize;

        // color pack panel settings
        var colorPackImg = palette3[1];
        var colorPackImgX = 50;
        var colorPackImgY = msg2Y + 30;
        var colorPackImgWidth = 220;
        var colorPackImgHeight = 170;

        // color pack title settings
        var colorPackTitleImg = palette3[0];
        var colorPackTitleWidth = 250;
        var colorPackTitleHeight = 63;
        var colorPackTitleX = canvas.width / 2 - colorPackTitleWidth / 2;
        var colorPackTitleY = colorPackImgY + colorPackImgHeight;

        // continue button settings
        var continueImg = document.getElementById("continueButton");
        var continueImgX = 85;
        var continueImgY = 360;
        var continueImgWidth = 150;
        var continueImgHeight = 75;

        ctx.fillStyle = "#000000";
        ctx.font = fontSize + "px monospace";
        ctx.textAlign = "center";
        // msg 1
        ctx.fillText(msg, msgX, msgY);
        // msg 2
        ctx.fillText(msg2, msg2X, msg2Y);
        ctx.textAlign = "start";
        // color pack image
        ctx.drawImage(colorPackImg, colorPackImgX, colorPackImgY, colorPackImgWidth, colorPackImgHeight);
        // color pack title
        ctx.drawImage(colorPackTitleImg, colorPackTitleX, colorPackTitleY, colorPackTitleWidth, colorPackTitleHeight);
        // continue
        ctx.drawImage(continueImg, continueImgX, continueImgY, continueImgWidth, continueImgHeight);

        canvas.addEventListener("mouseup", clicked, false);
    }
    else {
        gameResult();
    }

    function clicked(event) {
        var x = (event.x - leftMargin) / widthFactor;
        var y = (event.y - topMargin) / heightFactor;

        if (x > 85 && x < 235 && y > 360 && y < 435) {
            canvas.removeEventListener("mouseup", clicked, false);
            gameResult();
        }
    }
}