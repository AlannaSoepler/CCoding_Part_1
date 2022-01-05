let molecules = [];
let nr = 100;

for(let counter =0; counter <nr; counter++){
    molecules.push(new Molecule());
}
function setup() {
    createCanvas(500,500);
    background(255,0,0);
}

function draw() {
    background(255,0,0);
    for(let counter =0; counter <nr; counter++){
        molecules[counter].move();
        molecules[counter].render();
    }
}