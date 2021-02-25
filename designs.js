// Select color input
let color_picked = document.getElementById('colorPicker').value;
/* This code may be unnecesary now:
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const urlrows = urlParams.get('rows');
const urlcolumns = urlParams.get('columns'); */

// Select size input
let rows = document.getElementById('inputHeight').value;
let columns = document.getElementById('inputWidth').value;
let rowNum = parseInt(rows, 10);
let columnNum = parseInt(columns, 10);

// Select table element
const table = document.getElementById('pixelCanvas');

// Select submit button
const evt = document.getElementById('sizePicker');

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

// Add event listener to submit button
document.addEventListener('DOMContentLoaded', function() {
    evt.addEventListener('submit', formSubmit);
});
