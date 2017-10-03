
var sonido;
var microfononivel;
var gravedad=0.2;
 function setup(){
     sonido= new p5.AudioIn();
     sonido.start();
 }


 function draw(){
    background(0, 100);
    microfononivel=sonido.getLevel();
    var data=height-microfononivel*height*5;
    if(microfononivel>0.13){console.log(microfononivel);}

    data=constrain(data, 0, height);
    ellipse(width/2, data, 10, 10);
 }


