
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("stone.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
 
 block1 = loadImage("mango.png");
 block2 = loadImage("mango.png");
 block3 = loadImage("mango.png");
 block4 = loadImage("mango.png");
 block5 = loadImage("mango.png");
 block6 = loadImage("mango.png");
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  polygon = loadImage("stone.png");
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  //text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  //text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  //stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
 
 
  imageMode(CENTER)
 
  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}


