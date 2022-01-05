let theBall;
let theBall2;
let angleBall = 25;
let angleBall2 = 47;
let speed = 5;
let distx;
let disty;
let flag = false; 

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
    rectMode(CENTER);
    background(150);
    theBall.drawBall();
    theBall2.drawBall();
    theBall.moveBall();
    theBall2.moveBall();
    theBall.getBackHere();
    theBall2.getBackHere();
    let result = collide(theBall.x,theBall2.x,theBall.y,theBall2.y);
    if(result <= (theBall.radius+theBall2.radius)){
        flag = true;
    }else{
        flag = false;
    }

    if(flag == true){
        textSize(50);
        fill(255,150,0);
        text("BANG",height/2,width/2);
    }else{
    }
} 

function collide(x1,x2,y1,y2){
    distx = (x1-x2)*(x1-x2);
    disty = (y1-y2)*(y1-y2);
    let calDist = sqrt(distx+disty);
    return calDist;
}




