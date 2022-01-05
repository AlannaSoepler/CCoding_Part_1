class Emitter {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];
        this.counter = 0;
        
    }


    createParticles(){
        if(this.counter < 20){
            for(let i = 0; i < 1; i++){
            this.particles.push(new Particle(this.pos.x,this.pos.y));
            this.counter++;
            }  
        }

    }

    update() {
        this.particles.forEach(particle=>{
        let gravity = createVector(0,0.2);
        //let wind = createVector(0.2,0);
        particle.applyForce(gravity);
        //particle.applyForce(wind);
        particle.update();
        //particle.edges();
        //particle.render();
        });

        for(let i = this.particles.length-1; i >= 0; i--){
            if(this.particles[i].finished()){
                this.particles.splice(i,1);
            }   
        }
    }

    render() {
        this.particles.forEach(particle=>{
            particle.render();
            });
    }
}