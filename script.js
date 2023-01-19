const grid = document.querySelector('.grid');
const btn = document.querySelector('.sizeBtn');
let gridSize = 0;

// Create the grid
function createGrid (gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let rows = 0; rows < gridSize; rows++) {
        for (let columns = 0; columns < gridSize; columns++) {
            const square = document.createElement('div');
            square.addEventListener('mouseover', changeColor);
            square.className = 'square';
            square.style.backgroundColor = 'white';
            grid.append(square);
        }
    }
    (".grid").width(960/gridSize);
    (".grid").height(960/gridSize);
}

// Button prompt for gridSize
btn.onclick = function changeSize () {
    gridSize = prompt('Choose your grid size');
    erase();
    createGrid(gridSize);
}

// Delete Grid
function erase() {
    const gridItems = document.querySelectorAll('.grid > div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.style.backgroundColor = 'white';
        gridItem.style.opacity = '1';
        gridItem.count = 0;
    });
}

// Change color on mouseover
function changeColor () {
    this.style.backgroundColor = 'black';
}
// Default grid size
createGrid(16);