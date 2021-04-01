const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var divisions = [];
var divisionsHeight=300;
var particles = [];
var plinkos = [];


var D1,D2,D3,D4,D5,D6,D7,D8,D9,D10,D11;
var pk1,pk2;
var plinkos;

function setup() {
  createCanvas(415,730);
 engine=Engine.create();
 world=engine.world;
  // createSprite(400, 200, 50, 50);
ground=new Ground(210,720,420,10);
D1=new Division(7,600,7,250);
D2=new Division(47,600,7,250);
D3=new Division(87,600,7,250);
D4=new Division(127,600,7,250);
D5=new Division(167,600,7,250);
D6=new Division(207,600,7,250);
D7=new Division(247,600,7,250);
D8=new Division(287,600,7,250);
D9=new Division(327,600,7,250);
D10=new Division(367,600,7,250);
D11=new Division(407,600,7,250);
//pk1=new Plinkos(100,200,5);
//pk2=new Plinkos(200,200,5);

for(var j=20;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,50));
}
for(var j=40;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,100));
}
for(var j=20;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,150));
}
for(var j=40;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,200));
}
for(var j=20;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,250));
}
for(var j=40;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,300));
}
for(var j=20;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,350));
}
for(var j=40;j<=width;j=j+40){
  plinkos.push(new Plinkos(j,400));
}




}

function draw() {
  background(220,5,5);  
  Engine.update(engine);
  
  ground.display();
  textSize(30).text("PLINKO GAME",100,30);
  D1.display();
  D2.display();
  D3.display();
  D4.display();
  D5.display();
  D6.display();
  D7.display();
  D8.display();
  D9.display();
  D10.display();
  D11.display();
  
  //pk1.display();
  //pk2.display();
 if(frameCount%60===0){
   particles.push(new Particles(random(width/2-30,width/2+30),10,10));
 }
 for(var k=0;k<particles.length;k++){
   particles[k].display();
 }
 for(var j=0;j<plinkos.length;j++){
  plinkos[j].display();
}




  drawSprites();
}