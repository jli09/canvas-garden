const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const c = canvas.getContext('2d');

function drawGround() {
    c.fillRect(0, innerHeight - innerHeight / 10, innerWidth, innerHeight / 10);
}

function drawPlant(width, height) {
    const x = innerWidth / 2;
    const y = (innerHeight - innerHeight / 10) - height;

    //draw trunk
    c.fillRect(x, y, width, height);

    //draw leaves

    //left leaf
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(x - width, y - height / 3, x - width * 3, y - height / 5);
    c.quadraticCurveTo(x - width * 2, y + height / 8, x, y);
    c.stroke();
    c.fill();
}

drawGround();
drawPlant(10, 50);