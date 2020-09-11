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

    this.startYChange -= 0.3;

    if (this.right && this.root.width < this.root.maxWidth) {
      this.startX += this.root.maxWidth / this.root.maxHeight;
    }

    if (this.width > this.root.width * -1) {
      this.width +=
        (this.root.maxWidth / this.root.maxHeight) * 0.75 * this.rateMod;
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
    c.strokeStyle = '#006400';
    c.fillStyle = '#006400';
    c.stroke();
    c.fill();

    //draw leaf
    let cpx = startX + this.changeX * 1.25;
    let cpy = startY + this.startYChange + this.changeY * 2;

    let cpx2 = startX + this.changeX * 1.5;
    let cpy2 = startY + this.startYChange + this.width + this.changeY * 0.75;

    //-- for tracking purposes --
    // c.beginPath();
    // c.moveTo(cpx, cpy);
    // c.arc(cpx, cpy, 2, 0, Math.PI * 2);
    // c.strokeStyle = 'red';
    // c.stroke();
    // c.fillStyle = 'red';
    // c.fill();

    // c.beginPath();
    // c.moveTo(cpx2, cpy2);
    // c.arc(cpx2, cpy2, 2, 0, Math.PI * 2);
    // c.strokeStyle = 'blue';
    // c.stroke();
    // c.fillStyle = 'blue';
    // c.fill();

    c.beginPath();
    c.moveTo(startX + this.changeX, startY + this.startYChange + this.changeY);
    c.quadraticCurveTo(
      cpx,
      cpy,
      startX + this.changeX * 1.8,
      startY + this.startYChange + this.changeY * 1.5
    );
    c.quadraticCurveTo(
      cpx2,
      cpy2,
      startX + this.changeX,
      startY + this.startYChange + this.changeY + this.width
    );
    c.lineTo(startX + this.changeX, startY + this.startYChange + this.changeY);
    c.strokeStyle = '#00b100';
    c.fillStyle = '#00b100';
    c.stroke();
    c.fill();
  }
}
