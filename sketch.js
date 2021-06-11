


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paperball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperball=new paper(55,650,75)


	box2=new dustbin(405,400,250,500);

	lol=new sadboi(200,200,50,50)
	ground=new dustbin(400,660,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
 //paperball.x=paperball.position.x 
//paperball.y=paperball.position.y 
 paperball.display();

 box2.display();

ground.display();
lol.display();


 
   
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:20,y:-30});
   
	   
	 }
   
   }


