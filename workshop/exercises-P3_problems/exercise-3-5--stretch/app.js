// Exercise 3-5 - the Custom Grid
// ------------

// Hints
// - use the 'blur' event
// - one event listener per input
// - If you need extra hints, see somebody... :)
const board = document.querySelector('.board');
board.style.width = '600px';
board.style.height = '600px';

const colInput = document.querySelector('.columns-input');
const rowInput = document.querySelector('.rows-input');

function createGrid() {
    let cols = colInput.value;
    let rows = rowInput.value;
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 0; i < cols * rows; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }
}
colInput.addEventListener('change', createGrid);
rowInput.addEventListener('change', createGrid);

