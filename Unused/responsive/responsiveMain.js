var count = 0;
// All audio crap BEGIN
var sfx1 = new Audio("audio/testSfx1.mp3");
window.onload = function initBgmVolume(){
    var bgmHTML = document.getElementById("bgm");
    bgmHTML.volume = document.getElementById("bgmSlider").value;
}

function setBgmVolume() {
    var bgmHTML = document.getElementById("bgm");
    bgmHTML.volume = document.getElementById("bgmSlider").value;
}
function alertBGM(){
    alert(document.getElementById("bgmSlider").value);
}

function muteBgm() {
    var bgmHTML = document.getElementById("bgm");
    bgmHTML.volume = 0;
    document.getElementById("bgmSlider").value = 0;
}

function setSfxVolume() {
    sfx1.volume = document.getElementById("sfxSlider").value;
}
function actSfx1(){
    sfx1.play();
}


// All audio crap END
function selectShape() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var shape = document.getElementById("selectShape");
    shape.style.display = "block";
} function shapeSelectBack() {
    var shape = document.getElementById("selectShape");
    shape.style.display = "none";
    var home = document.getElementById("home");
    home.style.display = "block";
} function easterEgg() {
    count++;
    if(count == 10) {
        var home = document.getElementById("home");
        home.style.display = "none";
        var shape = document.getElementById("easterEgg");
        shape.style.display = "block";
        count = 0;
    }
} function backEaster() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var shape = document.getElementById("easterEgg");
    shape.style.display = "none";
} function selectDifficulty() {
    var shape = document.getElementById("selectShape");
    shape.style.display = "none";
    var difficulty = document.getElementById("difficulty");
    difficulty.style.display = "block";
} function difficultySelectBack() {
    var shape = document.getElementById("selectShape");
    shape.style.display = "block";
    var difficulty = document.getElementById("difficulty");
    difficulty.style.display = "none";
} function selectLeaderboardShape() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "block";
} function selectLeaderboardEasy() {
    var leaderboardSquareEasy = document.getElementById("leaderboardSquareEasy");
    leaderboardSquareEasy.style.display = "block";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "none";
} function leaderboardSquareEasyBack() {
    var leaderboardSquareEasy = document.getElementById("leaderboardSquareEasy");
    leaderboardSquareEasy.style.display = "none";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "block";
} function leaderboardEasyToHard() {
    var leaderboardSquareEasy = document.getElementById("leaderboardSquareEasy");
    leaderboardSquareEasy.style.display = "none";
    var leaderboardSquareHard = document.getElementById("leaderboardSquareHard");
    leaderboardSquareHard.style.display = "block";
} function leaderboardEasyToMedium() {
    var leaderboardSquareEasy = document.getElementById("leaderboardSquareEasy");
    leaderboardSquareEasy.style.display = "none";
    var leaderboardSquareMedium = document.getElementById("leaderboardSquareMedium");
    leaderboardSquareMedium.style.display = "block";
} function leaderboardSquareMediumBack() {
    var leaderboardSquareMedium = document.getElementById("leaderboardSquareMedium");
    leaderboardSquareMedium.style.display = "none";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "block";
} function leaderboardMediumToEasy() {
    var leaderboardSquareEasy = document.getElementById("leaderboardSquareEasy");
    leaderboardSquareEasy.style.display = "block";
    var leaderboardSquareMedium = document.getElementById("leaderboardSquareMedium");
    leaderboardSquareMedium.style.display = "none";
} function leaderboardMediumToHard() {
    var leaderboardSquareHard = document.getElementById("leaderboardSquareHard");
    leaderboardSquareHard.style.display = "block";
    var leaderboardSquareMedium = document.getElementById("leaderboardSquareMedium");
    leaderboardSquareMedium.style.display = "none";
} function leaderboardSquareHardBack() {
    var leaderboardSquareHard = document.getElementById("leaderboardSquareHard");
    leaderboardSquareHard.style.display = "none";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "block";
} function leaderboardHardToMedium() {
    var leaderboardSquareHard = document.getElementById("leaderboardSquareHard");
    leaderboardSquareHard.style.display = "none";
    var leaderboardSquareMedium = document.getElementById("leaderboardSquareMedium");
    leaderboardSquareMedium.style.display = "block";
} function leaderboardHardToEasy() {
    var leaderboardSquareHard = document.getElementById("leaderboardSquareHard");
    leaderboardSquareHard.style.display = "none";
    var leaderboardSquareEasy = document.getElementById("leaderboardSquareEasy");
    leaderboardSquareEasy.style.display = "block";
} function leaderboardShapeBack() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "none";
} function selectSettings() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
} function settingBack() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var settings = document.getElementById("settings");
    settings.style.display = "none";
} function backPause() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var pause = document.getElementById("pause");
    pause.style.display = "none";
} function selectColourPack() {
    var colourPack = document.getElementById("jungleLove");
    colourPack.style.display = "block";
    var settings = document.getElementById("settings");
    settings.style.display = "none";
} function jungleBack() {
    var colourPack = document.getElementById("jungleLove");
    colourPack.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
} function ghostsBack() {
    var colourPack = document.getElementById("spookyGhosts");
    colourPack.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
}function icecreamBack() {
    var colourPack = document.getElementById("iceCream");
    colourPack.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
}function beerBack() {
    var colourPack = document.getElementById("beerGoogles");
    colourPack.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
}function backstreetBack() {
    var colourPack = document.getElementById("backstreet");
    colourPack.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
} function jungleToGhosts() {
    var jungle = document.getElementById("jungleLove");
    jungle.style.display = "none";
    var ghosts = document.getElementById("spookyGhosts");
    ghosts.style.display = "block";
} function jungleToBackstreet() {
    var jungle = document.getElementById("jungleLove");
    jungle.style.display = "none";
    var backstreet = document.getElementById("backstreet");
    backstreet.style.display = "block";
} function ghostToJungle() {
    var jungle = document.getElementById("jungleLove");
    jungle.style.display = "block";
    var ghost = document.getElementById("spookyGhosts");
    ghost.style.display = "none";
} function ghostToIceCream() {
    var ghost = document.getElementById("spookyGhosts");
    ghost.style.display = "none";
    var iceCream = document.getElementById("iceCream");
    iceCream.style.display = "block";
} function iceCreamToGhosts() {
    var ghost = document.getElementById("spookyGhosts");
    ghost.style.display = "block";
    var iceCream = document.getElementById("iceCream");
    iceCream.style.display = "none";
} function iceCreamToBeer() {
    var beer = document.getElementById("beerGoogles");
    beer.style.display = "block";
    var iceCream = document.getElementById("iceCream");
    iceCream.style.display = "none";
} function beerToIceCream() {
    var beer = document.getElementById("beerGoogles");
    beer.style.display = "none";
    var iceCream = document.getElementById("iceCream");
    iceCream.style.display = "block";
} function beerToBackstreet() {
    var beer = document.getElementById("beerGoogles");
    beer.style.display = "none";
    var backstreet = document.getElementById("backstreet");
    backstreet.style.display = "block";
} function backstreetToBeer() {
    var beer = document.getElementById("beerGoogles");
    beer.style.display = "block";
    var backstreet = document.getElementById("backstreet");
    backstreet.style.display = "none";
} function backstreetToJungle() {
    var jungle = document.getElementById("jungleLove");
    jungle.style.display = "block";
    var backstreet = document.getElementById("backstreet");
    backstreet.style.display = "none";
} function selectAudio() {
    var audio = document.getElementById("audio");
    audio.style.display = "block";
    var settings = document.getElementById("settings");
    settings.style.display = "none";
} function audioBack() {
    sfx1.play();
    var audio = document.getElementById("audio");
    audio.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";

}