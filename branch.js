class Branch {
  constructor(percentageY, dx, dy, rateMod, root, right) {
    this.root = root;
    this.right = right; //true: right leaf; false: left leaf
    this.percentageY = percentageY;
    this.startYChange = -0.5;
    this.rateMod = rateMod;
    this.dx = dx * rateMod; //rate of change for x
    this.dy = dy * rateMod; //rate of change for y
    this.width = this.root.width / -10;
    this.changeX = this.dx;
    this.changeY = this.dy;
  }

  grow() {
    // console.log(this.startX, this.startY)
    this.changeX += this.dx;
    this.changeY += this.dy;

    this.startYChange -= 0.25;

    if (this.right && this.root.width < this.root.maxWidth) {
      this.startX += this.root.maxWidth / this.root.maxHeight;
    }

    if (this.width > this.root.width * -1) {
      this.width += (this.root.maxWidth / this.root.maxHeight) * .5 * this.rateMod;
    }
  }

  draw() {
    const startX = this.right
      ? innerWidth / 2 + this.root.width
      : innerWidth / 2;
    const startY =
      innerHeight -
      innerHeight / 10 -
      (this.percentageY * this.root.maxHeight) / 100;

    c.beginPath();
    c.moveTo(startX, startY + this.startYChange);
    c.lineTo(startX + this.changeX, startY + this.startYChange + this.changeY);
    c.lineTo(
      startX + this.changeX,
      startY + this.startYChange + this.changeY + this.width
    );
    c.lineTo(startX, startY + this.startYChange + this.width);
    c.strokeStyle = '#00b100';
    c.fillStyle = '#00b100';
    c.stroke();
    c.fill();
  }
}
