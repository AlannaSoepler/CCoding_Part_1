
let molecules = [];

for(let i = 0; i<10; i++){
    //It is calling a class and returning an object.
    //New is using a class that is a Molecule class
    let temp = new Molecule();
    molecules.push(temp);
}

function setup(){
    //tell it what size canvis you want to work on
    createCanvas(500,500);
    background(255,0,0);
}

function draw(){
    background(255,0,0);
    //this happenes every time the screen refreshes contently looping
    //itterating though the array
    //Creating a representation of the objest in the array
    for(let x = 0; x < molecules.length; x++){
        console.log(molecules[x].posX);
        molecules[x].step();
        //draws the object at its position
        molecules[x].render();
        
    }

}



