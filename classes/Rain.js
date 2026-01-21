class Raindrop {
  constructor(x, y, size, img) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.img = img;

   
    this.vx = 0;
    this.vy = random(4, 8);
    this.stopped = false;

    this.opacity = random(100, 200);
  }

  update() {
    if (this.stopped) return;

    this.x += this.vx;
    this.y += this.vy;

    if (this.y > height) {
      this.y = random(-200, 0);
      this.x = random(width);
    }
  }

  draw() {
    push();
    tint(255, 255, 255, this.opacity);
    image(this.img, this.x, this.y, this.size, this.size);
    pop();
  }

}
