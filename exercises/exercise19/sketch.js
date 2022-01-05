let theArrow,dy,dx;
let size = 25;
function setup(){
    createCanvas(1000,700);
    background(255,0,0);
    theArrow = new Arrow(width/2,height/2,0,size); 
}  
function draw(){
    background(255,0,0);
    theArrow.updateValues();
    theArrow.drawArrow(size);
    theArrow.coseArrow();

    let result = collide(theArrow.x,mouseX,theArrow.y,mouseY);
    console.log(result);
    if(result <= (theArrow.arrowsize*2)){
        flag = true;
        size *= 1.05;
    }else{
        flag = false;
        size = 25;
    }
} 

function collide(x1,x2,y1,y2){
    distx = (x1-x2)*(x1-x2);
    disty = (y1-y2)*(y1-y2);
    let calDist = sqrt(distx+disty);
    return calDist;
}
