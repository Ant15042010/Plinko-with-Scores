const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var plinko=[];
var division=[];
var particle;
var ground;
var score = 0;
var turn = 0;
var gamestate="play";

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10);

  for(var k=0;k<=width;k=k+80){
      division.push(new Division(k,height-150,10,300));
  }

  for(var y=300;y<=450;y=y+50){

    for(var k=0;k<=width;k=k+50){

      plinko.push(new Plinko(k,y,5));

  }

}

}

function draw() {
  background(255,255,255);
  textSize(30);
  text("score- "+score,10,200);
  text("500",10,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);
  text("100",330,550);
  text("100",410,550);
  text("100",490,550);
  text("200",570,550);
  text("200",650,550);
  text("200",730,550)

  Engine.update(engine);
  
  if (gamestate==="end"){
     textSize(50);
     text("Game Over. Score- "+score, 10,250)
  }

  for(k=0;k<division.length;k++){
      division[k].display();
  }

  for(var i=0;i<plinko.length;i++){

      plinko[i].display();

}
  
  ground.display();

  if(particle!=null){

       particle.display();

       if(particle.body.position.y>550){

           if(particle.body.position.x<300){
                score=score+500;
                particle=null;
                if(turn===10){
                    gamestate="end";
                }
           }else if(particle.body.position.x<600 && particle.body.position.x>301){
                score=score+100;
                particle=null;
                if(turn===10){
                  gamestate="end";
              }
           }else if(particle.body.position.x<900 && particle.body.position.x>601){
                score=score+200;
                particle=null;
                if(turn===10){
                  gamestate="end";
              }

           }
       }
  }

}
function keyPressed(){
  if(gamestate!="end"){
    if(keyCode===32){
      particle = new Particle(mouseX,10);
      turn=turn+1;
      console.log(particle);
      console.log("test")
    }
  }
}