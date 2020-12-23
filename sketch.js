let canvasSize = 500;
let ballSize = 30;
let diam = (canvasSize - ballSize) / 2;
let cX = (canvasSize / 2);
let cY = (canvasSize / 2) + diam / 2;
let clrs = ['green', 'red', 'magenta', 'brown', ' orange', 'yellow', 'cyan', 'blue'];

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
    drawCircle(90);
    line(0, canvasSize / 2, canvasSize, canvasSize / 2);
    line(canvasSize / 2, 0, canvasSize / 2, canvasSize);
}

function drawCircle(angle) {
    push();
    fill(220);
    stroke('black');
    strokeWeight(1);

    // translate(width / 2, height / 2);
    // rotate(angle);

    translate(width / 2, (height / 2) + diam / 2);
    rotate(angle);
    circle(0, 0, diam);

    for (i = 0; i < clrs.length; i++) {
        fill(clrs[i]);
        noStroke();
        circle(0, diam / 2, ballSize);
        rotate(360 / clrs.length);
    }

    pop();
}