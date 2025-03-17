// Set variables
const container = document.getElementById('container');
const colorSelect = document.getElementById('color');
let isClicked = false;

// Create function to inject the grid
function createGrid(size) {
    for(let i = 0; i < size; i++) {
       const row = document.createElement('div');
       row.classList.add('grid-row');

       for(let j = 0; j < size; j++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        // Add click event listener to each cell as it's created
        cell.addEventListener('click', () => {
            const selectedColor = colorSelect.value;
            cell.style.backgroundColor = selectedColor;
        });
        row.appendChild(cell);
       };
       container.appendChild(row);
    };
};

// Inject a 16x16 grid
createGrid(16);