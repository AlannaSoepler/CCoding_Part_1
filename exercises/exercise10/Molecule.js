class Molecule{
    constructor(){
        this.posX=Math.round(Math.random()*500);
        this.posY=Math.round(Math.random()*500);
        this.radius=Math.round(Math.random()*5 +5);
        this.Xspeed=Math.random()*4 -2;
        this.Yspeed=Math.random()*4 -2;
    }
    render(){
        ellipse(
            this.posX,
            this.posY,
            this.radius)
    }
    step(){
        this.posX = this.posX+this.Xspeed;
        this.posY = this.posY+this.Yspeed;
    }
}

