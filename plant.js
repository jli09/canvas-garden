class Plant {
  constructor(maxWidth, maxHeight) {
    this.width = 0;
    this.maxWidth = maxWidth;
    this.height = 0;
    this.maxHeight = maxHeight;
    this.grown = false;
    this.branches = [];
    this.mod = Math.floor(this.maxHeight / 5);
  }

  grow() {
    // if (this.branches.length > 0) {
    //   this.branches.forEach(branch => branch.grow());
    // }

    if (this.width < this.maxWidth) {
      this.width += this.maxWidth / this.maxHeight;
    }

    if (this.height < this.maxHeight) {
      this.height++;

      if (this.height % this.mod === 0) {
        const x = innerWidth / 2;
        const y = innerHeight - innerHeight / 10 - this.height;

        const leftBranch = new Branch(x, y);
        const rightBranch = new Branch(x + this.width, y);

        this.branches.push(leftBranch);
        this.branches.push(rightBranch);

        console.log('new branch', this.branches);
      }
    } else {
      this.grown = true;
    }
  }
}

class Branch {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}