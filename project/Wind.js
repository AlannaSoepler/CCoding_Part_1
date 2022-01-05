class Wind{
    constructor(x,y){
        this.pos = createVector(x,y);
        //Gives a 2D vector a randome direction.
        this.velocity = p5.Vector.random2D();
        //Multiply the 2D vector with a random number between -0.5 and 2.5
        this.velocity.mult(random( -0.5, 2.5));
        //Create a vector for velocity
        this.acc = createVector(0,0);
        //Variable for the radious of the sicles
        this.r = 2;
        //For how long the sircles are going to last.
        this.lifeTime=150;
    }
    //Makes the wind for the sircles go backward
    backForce(back){
        //Pushes the sicles back
        this.acc.add(back);
    }

    updateWind( ) {
        //How much the sicles scatter.
        this.velocity.add(this.acc);
        //places the wind in randome placees given the spread
        this.pos.add(this.velocity);
        //Set the acc back to 0,0 or else they will just fly off the screen
        this.acc.set(0,0);
        //For how long the sircles are shown
        this.lifeTime-=15;
    }

    //Drawks the style of the wind
    renderWind(){
        noStroke();
        fill(100,100,250);
        ellipse(this.pos.x, this.pos.y, this.r*2);
    }
    
    //Gives this info to the emitter.
    finished(){
        return(this.lifeTime < 0);
    }
}