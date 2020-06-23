// Exercise 3-4 - The GRID
// ------------
let col = 10;
let row = 10;

const board = document.querySelector('.board');
board.style.width = '600px';
board.style.height = '600px';

board.style.gridTemplateRows = `repeat(${row}, 1fr)`;
board.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

for (let i = 0; i < col * row; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
}