let xLeft = 160;
let xRight = 240;
let y = 180;
let frames = [];
let frameNumber = 0;

function setup() {
    var canvas = createCanvas(270, 183);
    canvas.parent('p5-canvas');
    cat = loadImage("images/about/cat.png");
}

function draw() {
    background(255, 255, 255);
   
    // Pupils
    fill(0);
    ellipse(xLeft, y, 6, 22);
    ellipse(xRight, y, 6, 22);

    y = map(mouseY, 0, height, 38, 50, true);
    xLeft = map(mouseX, 0, width, 35, 55, true);
    xRight = map(mouseX, 0, width, 70, 90, true);
    image(cat,0,0);
}