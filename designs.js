const sizePicker = document.getElementById("sizePicker");
// Select size input
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");

// Select color input
const color = document.getElementById("colorPicker");

// Select pixel cavas
const pixelCanvas = document.getElementById("pixelCanvas");

function clearGrid() {
  const everyLine = document.querySelectorAll("tr");
  everyLine.forEach((line) => {
    line.remove();
  });
}

function makeGrid(l) {
  l.preventDefault();
  clearGrid();

  const height = inputHeight.value;
  const width = inputWidth.value;
  // nested loop
  for (let p = 1; p <= height; p++) {
    //row element is created
    const line = document.createElement("tr");
    for (let m = 1; m <= width; m++) {
      // create column element
      const section = document.createElement("td");
      section.id = "section-p-m";
      // append it to row element
      line.appendChild(section);
    }
    // append row element to table(i.e pixelCanvas) element
    pixelCanvas.appendChild(line);
  }
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid);

pixelCanvas.addEventListener("click", function (l) {
  l.target.style.backgroundColor = color.value;
});
