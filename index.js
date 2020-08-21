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

drawGround();