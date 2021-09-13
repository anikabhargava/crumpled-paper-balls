
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var v1,v2;


function setup() {
	createCanvas(1200, 800);


	myEngine = Engine.create();
	myWorld = myEngine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ball= Bodies.circle(250,100,20,ball_options)
	World.add(myWorld,ball);
	//Engine.run(engine);
	ground=new Ground(600,790,1200,20)
	v1=new Ground(800,720,20,120)
	v2=new Ground(1000,720,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine)
  ellipse(ball.position.x,ball.position.y,40,40)
  ground.display();
  v1.display();
  v2.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-70})
	}
}


