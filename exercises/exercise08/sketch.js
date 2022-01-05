let newBall;
let ax=0;
let ay=0;

function setup(){
    createCanvas(500,500);
    background(150,150,150);
    newBall = new BallRGB(width/2,height/2,0,0,20,150,25,50);
}  
function draw(){
    rectMode(CENTER);
    background(150);
    newBall.drawBall();
    newBall.accelerateBall(ax,ay);
    newBall.moveBall();
} 
function keyPressed(){
    if (keyCode === RIGHT_ARROW) {
        ax=-0.05;
        ay=0;
    }
    if (keyCode === LEFT_ARROW) {
        ax=0.05;
        ay=0;
    }
    if (keyCode === UP_ARROW) {
        ax=0;
        ay=-0.05;
    }if (keyCode === DOWN_ARROW) {
        ax=0;
        ay=0.05;
    }
}

function keyReleased(){
    ax=0;
    ay=0;
}






