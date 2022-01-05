let screenWidth = 500;
let screenHeight = 500;

//Alien variables

let params={
    numCols : 12,
    numRows : 4
}


let aliens=[];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 0.5;

let hSpace = 30;
let vSpace = 30;
let xOffset = (screenWidth - (params.numCols - 1) * hSpace) / 2;
let yOffset = 20;
let shiftDown = 50;
let alienImg;

//Shooter V
let shooterWidth = 100;
let shooterHeight = 20;
let shooter;

let bullets=[];
let bulletVelocity = 5;
let bulletWidth = 10;
let bulletHeight = 10;

//Emitter
let emitters = [];

//Gui
let gui;

// Load image
function preload() {
    alienImg = loadImage('assets/spaceInvaders.png')
}


function setup() {
    populateAliens();

    gui=QuickSettings.create(550,25,"My Game Controles")
    .addRange("Number of Columes",5,20,params.numCols,1,function(value) {
        params.numCols = value;
        aliens=[];
        xOffset = (screenWidth - (params.numCols - 1) * hSpace) / 2;
        populateAliens()
    })
    .addRange("Number of Rows",3,10,params.numRows,1,function(value) {
        params.numRows = value;
        aliens=[];
        populateAliens()
    });

    shooter = new Shooter(screenWidth/2,screenHeight - shooterHeight / 2);
    createCanvas(screenWidth, screenHeight);
    background(255);
    
}

function draw() {
    background(0);
    emitters.forEach(emitter => {
        emitter.createParticles();
        emitter.update();
        emitter.render();
    });
    shooter.render();
    shooter.move();

    let shift = false;
    
    // for each alien make then have the properties of move and render
    aliens.forEach(alien =>{
        alien.move();
        alien.render();

    // If any of the aliense is more then 500 px, on the right hand side, then shift = true. 

        alien.pos.x >= screenWidth-alienWidth ? shift = true: null;
        alien.pos.x <= 0+alienWidth ? shift = true: null;
    });

// If shift is true then let all the aliens go though the shift function 

    if(shift){
        aliens.forEach(alien=>{
            alien.shift();
        })
    }
    

    for(let i = bullets.length-1; i >= 0; i--){
        bullets[i].move();
        bullets[i].render();
        //for every bullet look at all the aliens
        for(let j = aliens.length-1; j>=0;j--){
            if(bullets[i].hits(aliens[j])){
                emitters.push(new Emitter(aliens[j].pos.x,aliens[j].pos.y))
                aliens.splice(j,1);
                bullets.splice(i,1);
                break;
            }
        }
    }
    gameStatus();
}

function gameStatus() {
    let gameOver = false;
    aliens.forEach(alien =>{
        if(alien.pos.y>400){
            gameOver = true;
        }

    });
    if(gameOver){
        noLoop();
        textSize(120);
        textLeading(110);
        textAlign(CENTER, CENTER);
        fill(255,0,0);
        text("Game\nOver",250,230);
    }
    
}

function keyPressed() {
    if(keyCode=== 32){
        bullets.push(new Bullet(
            shooter.pos.x, 
            screenHeight - shooterHeight, 
            shooter.barrelAngle));
    }
    if (keyCode===RIGHT_ARROW){
        //shooter.setDir(1);
        shooter.barrelAngle += 1;
    }else if (keyCode===LEFT_ARROW){
        //shooter.setDir(-1);
        shooter.barrelAngle += -1;
    }
}

function populateAliens() {
    for(let row = 0; row < params.numRows; row++){
        for(let col = 0; col < params.numCols; col++){
        aliens.push(new Alien(col*hSpace+xOffset,row*vSpace+yOffset));
        }
    }
}