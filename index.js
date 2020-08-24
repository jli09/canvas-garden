const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const c = canvas.getContext('2d');

function drawGround() {
  c.fillStyle = '#522a01';
  c.fillRect(0, innerHeight - innerHeight / 10, innerWidth, innerHeight / 10);
}

class Plant {
  constructor(width, maxHeight) {
    this.width = width;
    this.height = 0;
    this.maxHeight = maxHeight;
    this.leftLeaf = false;
    this.rightLeaf = false;
    this.grown = false;
  }

  draw() {
    const x = innerWidth / 2;
    const y = innerHeight - innerHeight / 10 - this.height;

    c.fillStyle = '#006400';
    c.strokeStyle = '#006400';

    //draw trunk
    c.fillRect(x, y, this.width, this.height);

    //draw left leaf
    if (this.leftLeaf) {
      c.beginPath();
      c.moveTo(x, y);
      c.quadraticCurveTo(
        x - this.width,
        y - this.height / 3,
        x - this.width * 3,
        y - this.height / 5
      );
      c.quadraticCurveTo(x - this.width * 2, y + this.height / 8, x, y);
      c.strokeStyle = '#00b100';
      c.fillStyle = '#00b100';
      c.stroke();
      c.fill();
    }

    //draw right leaf
    if (this.rightLeaf) {
      c.beginPath();
      c.moveTo(x + this.width, y);
      c.quadraticCurveTo(
        x + this.width * 2,
        y - this.height / 3,
        x + this.width * 4,
        y - this.height / 5
      );
      c.quadraticCurveTo(
        x + this.width * 3,
        y + this.height / 8,
        x + this.width,
        y
      );
      c.strokeStyle = '#00b100';
      c.fillStyle = '#00b100';
      c.stroke();
      c.fill();
    }
  }

  grow() {
    if (this.height < this.maxHeight) {
      this.height ++;
    } else {
      if (!this.leftLeaf) {
        this.leftLeaf = true;
        return;
      }

      if (this.leftLeaf && !this.rightLeaf) {
        this.rightLeaf = true;
        return;
      }

      if (this.leftLeaf && this.rightLeaf) {
        this.grown = true;
      }
    }
  }
}

const plant = new Plant(10, 50);

function animate() {
  if (!plant.grown) {
    //clear section screen
    c.clearRect(0, 0, innerWidth, innerHeight);

    //sky background
    c.fillStyle = '#d0fdf8';
    c.fillRect(0, 0, innerWidth, innerHeight);

    drawGround();

    plant.grow();
    plant.draw();

    window.setTimeout(() => animate(), 100);
  }
}

animate();
