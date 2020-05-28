const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint

var ground2,bobobject1,rope2,bobobject2,bobobject3,bobobject4,bobobject5;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  

	bobobject1 = new Bob (350,600,50);
	bobobject2 = new Bob (300,600,50);
	bobobject3 = new Bob (250,600,50);
	bobobject4 = new Bob (200,600,50);
	bobobject5 = new Bob (150,600,50); 
  ground2 = new Ground (250,100,350,20);
  
  
  rope1 = new Rope(bobobject1.body,ground2.body,(bobobject5.body.position.x * (-1) +200),0)
  rope2 = new Rope(bobobject2.body,ground2.body,(bobobject5.body.position.x * (-1) +150),0)
  rope3 = new Rope(bobobject3.body,ground2.body,(bobobject5.body.position.x * (-1) +100),0)
  rope4 = new Rope(bobobject4.body,ground2.body,(bobobject5.body.position.x * (-1) +50),0)
  rope5 = new Rope(bobobject5.body,ground2.body,bobobject5.body.position.x * (-1),0)
  

 //Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
 

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  ground2.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45});

  }
}