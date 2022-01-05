class Arrow{
    constructor(x,y,rotation){
        this.x = x;
        this.y = y;
        this.rotation = rotation;
    }   
    drawArrow(){
        translate(this.x,this.y);
        rotate(this.rotation);
        push();
        line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25); 
        pop();     
    }
    updateValues(){
        this.dx = mouseX-this.x;
        this.dy = mouseY-this.y;
        this.rotation = atan2(this.dy,this.dx);
    }
}



