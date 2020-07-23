var helicopterIMG, helicopterSprite, ballSprite,packageIMG;
var packageBody,ground
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ballSprite=createSprite(300,200, 10,10);

	groundSprite=createSprite(width/2, 600, width,10);
	groundSprite.shapeColor=color("blue")

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
	ball = Bodies.circle(100,200,20,options,0);
	
	fill("white");
	World.add(world,ball);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	fill("green");
	 World.add(world,ground);

	dust1=new dust(500,600,20,100);
	dust2=new dust(700,600,20,100);
	dust3=new dust(600,650,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  ballSprite.x= ball.position.x ;
  ballSprite.y= ball.position.y ;
  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,20,20);

  rect(ground.position.x,ground.position.y,800,10);

  dust1.display();
  dust2.display();
  dust3.display();
  

 
}

function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Body.applyForce(ball,ball.position,{x:50,y:-85});
	}
}

