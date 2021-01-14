let canvasSize = 480;
let clrs = [
    'red', 'DarkSlateGray', 'yellow', 'hotpink', '#00ff00', 'cyan',
    'magenta', 'NavajoWhite', 'coral', 'lightblue', 'darkred', 'deepskyblue'
]


let ballSize = (3.14159 * (canvasSize)) / (4 * clrs.length);
let rotCircleDiam = (canvasSize - ballSize) / 2;
let initialAngle = 0;
let incAngle = initialAngle;

function setup() {
    createCanvas(canvasSize, canvasSize).position(10, 10);
    angleMode(DEGREES);
    frameRate(3);
}

function draw() {
    background(220);
    drawOuterCircle();
    drawRadialLines();
    drawRotatingCircle(incAngle);
    incAngle += (360 / clrs.length / 2);
    // noLoop();
}

function drawOuterCircle() {
    fill(220);
    stroke('white');
    strokeWeight(2);
    circle(canvasSize / 2, canvasSize / 2, canvasSize - ballSize);
}

function drawRadialLines() {
    for (c = 0; c < clrs.length; c++) {
        push();
        translate(width / 2, height / 2);
        rotate((360 / clrs.length / 2) * c);
        stroke(color(clrs[c]));
        strokeWeight(3);
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
    strokeWeight(2);
    circle(0, 0, rotCircleDiam);

    for (i = frameCount; i < frameCount + clrs.length; i++) {
        let ii = (i - 1) % clrs.length;
        fill(color(clrs[ii]));
        noStroke();
        circle(0, rotCircleDiam / 2, ballSize);
        rotate(360 / clrs.length);
    }

    pop();

}