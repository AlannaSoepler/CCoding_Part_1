let newShip;
let ax = 0; 
let ay = 0;
let thrust = 0;
let angle = 0;
let vr = 0;

function setup(){
    createCanvas(500,500);
    background(255,0,0);
    newShip = new Ship(width/2,height/2,0,0,0,false);
}  
function draw(){
    background(100);
    newShip.rotation += vr*PI/100;
    angle = newShip.rotation;
    ax = cos(angle)*thrust;
    ay = sin(angle)*thrust;
    newShip.accelerateShip(ax,ay);
    newShip.moveShip();
    newShip.drawShip();
    
} 

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        vr=-3;
    }else if(keyCode === RIGHT_ARROW){
        vr = 3;
    }else if(keyCode === UP_ARROW){
        thrust = 0.05;
        newShip.showFlame = true;
    }
}

function keyReleased(){
    vr=0;
    thrust = 0;
    newShip.showFlame = false;
}