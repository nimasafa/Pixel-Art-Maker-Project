// Select color input
let color_picked = document.getElementById('colorPicker').value;
/* This code may be unnecesary now:
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const urlrows = urlParams.get('rows');
const urlcolumns = urlParams.get('columns'); */

// Select size input
const rows = document.getElementById('inputHeight');
const columns = document.getElementById('inputWidth');

// Select table element
const table = document.getElementById('pixelCanvas');

// Select submit button
const evt = document.getElementById('sizePicker');

// Define functions to update size variables
function updateRowValue(e) {
    rows.value.textContent = e.target.value;
}

function updateColumnValue(e) {
    columns.value.textContent = e.target.value;
}


// Define function makeGrid() to draw table based on size inputs
function makeGrid(rowNumber, columnNumber) {
for (let r = 1; r <=rowNumber; r++) {
    for (let c = 1; c<=columnNumber; c++) {
        const newCell = document.createElement('tr');
        // may need to add event listener here for individual cell
        table.appendChild(newCell);
    }
}
}

// When size is submitted by the user, call makeGrid(rowNum, columnNum)
function formSubmit(event) {
    console.log("Form Submitted!");
    //Need to fix makeGrid function
    //makeGrid(rowNum, columnNum);
    event.preventDefault();
  };

// Add event listeners for inputs and submit button
document.addEventListener('DOMContentLoaded', function() {
    rows.addEventListener('input', updateRowValue);
    columns.addEventListener('input', updateColumnValue);
    evt.addEventListener('submit', formSubmit);
});
