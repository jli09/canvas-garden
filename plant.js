class Plant {
  constructor(maxWidth, maxHeight) {
    this.width = 0;
    this.maxWidth = maxWidth;
    this.height = 0;
    this.maxHeight = maxHeight;
    this.grown = false;
    this.branches = [];
    this.mod = Math.floor(this.maxHeight / 4);
    this.nextBranch = this.mod;
  }

  grow() {
    if (this.branches.length > 0) {
      this.branches.forEach((branch) => branch.grow());
    }

    if (this.width < this.maxWidth) {
      this.width += this.maxWidth / this.maxHeight;
    }

    if (this.height < this.maxHeight) {
      this.height++;

      if (this.height === this.nextBranch) {
        const percentageY = Math.round((this.height / this.maxHeight) * 100);
        const rateMod = Math.random() * 0.5 + 0.5;

        const leftBranch = new Branch(percentageY, -0.4 , -0.2, rateMod, this, false);
        const rightBranch = new Branch(percentageY, 0.4, -0.2, rateMod, this, true);

        this.branches.push(leftBranch);
        this.branches.push(rightBranch);

        this.nextBranch += Math.round((this.mod * (Math.random() * .5 + .75)));
        // console.log(this.nextBranch);
      }
    } else {
      this.grown = true;
    }
  }

  draw() {
    const x = innerWidth / 2;
    const y = innerHeight - innerHeight / 10 - this.height;

    //trunk
    c.fillStyle = '#006400';
    c.strokeStyle = '#006400';

    c.fillRect(x, y, this.width, this.height);

    //top left leaf
    c.beginPath();
    c.moveTo(x, y);
    c.quadraticCurveTo(x - this.width, y - this.height / 7, x - this.width * 5, y - this.height / 12);
    c.quadraticCurveTo(x - this.width * 3.5, y + this.height / 20, x, y);
    c.strokeStyle = '#00b100';
    c.fillStyle = '#00b100';
    c.stroke();
    c.fill();

    //top right leaf
    c.beginPath();
    c.moveTo(x + this.width, y);
    c.quadraticCurveTo(
      x + this.width * 2,
      y - this.height / 7,
      x + this.width * 6,
      y - this.height / 12
    );
    c.quadraticCurveTo(x + this.width * 4.5, y + this.height / 20, x + this.width, y);
    c.stroke();
    c.fill();


    //branches
    if (this.branches.length > 0) {
      this.branches.forEach((branch) => branch.draw());
    }
  }
}
