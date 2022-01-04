//Set the Screen Size.
let screenWidth = 500;
let screenHeight = 500;
// emoty variable 
let bird;
//Crating empty arrays
let pipes = [];
let emitters = [];

//Fill the object with these values. 
let params = {
    g : 0.6,
    lift:15,
    spawnPipe:100
}

//Text Size for the game over screen
let textINF = 100;

//Crating for the gui
let gui;


function setup(){

    //Filling the array.
    gui=QuickSettings.create(550,25,"Difficulty")
    .addRange("Gravitry",0.4,0.8,params.g,0.2,function(value) {
        params.g = value;
    })
    .addRange("Lift",5,15,params.lift,5,function(value) {
        params.lift = value;
    })
    .addRange("Pipes",50,150,params.spawnPipe,50,function(value) {
        params.spawnPipe = value;
    });
    createCanvas(screenWidth, screenHeight);
    bird = new Bird();
}

function draw(){
    //Draw Background in color gray
    background(150);
    //Uses the array emmiter. Using the new verible name emitter
    //For each new emitter run though these methods
    emitters.forEach(emitter => {
        emitter.createWind();
        emitter.update();
        emitter.render();
    });
    //let i run though the array pipes the oposite derection
    for (let i = pipes.length-1; i >= 0; i--){
        //For each pipe with the index i go to these methods. 
        pipes[i].showPipe();
        pipes[i].updatePipe();

        if(pipes[i].hitBird(bird)){
            //Go to the function gameOver
            gameOver()
        }
        //For each pipe go to the function finishPipe
        if(pipes[i].finishPipe()){
            //Get rid of the object in the array.
            pipes.splice(i,1);
        }
    }

    bird.updateBird(params.g);
    bird.showBird();

    //Count the number of frames that have been rendered    
    if(frameCount % params.spawnPipe == 0){
        //Craete a pipe after x amount of frames.
        pipes.push(new Pipe());
    }

    
}

function gameOver(){
        //Stop lookping
        noLoop();
        //Set the text size 
        textSize(textINF);
        //Align the text to the center
        textAlign(CENTER, CENTER);
        //The color of the text
        fill(255,0,0);
        //The text game over and go to the next line. 
        //Place the text at position half of the screen width and height.
        text("Game\nOver",screenHeight/2,screenWidth/2);
}

function keyPressed(){
    //If the spacebar is pressed make the bird go to the upBird method 
    //and take these values in the parameters
    //Fill the emitters array and take the position of the bird. 
    if(keyCode === 32){
        bird.upBird(params.lift);
        emitters.push(new Emitter(bird.pos.x,bird.pos.y,0));
    }
}