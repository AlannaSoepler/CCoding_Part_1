class Emitter {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.particles = [];
        
    }
    createParticles(){
        for(let i = 0; i < 1; i++){
            this.particles.push(new Particle(this.pos.x,this.pos.y));
        }
    }

    update() {
        this.particles.forEach(particle=>{
        let gravity = createVector(0,0.2);
        particle.applyForce(gravity);
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