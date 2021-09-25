const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var divisions = []
var plinko = []


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);



  ground = new Ground (0,775,1000,25);
 

  for(var x = 0; x<801; x = x + 60)
   {
   
    divisions.push ( new Divisions (x,600,20,80))



  }

  for(var p = 0; x<801 ; x = x + 40)
  {
    plinko.push ( new Plinko (p,200,20))


  }

}

function draw() {
  background(0);  
  ground.display();
  for(var x = 0; x<=divisions.length; x = x + 1)
   {
   
divisions[x].display();

   }
  
  for(var p = 0; p<=plinko.length; p = p + 1)
  {
  
plinko[p].display();

 }

  
  //Engine.update(engine);
  fill ("white")
  text(mouseX + ',' + mouseY, mouseX, mouseY);
 
}