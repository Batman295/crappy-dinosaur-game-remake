class Unicorn {
  constructor() {
    this.r = 80;
    this.x = 50;
    this.y = height - 50;
    this.vy = 0;
    this.gravity =  0.9;
  }

  jump() {
    this.vy = -15;
  }
 
 
  hits(train) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = train.x + train.r * 0.5;
    let y2 = train.y + train.r * 0.5;
    return collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(uImg, this.x, this.y, this.r, this.r);
  }
}