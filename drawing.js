// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set initial drawing properties
ctx.strokeStyle = 'black'; // Set stroke color
ctx.lineWidth = 3; // Set line width
ctx.lineCap = 'round'; // Set line cap style

// Variables to store mouse coordinates
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let isDrawingMode = true; // True for drawing, false for erasing

// Event listeners for mouse down, move, and up
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return; // Exit if not drawing
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // Start from
    ctx.lineTo(e.offsetX, e.offsetY); // Go to
    ctx.stroke(); // Draw the line
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Update last coordinates
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

// Toggle between drawing and erasing modes
const drawBtn = document.getElementById('drawBtn');
const eraseBtn = document.getElementById('eraseBtn');

drawBtn.addEventListener('click', () => {
    isDrawingMode = true;
    ctx.strokeStyle = 'black'; // Set stroke color to black for drawing
    canvas.style.cursor = 'crosshair'; // Change cursor to crosshair
});

eraseBtn.addEventListener('click', () => {
    isDrawingMode = false;
    ctx.strokeStyle = 'white'; // Set stroke color to white for erasing
    canvas.style.cursor = 'url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Eraser_icon.svg"), auto'; // Change cursor to eraser
});