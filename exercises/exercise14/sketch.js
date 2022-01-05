
function setup(){
    createCanvas(500,500);
    background(255,0,0);
    rectMode(CENTER);
}

function draw(){
    background(255,0,0);
    fill(0,255,0);

    push();
    translate(200,200);
    rotate(PI/4);
    rect(0,0,100,100);
    pop();

    push();
    translate(300,200);
    rotate(PI/4);
    rect(0,0,100,100);
    pop();


}



