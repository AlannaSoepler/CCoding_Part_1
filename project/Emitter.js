class Emitter {
    constructor(x,y) {
        //takes the birds position
        this.pos = createVector(x, y);
        //Createes the empty array for wind
        this.wind = [];
        this.counter = 0;    
    }

    createWind(){
        //Count the amount for sircles/ wind is craeted
        // if the amount is more then 5 then it will stop producing wind
        if(this.counter < 5){
            //Increase the counter for each loop and creats wind.
            for(let i = 0; i < 1; i++){
            this.wind.push(new Wind(this.pos.x,this.pos.y));
            this.counter++;
            }  
        }
    }
    update() {
        //For each wind/sricels make it go in the oposite direction
        this.wind.forEach(wind=>{
        let back = createVector(-0.5);
        wind.backForce(back);
        wind.updateWind();
        });

        //Goes though the array for 
        for(let i = this.wind.length-1; i >= 0; i--){
            if(this.wind[i].finished()){
                //Deletes one object from the array distance 1.
                this.wind.splice(i,1);
            }   
        }
    }

    //Draws the wind/Sircles
    render() {
        this.wind.forEach(wind=>{
            wind.renderWind();
            });
    }
}