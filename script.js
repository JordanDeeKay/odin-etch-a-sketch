let gridSize = 600;
let rows = 16;
let cols = 16;

const board = document.querySelector('#board');
board.style.width = `${gridSize}px`;
board.style.height = `${gridSize}px`;

const setDimensionButton = document.querySelector('#set-dimension-button');
setDimensionButton.addEventListener('click', setGridCells);

const initGridCells = () => {
    for (let i = 0; i < rows * cols; i++) {
        const gridComponent = document.createElement('div');

        gridComponent.style.width = `${(gridSize / cols) - 2}px`;
        gridComponent.style.height = `${(gridSize / rows) - 2}px`;
        gridComponent.classList.add('grid-component');

        board.appendChild(gridComponent);

        gridComponent.addEventListener('mouseover', setBackgroundColor);
    }
}

function setBackgroundColor() {
    this.style.backgroundColor = 'black';   
}

function removeGridCells() {
    board.removeChild(gridComponent);
}

function setGridCells() {
    let gridDimension = prompt('Please enter the dimension for the grid. (e.g. 25 for a 25x25 grid. Limit 100x100)');
    if (gridDimension > 100) {
        alert('The limit is 100 cells per side. Please enter a valid dimension number.')
    } else {
        rows = gridDimension;
    cols = gridDimension;
    board.replaceChildren();
    initGridCells();
    }
}

initGridCells();