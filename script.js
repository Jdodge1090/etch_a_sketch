// Set variables
const container = document.getElementById('container');

// Create function to inject the grid
function createGrid(size) {
    for(let i = 0; i < size; i++) {
       const row = document.createElement('div');
       row.classList.add('grid-row');

       for(let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        row.appendChild(cell);
       };
       container.appendChild(row);
    };
};

// Inject a 16x16 grid
createGrid(16);