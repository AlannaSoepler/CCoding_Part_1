let myArrows = []

function setup() {
    createCanvas(500, 500);
    background(130);
    for (let arno = 0; arno < 10; arno++) {
        myArrows.push(new Arrow())
        console.log("Arrow " + arno + ":");
        myArrows.forEach(arrow => arrow.distToCenter());
    }
}

function draw() {
    background(255);
    myArrows.forEach(arrow => arrow.drawArrow());
    myArrows.forEach(arrow => arrow.update());
}