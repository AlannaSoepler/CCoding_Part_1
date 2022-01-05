let theBall;
let speed = 5;
let angle = 45;
function setup(){
    createCanvas(500,500);
    background(150,150,150);
    theBall = new Ball(0,0,0,0,10,150,25,50);

    theBall.vx = speed*cos(angle*PI/180);
    theBall.vy = speed*sin(angle*PI/180);
}  
function draw(){
    background(150);
    theBall.drawBall();
    theBall.moveBall();
} 




