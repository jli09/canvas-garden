const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

function drawSky() {
  c.fillStyle = '#d0fdf8';
  c.fillRect(0, 0, innerWidth, innerHeight);
}

function drawGround() {
  c.fillStyle = '#522a01';
  c.fillRect(0, innerHeight - innerHeight / 10, innerWidth, innerHeight / 10);
}


//from plant.js
const plant = new Plant(20, 400);

function animate() {
  if (!plant.grown) {
    //clear section screen
    c.clearRect(0, 0, innerWidth, innerHeight);

    drawSky();
    drawGround();

    plant.grow();
    plant.draw();

    window.setTimeout(() => animate(), 100);
  }
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawSky();
  drawGround();
  plant.draw();
  // plant.resetBranches();
});
