// Select color input
const color_picked = document.getElementById('colorPicker');

// Select size input
const rows = document.getElementById('inputHeight');
const columns = document.getElementById('inputWidth');
let rowNumber = parseInt(rows.value, 10);
let columnNumber = parseInt(columns.value, 10);

// Select table element
const canvas = document.getElementById('pixelCanvas');

// Select submit button
const evt = document.getElementById('sizePicker');

// Define function to update color in colorPicker
function updateColor(e) {
    color_picked.value = e.target.value;
}

// Define functions to update size variables
function updateRowValue(e) {
    rows.value.textContent = e.target.value;
    rowNumber = parseInt(rows.value, 10);
}

function updateColumnValue(e) {
    columns.value.textContent = e.target.value;
    columnNumber = parseInt(columns.value, 10);
}

// Function to clear out historical grid (if any)
function clearGrid() {
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
    } 
}

// Define function makeGrid() to draw table based on size inputs
function makeGrid(rowNum, columnNum) {
    clearGrid();
    
    // Create a <tbody> element
    let canvasBody = document.createElement('tbody');

    // Create cells within table grid
    for (let r = 1; r <=rowNum; r++) {
        let row = document.createElement('tr');
        for (let c = 1; c<=columnNum; c++) {
            const newCell = document.createElement('td');
            // may need to add event listener here for individual cell
            newCell.addEventListener('click', function respondToTheClick(evt) {
                newCell.style.backgroundColor = color_picked.value;
            });
            row.appendChild(newCell);
        }
        canvasBody.appendChild(row);
    }

    // Append the canvasBody grid to the canvas table
    canvas.appendChild(canvasBody);
}

// When size is submitted by the user, call makeGrid function
function formSubmit(event) {
    makeGrid(rowNumber, columnNumber);
    event.preventDefault();
  };

// Add event listeners for inputs and submit button
document.addEventListener('DOMContentLoaded', function() {
    rows.addEventListener('input', updateRowValue);
    columns.addEventListener('input', updateColumnValue);
    color_picked.addEventListener('input', updateColor);
    evt.addEventListener('submit', formSubmit);
});
