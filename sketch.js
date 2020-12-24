let canvasSize = 500;
let ballSize = 30;
let rotCircleDiam = (canvasSize - ballSize) / 2;
let clrs = ['red', 'orange', 'lightgreen', 'green', ' cyan', 'purple', 'black', 'magenta'];
let incAngle = 0;

function setup() {
    createCanvas(canvasSize, canvasSize);
    angleMode(DEGREES);
    frameRate(2);
}

function draw() {
    background(220);
    drawOuterCircle();
    drawRadialLines();
    drawRotatingCircle(incAngle);
    incAngle += 360 / clrs.length / 2;
}

function drawOuterCircle() {
    fill(220);
    stroke('white');
    strokeWeight(1);
    circle(canvasSize / 2, canvasSize / 2, canvasSize - ballSize);
}

function drawRadialLines() {
    for (c = 0; c < clrs.length; c++) {
        push();
        translate(width / 2, height / 2);
        rotate((360 / clrs.length / 2) * c);
        stroke(clrs[c]);
        line(0, -canvasSize / 2, 0, canvasSize / 2);
        pop();
    }
}

function drawRotatingCircle(angle) {
    push();

    translate(width / 2, height / 2);
    rotate(angle);

    translate(0, rotCircleDiam / 2);
    fill(220, 0);
    stroke('white');
    strokeWeight(1);
    circle(0, 0, rotCircleDiam);
    for (i = frameCount; i < frameCount + clrs.length; i++) {
        let ii = (i - 1) % clrs.length;
        fill(clrs[ii]);
        noStroke();
        circle(0, rotCircleDiam / 2, ballSize);
        rotate(360 / clrs.length);
    }

    pop();

}