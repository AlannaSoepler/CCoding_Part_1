class Alien {
    constructor(x,y){
        this.pos = createVector(x,y);
        this.velocity = alienVelocity;
    }

    render(){
        push();
        translate(this.pos.x, this.pos.y);
        image(alienImg,-alienWidth / 2 ,-alienHeight / 2 ,alienWidth, alienHeight );
        //fill(255,0,0);
        //ellipse(0 ,0 ,alienWidth,alienHeight);
        pop();
    }

    move(){
        this.pos.x += this.velocity;
    }

    shift(){
        // make the aliens go down by 50 px, 
        //and make the derection they are moving in the opisite
        this.pos.y += shiftDown;
        this.velocity *= -1;   
    }

}