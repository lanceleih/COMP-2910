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

        ctx.fillStyle = "#000000";
        ctx.font = "30px monospace";
        ctx.beginPath();
        ctx.fillText("You've unlocked", 20, 200);
        // color pack image
        ctx.drawImage(palette1[1], 50, 220, 220, 170);
        // color pack title
        ctx.drawImage(palette1[0], 45, 410, 250, 63);
        // go to settings and start using your new pack
        // continue

        canvas.addEventListener("mouseup", clickAnywhere, false);
    }
    else {
        gameResult();
    }

    function clickAnywhere(event) {
        canvas.removeEventListener("mouseup", clickAnywhere, false);
        gameResult();
    }
}

function unlockPackmansGhosts() {
    if (gamesDia === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#000000";
        ctx.font = "30px monospace";
        ctx.beginPath();
        ctx.fillText("You've unlocked", 20, 200);
        // color pack image
        ctx.drawImage(palette2[1], 50, 220, 220, 170);
        // color pack title
        ctx.drawImage(palette2[0], 45, 410, 250, 63);
        // go to settings and start using your new pack
        // continue

        canvas.addEventListener("mouseup", clickAnywhere, false);
    }
    else {
        gameResult();
    }

    function clickAnywhere(event) {
        canvas.removeEventListener("mouseup", clickAnywhere, false);
        gameResult();
    }
}

function unlockBeerGoggles() {
    if (gamesHex === 1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#000000";
        ctx.font = "30px monospace";
        ctx.beginPath();
        ctx.fillText("You've unlocked", 20, 200);
        // color pack image
        ctx.drawImage(palette3[1], 50, 220, 220, 170);
        // color pack title
        ctx.drawImage(palette3[0], 45, 410, 250, 63);
        // go to settings and start using your new pack
        // continue

        canvas.addEventListener("mouseup", clickAnywhere, false);
    }
    else {
        gameResult();
    }

    function clickAnywhere(event) {
        canvas.removeEventListener("mouseup", clickAnywhere, false);
        gameResult();
    }
}