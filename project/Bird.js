//Crates the blueprint for Bird
class Bird{
    constructor(){
        //Creating a vector
        this.pos = createVector(65, height/2);
        this.velocity = 0;
        this.r = 32
    }

    showBird(){
        fill(255,50,50);
        //Crating the triangle shape
        triangle(this.pos.x, this.pos.y-15, this.pos.x, this.pos.y+15, this.pos.x+24, this.pos.y);
        fill(255,255,0);
        //Crating the bird body
        ellipse(this.pos.x, this.pos.y, this.r);

    }

    //Creates a downdraft for the bird
    updateBird(g){
        //adds the value of gravity from sketch
        this.velocity += g;
        //Makes a limit for what the speed is
        this.velocity *= 0.9;
        //Makes the velocity the new pos.y
        this.pos.y += this.velocity;
        //Makes the bird bounce in the oposite derection if the bird hits either the
        //top or bottom
        if(this.pos.y > height){
            this.pos.y = height;
            this.velocity *= -3;
        }if(this.pos.y < 0){
            this.pos.y = 0;
            this.velocity *= -3;
        }
    }

    //Crates how strong the bounce is when pressing space.
    upBird(lift){
        this.velocity -= lift;
    }
}