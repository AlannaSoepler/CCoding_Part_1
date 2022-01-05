let theBall;

function setup(){
    createCanvas(500,500);
    background(150,150,150);
    theBall = new Ball(0,0,2,3,10,150,25,50);
}  
function draw(){
    background(150);
    theBall.drawBall();
    theBall.moveBall();
} 




