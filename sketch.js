const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 
var engine,world,ground,ball,box1,box2,pig1,log1,box3,box4,pig2,log3,log4,box5,log5,bird1;               
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new box(700,320,70,70);
  box2=new box(920,320,70,70);
  ground=new Ground(600,height,1200,40);
  pig1=new pig(800,350);
  log1=new log(810,260,300,PI/2);
  box3=new box(700,240,70,70);
  box4=new box(920,240,70,70);
  pig2=new pig(810,220);
  log3=new log(810,180,300,PI/2);
  log4=new log(760,120,150,PI/7);
  log5=new log(870,120,150,-PI/7);
  box5=new box(810,160,70,70);
  bird1=new bird(100,100);
  

  /*//add objects or bodies
  box1=Bodies.rectangle(200,200,50,50);
  World.add(world,box1);
  var opt_ground={
    isStatic:true
  }library 
  ground=Bodies.rectangle(0,380,800,20,opt_ground);
  World.add(world,ground);
  //add ball object 
  var opt_ball={
   restitution:0.8 
  }
  ball=Bodies.circle(100,100,50,opt_ball);
  World.add(world,ball);**/

  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  // console.log(box2.body.position.x);
  // console.log(box2.body.position.y);
  // console.log(box2.body.angle); 
 /*// rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
   
  rect(box1.position.x,box1.position.y,50,50);


  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);**/
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  box3.display();
  box4.display();
  box5.display();
  pig2.display();
  log3.display();
  log4.display();
  log5.display();
  log1.display();
  bird1.display();
}