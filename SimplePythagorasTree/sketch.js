function drawPyTree(x, y, wide, high, level) {
  if (level > 0) {
    rect(x, y, wide, high);

    push();
    translate(wide / 2, -high);
    rotate(PI / 4);
    drawPyTree(x, y, wide * 0.707, high * 0.707, level - 1);
    pop();

    translate(-wide / 2, -high);
    rotate(-PI / 4);

    drawPyTree(x, y, wide * 0.707, high * 0.707, level - 1);
  }
}

function setup() {
  createCanvas(600, 600);
  background(255);
  stroke(0);
  noFill();
  smooth();
  rectMode(CENTER);
  translate(width / 2, height - 200);
  drawPyTree(0.0, 0.0, 100, 100, 9);
}
