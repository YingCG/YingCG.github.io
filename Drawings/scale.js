const canvas = document.getElementById("tree-in-scale");
const ctx = canvas.getContext("2d");

// Scenario: Map 0-50m to 0-500px (10px per 1m)
const scaleFactor = 10;
const realWorldWidth = 50;
const realWorldHeight = 30;

// Set Canvas Size
canvas.width = realWorldWidth * scaleFactor;
canvas.height = realWorldHeight * scaleFactor;

// Draw a 20m x 10m rectangle at (5,5)
ctx.fillStyle = "blue";
ctx.fillRect(
  5 * scaleFactor,
  5 * scaleFactor,
  20 * scaleFactor,
  10 * scaleFactor,
);
