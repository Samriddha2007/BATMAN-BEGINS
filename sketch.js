const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var engine, world;
var umbrella,umbrella1,ground;
var umbre1;
var maxdrops = 100;
var drop = [];
var thunder1,thunder2,thunder3,thunder4;

function preload()
{
   
}

function setup(){
  createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

   
/*if(frameCount % 30 == 0)
{
    for(var i= 0; i < displayWidth; i++)
    {
      drop.push(new Drop(random(displayWidth - displayWidth,displayWidth),random(0,400)));
    }
}*/



    
    umbrella = new Umbrella(570,300,140,10, PI/10);
    umbrella1 = new Umbrella(460,410,140,10, -PI/5);
    umbre1 = new Umbrella_copy(500,600,100,100);
    thunder1 = new Thunderbolt(random(-50,250),-50,100,100,"images/thunderbolt/1.png");
    thunder2 = new Thunderbolt(random(-50,250),-50,100,100,"images/thunderbolt/2.png");
    thunder3 = new Thunderbolt(random(-50,250),-50,100,100,"images/thunderbolt/3.png");
    thunder4 = new Thunderbolt(random(-50,250),-50,100,100,"images/thunderbolt/4.png");

}

function draw()
{
  background("black"); 
    Engine.update(engine);

  umbrella.display();
   umbrella1.display();

 
 //console.log();
 if(frameCount % 30 === 0)
 {
  for(var i= 0; i < maxdrops; i++)
  {
    drop.push(new Drop(random(displayWidth - displayWidth,displayWidth),random(-100,0)));
  }
 }

 for (var j = 0; j < drop.length; j++)
 {
   drop[j].display();
 }

  if(frameCount % 60 == 0)
  {
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: thunder1.display();
              break;
      case 2: thunder2.display();
              break;
      case 3: thunder3.display();
              break;
      case 4: thunder4.display();
              break;
      default: break;
    }
  }

  umbre1.display();
 

  

  }



