class Plant {
  constructor(maxWidth, maxHeight) {
    this.width = 0;
    this.maxWidth = maxWidth;
    this.height = 0;
    this.maxHeight = maxHeight;
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

    //draw right leaf
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

  grow() {
    if (this.width < this.maxWidth) {
      this.width += this.maxWidth / this.maxHeight;
    }

    if (this.height <= this.maxHeight) {
      this.height++;
    } else {
        this.grown = true;
      }
    }
}
