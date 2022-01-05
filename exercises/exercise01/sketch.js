let theArrow,dx,dy;

function setup(){
    createCanvas(500,500);
    background(255,0,0);
    theArrow = new Arrow(width/2,height/2,0);
}  
function draw(){
    background(255,0,0);
    theArrow.updateValues();
    theArrow.drawArrow();
} 