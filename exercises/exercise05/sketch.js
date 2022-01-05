let theBall;
let theBall2;
let angleBall = 25;
let angleBall2 = 47;
let speed = 15;

function setup(){
    createCanvas(500,500);
    background(150,150,150);
    theBall = new Ball(200,240,0,0,20,150,25,50);
    theBall2 = new Ball(100,240,0,0,20,150,125,50);

    theBall.vx = speed*cos(angleBall*PI/180);
    theBall.vy = speed*sin(angleBall*PI/180);
    theBall2.vx = speed*cos(angleBall2*PI/180);
    theBall2.vy = speed*sin(angleBall2*PI/180);
}  
function draw(){
    background(150);
    theBall.drawBall();
    theBall2.drawBall();
    theBall.moveBall();
    theBall2.moveBall();
    theBall.getBackHere();
    theBall2.getBackHere();
} 




