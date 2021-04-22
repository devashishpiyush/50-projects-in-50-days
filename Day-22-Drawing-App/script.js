const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let isPressed = false;
let size = 5;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (event) => {
    isPressed = true;
    x = event.offsetX;
    y = event.offsetY;
});

canvas.addEventListener("mouseup", (event) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
    if(isPressed) {
        x2 = event.offsetX;
        y2 = event.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeElement.innerText = size;
}

colorElement.addEventListener("change", (event) => {
    color = event.target.value;
});

increaseBtn.addEventListener("click", () => {
    size++;

    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
}); 

decreaseBtn.addEventListener("click", () => {
    size--;

    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

clearElement.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})