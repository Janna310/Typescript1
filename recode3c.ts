const generateRandom: number = Math.floor(Math.random() * 15);

//arrays of any
const cell: any = document.querySelectorAll(".cell");
// const cell: [any] = document.querySelectorAll(".cell");
// any kind of object
// const cell: Object<any> = document.querySelectorAll(".cell");
// const cell: any = document.querySelectorAll(".cell");

interface ClickedBox{
    style: {backgroundColor: string};
    addEventListener: Function;
}

interface ChangeCellColor{
    backgroundColor: string;
    addEventListener: Function;
    removeEventListener: Function;
    push: Function;
    contains: Function;
    e: boolean;
    target:any;
}

const it: any = document.querySelectorAll(".cell")[generateRandom];
it.setAttribute("id", "it");

const clickedBox: ClickedBox[] = [];

const changeCellColor = (e: ChangeCellColor) => {
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "green";
    clickedBox.push(e.target);
  }

  if (e.target.id === "it") {
    for (let cell of clickedBox) {
      cell.style.backgroundColor = "yellow";
    }
    e.target.style.backgroundColor = "red";
      for (let i = 0; i < cell.length; i++) {
        cell[i].removeEventListener("click", changeCellColor);
      }
  }
};
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", changeCellColor);
}