const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let brushColor = "black";
canvas.addEventListener("mousemove", draw);
function draw(event) {
    if (event.buttons !== 1) return;

    const x = event.offsetX;
    const y = event.offsetY;

    context.fillStyle = brushColor;
    context.fillRect(x, y, 5, 5);
}
const colorButtons = document.querySelectorAll(".color-button");
colorButtons.forEach(button => {
    button.addEventListener("click", changeBrushColor);
});

function changeBrushColor(event) {
    brushColor = event.target.style.backgroundColor;
}