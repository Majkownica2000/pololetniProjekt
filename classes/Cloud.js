class Cloud {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw() {
    fill(255);
    noStroke();

    ellipse(width * this.x, height * this.y, width * this.w, height * this.h);
    ellipse(
      width * (this.x + this.w * 0.3),
      height * (this.y + 0.01),
      width * (this.w * 0.7),
      height * (this.h * 0.5)
    );
    ellipse(
      width * (this.x - this.w * 0.3),
      height * (this.y + 0.005),
      width * (this.w * 0.8),
      height * (this.h * 0.5)
    );
  }
}