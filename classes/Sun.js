class Sun {
    constructor() {
        this.x = random(0.1, 0.9);
        this.y = random(0.1, 0.3);
        this.size = 0.15// random(0.12, 0.2);
    }

    draw() {
        fill(255, 204, 0);
        noStroke();
        ellipse(
            width * this.x,
            height * this.y,
            width * this.size,
            width * this.size
        );
    }
}