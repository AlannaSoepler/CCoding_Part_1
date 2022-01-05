let newBall;

function setup(){
    createCanvas(500,500);
    background(150,150,150);
    newBall = new BallRGB(20,20,0,0,20,150,25,50);
}  
function draw(){
    rectMode(CENTER);
    background(150);
    newBall.drawBall();
    newBall.accelerateBall(0.2,0.2);
    newBall.moveBall();

} 





