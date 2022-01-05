//Arrow class
class Arrow {
    constructor(x, y, rotation) {
        this.x = Math.round(Math.random() * 500);
        this.y = Math.round(Math.random() * 500);
        this.size = 25 * random(0.3, .8);
        this.centerX = 250;
        this.centerY = 250;
        this.distX = 0;
        this.distY = 0;
        this.rotation = Math.random() * (Math.PI * 2);
    }

    update() {
        rotate(this.rotation);
    }

    drawArrow() {
        push();
        rotate(this.rotation);
        fill(255,0,0);
        strokeWeight(0);
        translate(this.x, this.y);
        rect(0, 0, 30, 30);
        pop();
    }

    distToCenter() {
        this.distX = this.centerX - this.x;
        this.distY = this.centerY - this.y;
        this.totalDist = sq(this.distX) + sq(this.distY);
        this.dist = sqrt(this.totalDist);
        console.log(this.dist);
        this.dist = 0;
    }
}