class Molecule{
    constructor(){
        //this.posX=Math.round(Math.random()*500);
        //this.posY=Math.round(Math.random()*500);

        this.pos = createVector(
            Math.round(Math.random()*500),
            Math.round(Math.random()*500)
            );
        this.speed = createVector(
            Math.random()*4 -2,
            Math.random()*4 -2
            );    
        this.radius=Math.round(Math.random()*5 +5);
        this.r=Math.round(Math.random()*155+100);
        this.g=Math.round(Math.random()*155+100);
        this.b=Math.round(Math.random()*155+100);

        //this.Xspeed=Math.random()*4 -2;
        //this.Yspeed=Math.random()*4 -2;
    }
    render(){
        //let myAngle=atan2(this.speed.y,this.speed.x);
        let myAngle = this.speed.heading();
        push();
        translate(this.pos.x,this.pos.y);
        rotate(myAngle);
        fill(this.r,this.g,this.b);
        rect(
            0,
            0,
            this.radius,
            this.radius);
        pop();    
    }
    step(){
        this.pos.x = this.pos.x+this.speed.x;
        this.pos.y = this.pos.y+this.speed.y;

        if(this.pos.x > 500){this.pos.x = 0;} 
        if(this.pos.y > 500){this.pos.y = 0;} 
        if(this.pos.x < 0){this.pos.x = 500;} 
        if(this.pos.y < 0){this.pos.y = 500;} 
    }
}

