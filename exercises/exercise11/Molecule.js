class Molecule {
    constructor(){
        this.posX = Math.round(Math.random() * 500);
        this.posY = Math.round(Math.random() * 500);
        this.speedX = Math.random() * 5 - 2.5;
        this.speedY = Math.random() * 5 - 2.5;
        this.radius = Math.round(Math.random() * 10 + 5);
    }
    render(){
        ellipse(this.posX,this.posY,this.radius);
    }
    move(){
        this.posX += this.speedX;
        this.posY += this.speedY;
        if(this.posX > 500){this.posX = 0;} 
        if(this.posY > 500){this.posY = 0;} 
        if(this.posX < 0){this.posX = 500;} 
        if(this.posY < 0){this.posY = 500;}    
    }
}