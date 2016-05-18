var palette = ["#998365", "#56FF6F", "#FF80DC", "#FEF216"];
var tiles;

function drawHexagon() {
    var offset_y = 0;
    var hexagons = document.getElementsByClassName("hexagon");
    for (var i in hexagons) {
        hexagons[i].addEventListener("click", tilesClicked);
    }
};

function tilesClicked(event) {
    var x = event.target;
    var color = getComputedStyle(x).backgroundColor;
    var nextColor = getNextColor(color);

}

function getNextColor() {}