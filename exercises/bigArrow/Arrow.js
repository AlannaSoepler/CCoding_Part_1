class Arrow{
    constructor(x,y,rotation,size){
        this.x = x;
        this.y = y;
        this.arrowsize = size;
        this.rotation = rotation;
    }   
    drawArrow(size){
        translate(this.x,this.y);
        rotate(this.rotation);
        push();
        beginShape();
        vertex(-2*size, -size)
        vertex( 0, -size);
		vertex(0, -size)
        vertex( 0, -2*size);
		vertex(0, -2*size)
        vertex( 2*size, 0);
		vertex(2*size, 0)
        vertex( 0, 2*size);
		vertex(0, 2*size)
        vertex( 0, size);
		vertex(0, size)
        vertex( -2*size, size);
		vertex(-2*size, size)
        vertex( -2*size, -size);
        endShape(CLOSE); 
        pop();     
    }
    updateValues(){
        this.dx = mouseX-this.x;
        this.dy = mouseY-this.y;
        this.rotation = atan2(this.dy,this.dx);
    }
    coseArrow(){
        this.dx = mouseX-this.x;
        this.dy = mouseY-this.y;
    }
}



