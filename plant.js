class Plant {
  constructor(maxWidth, maxHeight) {
    this.width = 0;
    this.maxWidth = maxWidth;
    this.height = 0;
    this.maxHeight = maxHeight;
    this.grown = false;
  }

  drawTrunk() {
    const x = innerWidth / 2;
    const y = innerHeight - innerHeight / 10 - this.height;

    c.fillStyle = '#006400';
    c.strokeStyle = '#006400';

    c.fillRect(x, y, this.width, this.height);
  }

  drawLeaves() {
    const x = innerWidth / 2;
    const y =
      this.height < this.maxHeight / 2
        ? innerHeight - innerHeight / 10 - this.height
        : innerHeight - innerHeight / 10 - this.maxHeight / 2;

    //stem values:
    const lsx = x - this.height / 10;
    const lsy = y - this.height / 10;
    const rsx = x + this.width + this.height / 10;
    const rsy = y - this.height / 10;

    //draw left leaf w/ stem
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
    c.lineTo(rsx, rsy);
    c.quadraticCurveTo(
      rsx + this.width,
      rsy - this.height / 3,
      rsx + this.width * 3,
      rsy - this.height / 5
    );
    c.quadraticCurveTo(
      rsx + this.width * 2,
      rsy + this.height / 8,
      rsx,
      rsy
    );
    c.strokeStyle = '#00b100';
    c.fillStyle = '#00b100';
    c.stroke();
    c.fill();
  }

  draw() {
    this.drawTrunk();
    this.drawLeaves();
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
