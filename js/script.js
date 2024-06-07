var posXNave = 585;
var posYNave = 645;
var posXAlien = 0;
var posYAlien = 0;
var balas = [];
var imagenNave;
var imagenAlien;
var aliens = [];
var alienWidth = 120;
var alienHeight = 80;
var alienSpacing = 10; // Espacio entre alienígenas
var sonidoDisparo;

function preload() {
    imagenNave = loadImage('../assets/nave.jpg');
    imagenAlien = loadImage('../assets/alien.jpg');
    sonidoDisparo = loadSound('../assets/disparo.mp3');

}
function setup() {
    createCanvas(1292, 720);
    background(0, 0, 0);
    generateAliens();
}
function draw() {
    background(0, 0, 0);
    image(imagenNave, posXNave, posYNave, 120, 80)
    //image(imagenAlien, posXAlien, posYAlien, 120, 80)

    for (let i = 0; i < aliens.length; i++) {
        for (let j = 0; j < aliens[i].length; j++) {
            let alienX = aliens[i][j].x;
            let alienY = aliens[i][j].y;
            image(imagenAlien, alienX, alienY, alienWidth, alienHeight);
        }
    }

    // Dibujar y actualizar balas
    for (let i = balas.length - 1; i >= 0; i--) {
        balas[i].y -= 5; // Velocidad de la bala
        ellipse(balas[i].x, balas[i].y, 5, 10); // Dibujar bala

        // Eliminar bala si sale de la pantalla
        if (balas[i].y < 0) {
            balas.splice(i, 1);
        }
    }

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

function keyPressed() {
    if (keyCode === 32) { // Barra espaciadora
        balas.push({ x: posXNave + 60, y: posYNave });
    }
}

function generateAliens() {
    let rows = 3; // Número de filas de alienígenas
    let cols = 10; // Número de columnas de alienígenas
    let startX = 0;
    let startY = 0;

    for (let i = 0; i < rows; i++) {
        aliens[i] = [];
        for (let j = 0; j < cols; j++) {
            let x = startX + j * (alienWidth + alienSpacing);
            let y = startY + i * (alienHeight + alienSpacing);
            aliens[i][j] = { x: x, y: y };
        }
    }
}