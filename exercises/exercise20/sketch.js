let theEye, theEye2;


function setup() {
  createCanvas(500, 500);
  noStroke();
  theEye = new Ball(500/4, 100, 120);
  theEye2 = new Ball(500/2, 100, 80);
}

function draw() {
  background(150);
  theEye.update(mouseX, mouseY);
  theEye2.update(mouseX, mouseY);
  theEye.draw();
  theEye2.draw();
}

