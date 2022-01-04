class Pipe{
    constructor(){
      this.top = random(height/2);
      this.bottom = random(height/2);
      this.x = width;  
      this.w = 50;
      this.speed = 2;
    }

    hitBird(bird){
        //checkes if the birds y pos will hit the top pipe. 
        //Check if the will hit the bottom pipe. Checking if the y.pos is higher than the bottom pipe 
        if(bird.pos.y < this.top || bird.pos.y > height - this.bottom){
        //If the bird pos x is bigger than the width
        //and makes sure it acutally is hitting the pipe and not after/before.
         if(bird.pos.x > this.x && bird.pos.x < this.x + this.w){
             return true;
            }
        }
        return false;
    }

    //Draws the pipe
    showPipe(){
        fill(0,150,0);
        //No boder
        noStroke();
        //The size and postions of the rectangles
        rect(this.x,0,this.w, this.top);
        rect(this.x,height-this.bottom,this.w, this.bottom);
    }

    //makes the pipes move the opposite derection with the speed of speed
    updatePipe(){
        this.x -= this.speed;
    }

        //Checks if the pipe has moved passed the canvas. 
    finishPipe(){
        if(this.x < -this.w){
            return true;
        }else{
            return false;
        }

    }
}