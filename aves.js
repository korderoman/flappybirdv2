function Aves(){
    this.ave;
    this.aleteo;
    this.gravedad=0.25;
    this.fondo;
    this.sonido;    
    this.microfonolevel;


    this.crear=function(){
        this.ave=createSprite(width/2,height/2,40,40);
       this.ave.addAnimation("ave", "./imagenes/flappy0.png","./imagenes/flappy1.png","./imagenes/flappy2.png");
        this.fondo=loadImage("./imagenes/jungla.png");
       this.sonido= new p5.AudioIn();
       this.sonido.start();
        this.ave.rotateToDirection=true;
       
        this.ave.setCollider("circle",0,0,15);
        //this.ave.debug=true;//podemos ver el collider
    }

    this.movimiento=function(){
        this.ave.velocity.x=4;
        this.ave.velocity.y+=this.gravedad;
        this.aleteo=this.sonido.getLevel();
        
        console.log(this.aleteo);
        
        if(this.ave.position.y<0){this.ave.position.y=0;}
        if(this.ave.position.y>height){this.ave.position.y=height;}
        
        
        if(this.aleteo>0.05){this.aleteo*=40; this.ave.velocity.y=-this.aleteo;}
        camera.position.x=width/4+this.ave.position.x;
        camera.off();
        image(this.fondo, 0, 0, width, height);
       
        
        camera.on();
    }

    this.muerte=function(pipe){if(this.ave.position.y>height-5 ||this.ave.overlap(pipe.tuboArray)){juegoTerminado();}}
        
    


}