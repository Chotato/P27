
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	g1 = new Ground(385, 300, 240, 20);

	b1 = new Ball(280, 500, 20);
    s1 = new String(b1.body, {x:280, y:300})

	b2 = new Ball(320, 500, 20);	
    s2 = new String(b2.body, {x:320, y:300})

	b3 = new Ball(360, 500, 20);
    s3 = new String(b3.body, {x:360, y:300})

	b4 = new Ball(400, 500, 20);
    s4 = new String(b4.body, {x:400, y:300})

	b5 = new Ball(440, 500, 20);
    s5 = new String(b5.body, {x:440, y:300})

	b6 = new Ball(480, 500, 20);
    s6 = new String(b6.body, {x:480, y:300})
}


function draw() {
  rectMode(CENTER);
  background(150);
  strokeWeight(4);

  g1.display();
  
  b1.display();
  s1.display();
  line(b1.body.position.x, b1.body.position.y-20, 280, 300);

  b2.display();
  s2.display();
  line(b2.body.position.x, b2.body.position.y-20, 320, 300);

  b3.display();
  s3.display();
  line(b3.body.position.x, b3.body.position.y-20, 360, 300);

  b4.display();
  s4.display();
  line(b4.body.position.x, b4.body.position.y-20, 400, 300);

  b5.display();
  s5.display();
  line(b5.body.position.x, b5.body.position.y-20, 440, 300);

  b6.display();
  s6.display();
  line(b6.body.position.x, b6.body.position.y-20, 480, 300);
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(b1.body, b1.body.position,{x:-100,y:100});
    }

  }

