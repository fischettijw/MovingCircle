let canvasSize = 500;
let ballSize = 40;
let diam = (canvasSize - ballSize) / 2;
let cX = (canvasSize / 2);
let cY = (canvasSize / 2) + diam / 2;

function setup() {
    createCanvas(canvasSize, canvasSize);
    angleMode(DEGREES);
}

function draw() {
    background(220);
    fill(220);
    stroke('black');
    strokeWeight(1);
    circle(canvasSize / 2, canvasSize / 2, canvasSize - ballSize);
    drawCircle(0);
}

function drawCircle(angle) {
    fill(220);
    stroke('red');
    strokeWeight(1);
    translate(width / 2, height / 2);
    rotate(angle);
    circle(0, diam / 2, diam);
}