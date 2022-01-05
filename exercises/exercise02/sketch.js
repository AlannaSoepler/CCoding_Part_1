let arrow;
let speed = 4;
let derection = 60;


function setup(){
    createCanvas(500,500);
    background(150,150,150);
    arrow = new ArrowUpdated(50,50,0,0,0,50);

    arrow.vx = speed*cos(derection*PI/180);
    arrow.vy = speed*sin(derection*PI/180);

}  
function draw(){
    rectMode(CENTER);
    background(150);
    arrow.drawArrow();
    arrow.moveArrow();
} 





