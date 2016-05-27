/* Javascript for the Form */
function changeValues() {
    nameEntered();

    document.getElementById("time").value = formatTime(elapsedTime);

    if (shape == 0) {
        document.getElementById("shape").value = "square";
    } else if (shape == 1) {
        document.getElementById("shape").value = "diamond";
    } else if (shape == 2) {
        document.getElementById("shape").value = "hexagon";
    }

    if (difficulty == 0) {
        document.getElementById("difficulty").value = "easy";
    } else if (difficulty == 1) {
        document.getElementById("difficulty").value = "medium";
    } else if (difficulty == 2) {
        document.getElementById("difficulty").value = "hard";
    }

}
