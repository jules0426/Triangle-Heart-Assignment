// Triangle Heart Asgn Solution

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // Draw all GREY Triangles
  fillTriangle (0, 100, 100, 0, 100, 100, "grey");
  fillTriangle (200, 100, 300, 0, 300, 100, "grey");
  fillTriangle (100, 100, 100, 200, 200, 100, "grey");
  fillTriangle (300, 100, 300, 200, 400, 200, "grey");
  fillTriangle (100, 200, 100, 300, 200, 200, "grey");
  fillTriangle (200, 300, 200, 400, 300, 300, "grey");

  // Draw all PINK Triangles
  fillTriangle (100, 0, 200, 100, 100, 100, "pink");
  fillTriangle (300, 100, 400, 100, 400, 200, "pink");
  fillTriangle (0, 100, 100, 200, 0, 200, "pink");
  fillTriangle (200, 200, 300, 200, 300, 300, "pink");
  fillTriangle (100, 300, 200, 300, 200, 400, "pink");

  // Draw all RED Triangles
  fillTriangle (300, 0, 400, 100, 300, 100, "red");
  fillTriangle (0, 100, 100, 100, 100, 200, "red");
  fillTriangle (200, 100, 300, 100, 200, 200, "red");
  fillTriangle (200, 200, 200, 300, 100, 300, "red");
  fillTriangle (300, 200, 400, 200, 300, 300, "red");

  // Draw all YELLOW Triangles
  ctx.fillStyle = "yellow";
  fillTriangle (200, 100, 200, 200, 100, 200, "yellow");
  fillTriangle (300, 100, 300, 200, 200, 200, "yellow");
  fillTriangle (0, 200, 100, 200, 100, 300, "yellow");
  fillTriangle (200, 200, 300, 300, 200, 300, "yellow");
}

function fillTriangle (x1, y1, x2, y2, x3, y3, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.fill();
}
