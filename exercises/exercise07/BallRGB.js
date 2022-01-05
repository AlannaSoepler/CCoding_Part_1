class BallRGB {
	constructor(x, y, vx, vy, radius, r, g, b) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
		//this.rotation = 0;
	
   }
   updateVals(newX, newY, newVx, newVy, newRadius, newR, newG, newB)
   {
	    this.x = newX;
		this.y = newY;
		this.vx = newVx;
		this.vy = newVy;
		this.radius = newRadius;
		this.r = newR;
		this.g = newG;
		this.b = newB;
   }
   
   //function to draw the ball
   drawBall() {
	  
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	
	accelerateBall(ax,ay){
		this.vx += ax;
		this.vy += ay;
	}
	//function to move the ball
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
	
}




