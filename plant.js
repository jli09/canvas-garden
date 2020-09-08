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

    //draw left leaf w/ stem

    //stem values:
    const lsx = x - this.height / 10;
    const lsy = y - this.height / 10;
    const rsx = x + this.height / 10;
    const rsy = y - this.height / 10;

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(lsx, lsy);
    c.quadraticCurveTo(
      lsx - this.width,
      lsy - this.height / 3,
      lsx - this.width * 3,
      lsy - this.height / 5
    );
    c.quadraticCurveTo(lsx - this.width * 2, lsy + this.height / 8, lsx, lsy);
    c.strokeStyle = '#00b100';
    c.fillStyle = '#00b100';
    c.stroke();
    c.fill();

    //draw right leaf
    c.beginPath();
    c.moveTo(x + this.width, y);
    c.quadraticCurveTo(
      rsx + this.width * 2,
      rsy - this.height / 3,
      rsx + this.width * 4,
      rsy - this.height / 5
    );
    c.quadraticCurveTo(
      rsx + this.width * 3,
      rsy + this.height / 8,
      rsx + this.width,
      rsy
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
