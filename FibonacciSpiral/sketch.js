var numLevel = 16;
var phi;

function setup() {
  createCanvas(760, 760);
  colorMode(HSB, 360, 100, 100);
  rectMode(CORNER);
  ellipseMode(CORNER);
  noFill();
  background(0, 0, 100);
  stroke(0);
  strokeWeight(1);
  translate(width / 2, height / 2);
  phi = 0.5 * (1 + sqrt(5)); //1.618 golden ratio
  drawSquare(numLevel, 0, 0, height / 2 - 10, 0);
}

function drawSquare(n, x, y, len, angle) {
  if (n > 0) {
    noStroke();
    fill(map(angle, 0, 2 * PI, 0, 360), 100, 100);
    rect(x - len, y, len, len);
    noFill();
    stroke(0, 0, 100);
    arc(x - len, y - len, 2 * len, 2 * len, PI / 2, PI);
    stroke(0, 0, 0);
    rotate(-PI / 2);
    translate(-len + len / phi, 0);
    drawSquare(n - 1, x, y, len / phi, (angle + PI / 5) % (2 * PI));
  }
}
