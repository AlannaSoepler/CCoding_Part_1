class Ball{
    constructor(tx, ty, ts){
        this.x = tx;
        this.y = ty;
        this.size = ts;
        this.angle = 0;
    }   
    draw(){
        push();
        translate(this.x, this.y);
        fill(255);
        ellipse(0, 0, this.size, this.size);
        rotate(this.angle);
        fill(153, 204, 0);
        ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
        pop();
    }
    update(mx,my){
        this.angle = atan2(my - this.y, mx - this.x);
    }
}




