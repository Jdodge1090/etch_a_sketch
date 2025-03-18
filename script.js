const container = document.getElementById('container');
const radioButtons = document.querySelectorAll('input[type="radio"]');
let currentColor = document.getElementById('color').value;
let isDragging = false;

// Add event listener for color changes
document.getElementById('color').addEventListener('change', (e) => {
    currentColor = e.target.value;
});

// Add mouse event listeners to document
document.addEventListener('mousedown', () => isDragging = false);
document.addEventListener('mousemove', () => isDragging = true);

// Add event listeners to radio buttons
radioButtons.forEach(button => {
    button.addEventListener('change', (e) => {
        createGrid(parseInt(e.target.value));
    });
});

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    // Create new grid
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            
            cell.addEventListener('click', (e) => {
                if (!isDragging) {
                    cell.style.backgroundColor = currentColor;
                }
            });
            
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

// Initialize with default grid (24x24)
createGrid(24);
radioButtons[0].checked = true;