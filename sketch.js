const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground1;

var plinkos=[]
var particles=[]
var divisions=[]



function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;
  
  

  ground1 = new ground(147,800,1000,10)

  for(var d =0;d<=width;d = d+80){
    divisions.push(new division(d,700,10,200));
  
  }  

  for(var p = 0;p<=width;p=p+70){
    plinkos.push(new plinko(p,100));
  }

  for(var p = 0;p<=width;p=p+60){
    plinkos.push(new plinko(p,200));
  }

  for(var p = 0;p<=width;p=p+70){
    plinkos.push(new plinko(p,300));
  }

  for(var p = 0;p<=width;p=p+60){
    plinkos.push(new plinko(p,400));
  }
  
 
}

function draw() {
  background(0);
  Engine.update(engine)

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }

  textSize(25)
  text("X:" +mouseX,400,400)
  text("Y:"+mouseY,420,420)

  ground1.display();

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  
  for(var m=0;m<divisions.length;m++){
    divisions[m].display();
  }

  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }

  


  

  

  drawSprites();
}