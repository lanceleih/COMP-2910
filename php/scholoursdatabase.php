<!DOCTYPE html>

<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="utf-8"/>
    <title>Scholours Game</title>
    <link rel="stylesheet" type="text/css" href="../css/base.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="../js/globalvariables.js"></script>
    <script src="../js/utility.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/game.js"></script>
    <script src="../js/achievement.js"></script>
    <script src="../js/settings.js"></script>
    <script src="../js/audio.js"></script>
    <script src="../js/colourpacksettings.js"></script>
    <script src="../js/leaderboard.js"></script>
    <script src="../js/selectmenu.js"></script>
    <script src="../js/diamond.js"></script>
    <script src="../js/square.js"></script>
    <script src="../js/hexagon.js"></script>
    <script src="../js/gamemenu.js"></script>
    <script src="../js/colourpack.js"></script>
    <script src="../js/timer.js"></script>
    <script src="../js/form.js"></script>
    <script src="../js/validategame.js"></script>
    <script src="../js/tutorial.js"></script>
</head>
<body onload="scholours()">
    <div id="main">
        <canvas id="mainCanvas" width="320" height="480"></canvas>
    </div>
    <br>
    <div id="images">
        <!-- Images needed for the home page -->
        <img id="cube" src="../img/icons/cube.png" alt="logo" width="0" height="0">
        <img id="logo" src="../img/title/title.png" alt="logo" width="0" height="0">
        <img id="slogan" src="../img/title/slogan.png" alt="slogan" width="0" height="0">
        <img id="playButton" src="../img/icons/play.png" alt="play button" height="0" width="0">
        <img id="settingsButton" src="../img/icons/settings.png" alt="settings button" height="0" width="0">
        <img id="leaderboardButton" src="../img/icons/scores.png" alt="leaderboard button" height="0" width="0">
        <img id="backButton" src="../img/icons/back.png" alt="back button" height="0" width="0">

        <!-- Images for the shape page-->
        <img id="shapeTitle" src="../img/title/shapetitle.png" alt="shape title" height="0" width="0">
        <img id="squareButton" src="../img/icons/square.png" alt="square shape button" height="0" width="0">
        <img id="diamondButton" src="../img/icons/polygon.png" alt="diamond shape button" height="0" width="0">
        <img id="hexButton" src="../img/icons/hexa.png" alt="hexagon shape button" height="0" width="0">
        <img id="tutorial" src="../img/icons/tutorial.png" alt="tutorial button" height="0" width="0">

        <!-- Images for the tutorial page-->
        <img id="1" src="../img/tutorial/firsttutorial.jpg" alt="first image" height="0" width="0">
        <img id="2" src="../img/tutorial/secondtutorial.jpg" alt="second image" height="0" width="0">
        <img id="3" src="../img/tutorial/thirdtutorial.jpg" alt="thrid image" height="0" width="0">

        <!--Images needed for difficulty page-->
        <img id="difficultyTitle" src="../img/title/difficultytitle.png" alt="difficulty title" height="0" width="0">
        <img id="easyButton" src="../img/icons/easy.png" alt="easy difficulty button" height="0" width="0">
        <img id="mediumButton" src="../img/icons/medium.png" alt="medium difficulty button" height="0" width="0">
        <img id="hardButton" src="../img/icons/hard.png" alt="hard difficulty button" height="0" width="0">

        <!--Images needed for game page-->
        <img id="pauseButton" src="../img/icons/paused.png" alt="pause button" height="0" width="0">
        <img id="timerImage" src="../img/icons/bgtimer.png" alt="timer image" height="0" width="0">

        <!-- Images needed for pause page -->
        <img id="pausedTitle" src="../img/title/pausedtitle.png" alt="paused title" width="0" height="0">
        <img id="resumeButton" src="../img/icons/resume.png" alt="resume button" width="0" height="0">
        <img id="restartButton" src="../img/icons/restart.png" alt="restart button" width="0" height="0">
        <!--<img id="settingsButton" width="0" height="0" src="img/icons/settings.png" alt="settings">-->
        <img id="menuButton" src="../img/icons/mainmenu.png" alt="menu button" width="0" height="0">

        <!-- Images needed for unlock page-->
        <img id="continueButton" src="../img/icons/continue.png" alt="continue button" width="0" height="0">

        <!--Images needed for result page-->
        <img id="resultTitle" src="../img/title/resulttitle.png" alt="result title" width="0" height="0">

        <!-- Images needed for Settings page -->
        <img id="settingsTitle" src="../img/title/settingstitle.png" alt="settings title" height="0" width="0">
        <img id="audioButton" src="../img/icons/audio.png" alt="audio button" height="0" width="0">
        <img id="colourPackButton" src="../img/icons/colourpacks.png" alt="colourpacks button" height="0" width="0">
        <img id="colourBlindText" src="../img/icons/colourblind.png" alt="colour blind mode" height="0" width="0">

        <!-- Images needed for audio page -->
        <img id="audioTitle" src="../img/title/audiosettings.png" alt="audio title" height="0" width="0">
        <img id="bgmHeader" src="../img/icons/bgmusic.png" alt="bgm header" height="0" width="0">
        <img id="sfxHeader" src="../img/icons/effects.png" alt="sfx header" height="0" width="0">
        <img id="volume1" src="../img/volume/volumeone.png" alt="bgm volume 1" height="0" width="0">
        <img id="volume2" src="../img/volume/volumetwo.png" alt="bgm volume 2" height="0" width="0">
        <img id="volume3" src="../img/volume/volumethree.png" alt="bgm volume 3" height="0" width="0">
        <img id="volume4" src="../img/volume/volumefour.png" alt="bgm volume 4" height="0" width="0">
        <img id="volume5" src="../img/volume/volumefive.png" alt="bgm volume 5" height="0" width="0">

        <img id="volume1Select" src="../img/volume/volumeoneclicked.png" alt="bgm volume 1 Clicked" height="0" width="0">
        <img id="volume2Select" src="../img/volume/volumetwoclicked.png" alt="bgm volume 2 Clicked" height="0" width="0">
        <img id="volume3Select" src="../img/volume/volumethreeclicked.png" alt="bgm volume 3 Clicked" height="0" width="0">
        <img id="volume4Select" src="../img/volume/volumefourclicked.png" alt="bgm volume 4 Clicked" height="0" width="0">
        <img id="volume5Select" src="../img/volume/volumefiveclicked.png" alt="bgm volume 5 Clicked" height="0" width="0">
        <img id="volumeMute" src="../img/volume/mute.png" alt="bgm mute" height="0" width="0">
        <img id="volumeMuteSelect" src="../img/volume/muteclicked.png" alt="bgm mute selected" height="0" width="0">

        <!-- Images needed for Colour Pack page -->
        <img id="colourPackTitle" src="../img/title/choosecolourpack.png" alt="colour pack title" height="0" width="0">
        <img id="leftArrow" src="../img/icons/leftarrow.png" alt="left button" height="0" width="0">
        <img id="rightArrow" src="../img/icons/rightarrow.png" alt="right button" height="0" width="0">
        <img id="paletteTitle0" src="../img/icons/junglelove.png" alt="jungle love" height="0" width="0">
        <img id="paletteTitle1" src="../img/icons/autumn.png" alt="autumn's splendor" height="0" width="0">
        <img id="paletteTitle2" src="../img/icons/pacmanghosts.png" alt="Pacman ghosts" height="0" width="0">
        <img id="paletteTitle3" src="../img/icons/beergoggles.png" alt="Beer Goggles" height="0" width="0">
        <img id="paletteTitle4" src="../img/icons/icecream.png" alt="Ice cream desserts" height="0" width="0">

        <!--Images needed for leaderboard shape page-->
        <img id="leaderboardShapeTitle" src="../img/title/leaderboardtitle.png" alt="leaderboard shape title" height="0" width="0">
        .
        <!--Images needed for leaderboard page-->
        <img id="easyTitle" src="../img/title/difficultyeasytitle.png" alt="leaderboard diffulty easy title" height="0" width="0">
        <img id="mediumTitle" src="../img/title/difficultymediumtitle.png" alt="leaderboard diffulty medium title" height="0" width="0">
        <img id="hardTitle" src="../img/title/difficultyhardtitle.png" alt="leaderboard diffulty hard title" height="0" width="0">

    </div>
<div id="leaderboardInput">
    <iframe name="hiddenFrame" sandbox class="hide"></iframe>
    <form method="post" id="userInput" action="http://scholours.net23.net/php/addscore.php" onsubmit="changeValues()" target="hiddenFrame">
        <input type="text" name="name" id="addName" maxlength="3" size="1">
        <input type="hidden" name="time" id="time">
        <input type="hidden" name="shape" id="shape">
        <input type="hidden" name="difficulty" id="difficulty">
        <input type="submit" name="submit" id="submitButton">
    </form>
</div>
    <div id="easterEgg">
        <img src="../img/icons/back.png" id="easterBack" alt="easter egg back button" onclick="backEaster()" width="100" height="50">
        <br>
        <img id="logoEaster" src="../img/title/title.png" alt="Scholours" width="250" height="50">
        <img src="../img/docwaylon.gif" id="video" alt="easter egg gif" width="300" height="132">
    </div>
<!-- Show Leaderboard -->    
<span id="leaderboardTable"></span>
</body>
</html>
