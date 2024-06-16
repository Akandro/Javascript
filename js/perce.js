let weights = [Math.random() * 2 - 1, Math.random() * 2 - 1]; // Pesos iniciales aleatorios
let bias = Math.random() * 2 - 1; // Bias inicial aleatorio
const learningRate = 0.01;

function sign(n) {
    return n >= 0 ? 1 : -1;
}

function guess(x, y) {
    let sum = x * weights[0] + y * weights[1] + bias;
    return sign(sum);
}

function train(x, y, target) {
    let guessResult = guess(x, y);
    let error = target - guessResult;

    weights[0] += error * x * learningRate;
    weights[1] += error * y * learningRate;
    bias += error * learningRate;
}

const numPoints = 500;
const xPoints = [];
const yPoints = [];
const labels = [];

function setup() {
    createCanvas(1000, 1000);
    strokeWeight(8);

    for (let i = 0; i < numPoints; i++) {
        xPoints[i] = Math.random() * 1000;
        yPoints[i] = Math.random() * 1000;
        labels[i] = xPoints[i] > yPoints[i] ? 1 : -1;
    }
    
    for (let epoch = 0; epoch < 1000; epoch++) {
        for (let i = 0; i < numPoints; i++) {
            train(xPoints[i], yPoints[i], labels[i]);
        }
    }
}

function draw() {
    background(200);

    for (let i = 0; i < numPoints; i++) {
        let g = guess(xPoints[i], yPoints[i]);
        if (g === labels[i]) {
            stroke(0, 255, 0); // Punto correctamente clasificado en verde
        } else {
            stroke(255, 0, 0); // Punto mal clasificado en rojo
        }
        point(xPoints[i], yPoints[i]);
    }

    stroke(0);
    let x1 = 0;
    let y1 = -(bias / weights[1]);
    let x2 = width;
    let y2 = -(bias + weights[0] * width) / weights[1];
    line(x1, y1, x2, y2);
}
