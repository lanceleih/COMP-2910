function selectShape() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var shape = document.getElementById("selectShape");
    shape.style.display = "block";
}
function shapeSelectBack() {
    var shape = document.getElementById("selectShape");
    shape.style.display = "none";
    var home = document.getElementById("home");
    home.style.display = "block";
}
function easterEgg() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var shape = document.getElementById("easterEgg");
    shape.style.display = "block";
}
function backEaster() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var shape = document.getElementById("easterEgg");
    shape.style.display = "none";
}
function selectDifficulty() {
    var shape = document.getElementById("selectShape");
    shape.style.display = "none";
    var difficulty = document.getElementById("difficulty");
    difficulty.style.display = "block";
}
function difficultySelectBack() {
    var shape = document.getElementById("selectShape");
    shape.style.display = "block";
    var difficulty = document.getElementById("difficulty");
    difficulty.style.display = "none";
}
function selectLeaderboardShape() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "block";
}
function leaderboardShapeBack() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var leaderboardShape = document.getElementById("leaderboardShape");
    leaderboardShape.style.display = "none";
}
function selectSettings() {
    var home = document.getElementById("home");
    home.style.display = "none";
    var settings = document.getElementById("settings");
    settings.style.display = "block";
}
function settingBack() {
    var home = document.getElementById("home");
    home.style.display = "block";
    var settings = document.getElementById("settings");
    settings.style.display = "none";
}