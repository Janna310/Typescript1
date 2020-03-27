var generateRandom = Math.floor(Math.random() * 15);
//arrays of any
var cell = document.querySelectorAll(".cell");
var it = document.querySelectorAll(".cell")[generateRandom];
it.setAttribute("id", "it");
var clickedBox = [];
var changeCellColor = function (e) {
    if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = "green";
        clickedBox.push(e.target);
    }
    if (e.target.id === "it") {
        for (var _i = 0, clickedBox_1 = clickedBox; _i < clickedBox_1.length; _i++) {
            var cell_1 = clickedBox_1[_i];
            cell_1.style.backgroundColor = "yellow";
        }
        e.target.style.backgroundColor = "red";
        for (var i = 0; i < cell.length; i++) {
            cell[i].removeEventListener("click", changeCellColor);
        }
    }
};
for (var i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", changeCellColor);
}
