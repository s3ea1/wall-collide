// mouse over by abdi

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let rect = {
  x: 100,
  y: 100,
  h: 100,
  w: 200,
  color: "grey",
};

let cir = {
  color: "grey",
  r: 75,
  x: 650,
  y: 300,
};

let frameCount = 0;

let mouseX, mouseY;

requestAnimationFrame(draw);
function draw() {
  // Update Variables
  frameCount++;

  // Detect if Mouse is in Rectangle
  if (
    mouseX >= rect.x &&
    mouseX <= rect.x + rect.w &&
    mouseY >= rect.y &&
    mouseY <= rect.y + rect.h
  ) {
    // Change every second (60 frames per second)
    if (frameCount % 30 === 2) {
      rect.x += Math.random() * 10 - 5;
      rect.y += Math.random() * 10 - 5;
      rect.color =
        "rgb(" +
        Math.random() * 255 +
        ", " +
        Math.random() * 255 +
        " ," +
        Math.random() * 255 +
        ")";
    }
  }

  // Calculate distance between mouse and circle center
  let mouseDis = Math.sqrt((mouseX - cir.x)  ,2 + (mouseY - cir.y)  ,2);

  // Detect if Mouse is in Circle
  if (mouseDis < cir.r) {
    if (frameCount % 30 === 2) {
      cir.x += Math.random() * 10 - 5;
      cir.y += Math.random() * 10 - 5;
      cir.color =
        "rgb(" +
        Math.random() * 255 +
        ", " +
        Math.random() * 255 +
        " ," +
        Math.random() * 255 +
        ")";
    }
  }

  // Detect if Mouse is in Circle

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Rectangle
  ctx.fillStyle = rect.color;
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);

  // Draw Circle
  ctx.fillStyle = cir.color;
  ctx.beginPath();
  ctx.arc(cir.x, cir.y, cir.r, 0, 2 * Math.PI);
  ctx.fill();

  // Request Animation Frame
  requestAnimationFrame(draw);
}
// Event Key
document.addEventListener("mousemove", mouseMoveHandler);

// Getting mouse coordinates
function mouseMoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}