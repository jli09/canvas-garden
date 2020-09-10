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

        const leftBranch = new Branch(percentageY, -0.5 , -0.25, rateMod, this, false);
        const rightBranch = new Branch(percentageY, 0.5, -0.25, rateMod, this, true);

        this.branches.push(leftBranch);
        this.branches.push(rightBranch);

        this.nextBranch += Math.round((this.mod * (Math.random() * .5 + .75)));
        console.log(this.nextBranch);
      }
    } else {
      this.grown = true;
    }
  }

  draw() {
    const x = innerWidth / 2;
    const y = innerHeight - innerHeight / 10 - this.height;

    c.fillStyle = '#006400';
    c.strokeStyle = '#006400';

    c.fillRect(x, y, this.width, this.height);

    if (this.branches.length > 0) {
      this.branches.forEach((branch) => branch.draw());
    }
  }
}
