let e1, e2, e3;


function setup() {
  createCanvas(500, 500);
  noStroke();
  e1 = new Ball(500/4, 100, 120);
  e2 = new Ball(500/2, 100, 80);
}

function draw() {
  background(150);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e1.draw();
  e2.draw();
}

