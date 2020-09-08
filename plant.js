class Plant {
  constructor(maxWidth, maxHeight) {
    this.width = 0;
    this.maxWidth = maxWidth;
    this.height = 0;
    this.maxHeight = maxHeight;
    this.grown = false;
    this.branches = [];
    this.mod = Math.floor(this.maxHeight / 6);
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

        const leftBranch = new Branch(x, y, -0.5, -0.25, this, false);
        const rightBranch = new Branch(
          x + this.width,
          y,
          0.5,
          -0.25,
          this, 
          true
        );

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
  constructor(x, y, dx, dy, root, right) {
    this.root = root;       
    this.right = right;       //true: right leaf; false: left leaf
    this.startX = x;
    this.startY = y;
    this.dx = dx; //rate of change for x
    this.dy = dy; //rate of change for y
    this.changeX = dx;
    this.changeY = dy;
  }

  grow() {
    this.changeX += this.dx;
    this.changeY += this.dy;

    this.startY -= 0.5;

    if (this.right && this.root.width < this.root.maxWidth) {
      this.startX += this.root.maxWidth/this.root.maxHeight;
    }

  }

  draw() {
    c.beginPath();
    c.moveTo(this.startX, this.startY);
    c.lineTo(this.startX + this.changeX, this.startY + this.changeY);
    c.strokeStyle = '#00b100';
    c.stroke();
  }
}
