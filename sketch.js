
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,plane1,stone1,rubber1,sand1,sand2,san3,sand4,sand5,sand6,sand7,iron1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	plane1 = new Plane(400,700,800,30)
	
	stone1 = new Stone(500,150,100,100);

	rubber1 = new Rubber(600,150,80);

	sand1 = new Sand(200,150,10);
	sand2 = new Sand(200,150,10);
	sand3 = new Sand(200,150,10);
	sand4 = new Sand(200,150,10);
	sand5 = new Sand(200,150,10);
	sand6 = new Sand(200,150,10);
	sand7 = new Sand(200,150,10);

	iron1 = new Iron(300,150,85,20);

 	hammer1 = new Hammer(200,200,100,40);
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  plane1.display(); 
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron1.display();


  hammer1.display();
  
  drawSprites();
 
}



