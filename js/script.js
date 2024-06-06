var posXNave = 580;
var posYNave = 645;
var posXAlien = 0;
var posYAlien = 0;
var imagenNave;
var imagenAlien;
var invasor = [];

function preload() {
    imagenNave = loadImage('../assets/nave.jpg');
    imagenAlien = loadImage('../assets/alien.jpg');
}
function setup() {
    createCanvas(1280, 720);
    background(0, 0, 0);
}
function draw() {
    background(0, 0, 0);
    image(imagenNave, posXNave, posYNave, 120, 80)
    image(imagenAlien, posXAlien, posYAlien, 120, 80)
    keydown();
}
function keydown() {
    if (keyIsDown(37) && posXNave > 0) {
        posXNave = posXNave - 10;
    }
    if (keyIsDown(39) && posXNave < (1280 - 120)) {
        posXNave = posXNave + 10;
    }
}