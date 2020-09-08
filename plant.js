class Plant {
  constructor(maxWidth, maxHeight) {
    this.width = 0;
    this.maxWidth = maxWidth;
    this.height = 0;
    this.maxHeight = maxHeight;
    this.grown = false;
    this.branches = [];
    this.mod = Math.floor(this.maxHeight / 4);
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

      if (this.height % this.mod === 0) {
        const x = innerWidth / 2;
        const y = innerHeight - innerHeight / 10 - this.height;

        const leftBranch = new Branch(x, y, -.5, -.25);
        const rightBranch = new Branch(x + this.width, y, .5, -.25);

        this.branches.push(leftBranch);
        this.branches.push(rightBranch);

        // console.log('new branch', this.branches);
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

class Branch {
  constructor(x, y, dx, dy) {
    this.startX = x;
    this.startY = y;
    this.x = x;
    this.y = y;
    this.dx = dx; //rate of change for x
    this.dy = dy; //rate of change for y
  }

  grow() {
    this.x += this.dx;
    this.y += this.dy;
  }

  draw() {
    c.beginPath();
    c.moveTo(this.startX, this.startY);
    c.lineTo(this.x, this.y);
    c.strokeStyle = '#00b100';
    c.stroke();
  }
}
