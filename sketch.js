let canvasSize = 500;
let ballSize = 30;
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
    drawCircle(22.5);
    line(0, canvasSize / 2, canvasSize, canvasSize / 2);
    line(canvasSize / 2, 0, canvasSize / 2, canvasSize);
}

function drawCircle(angle) {
    push();
    fill(220);
    stroke(240);
    strokeWeight(1);
    // translate(width * 0.25, height * 0.25);
    translate(width / 2, (height / 2) + diam / 2);
    // translate(width / 2, height / 2);
    rotate(angle);
    circle(0, 0, diam);

    // translate(0, diam / 2);
    // rotate(angle);
    fill('green');
    noStroke();
    circle(0, diam / 2, ballSize);

    fill('red');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);

    fill('magenta');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);

    fill('brown');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);

    fill('magenta');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);

    fill('yellow');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);

    fill('cyan');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);


    fill('blue');
    noStroke();
    rotate(45);
    circle(0, diam / 2, ballSize);
    pop();
}