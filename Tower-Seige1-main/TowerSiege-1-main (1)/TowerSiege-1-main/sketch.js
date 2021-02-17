const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block22,block23;
var polygon, polygon_img;
var slingShot;
function preload() {
  polygon_img=loadImage("Sprites/polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


ground = new Ground(600,height,1200,20);
base1 = new Ground(387,300,250,20);

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);

block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);

block16 = new Block(390,155,30,40);

base2 = new Ground(690,250,250,20);

block17 = new Block(630,205,30,40);
block18 = new Block(660,205,30,40);
block19 = new Block(690,205,30,40);
block20 = new Block(720,205,30,40);
block21 = new Block(750,205,30,40);

block22 = new Block(660,195,30,40);
block23 = new Block(690,195,30,40);
block24 = new Block(720,195,30,40);

block25 = new Block(690,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingShot = new SlingShot(polygon, {x:100, y:200})

}

function draw(){
    background("grey");
    Engine.update(engine);
    ground.display();
//1st pyramid   
    fill("lightBlue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   fill("pink");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   fill("lightGreen");
   block13.display();
   block14.display();
   block15.display();
   fill("black");
   block16.display();
// second pyramid
   fill("lightPink");
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   fill("yellow");
   block22.display();
   block23.display();
   block24.display();
   fill("lightGreen");
   block25.display();
  //bases for the pyramids 
   base1.display();
   base2.display();
  

  
imageMode(CENTER);
image(polygon_img , polygon.position.x, polygon.position.y, 40, 40);

slingShot.display();


}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}