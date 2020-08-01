const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImg , fish1,fish2,fish3,fish4;
var fish5,fish6,fish7,fish8,fish9,fish10;
var fish11,fish12;

function preload(){
    backImg = loadImage("sprites/back45.jpg");

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    fish1 = new Fish(700,320,70,70);
    fish2 = new Fish(770,320,70,70);
    fish3 = new Fish(840,320,70,70);
    fish4 = new Fish(910,320,70,70);
    fish5 = new Fish(980,320,70,70);
   
    platform1 = new Ground(840,240,400,20);
    fish6 = new Fish2(735,200,70,70);
    fish7 = new Fish2(805,200,70,70);
    fish8 = new Fish2(875,200,70,70);
    fish9 = new Fish2(945,200,70,70);
    platform2 = new Ground(840,120,300,20);

    fish10 = new Fish(770,100,70,70);
    fish11 = new Fish(840,100,70,70);
    fish12 = new Fish(910,100,70,70);
     
    base = new Ground(150,300,150,170)


    
    
    stone = new Stone(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:200, y:50});
}

function draw(){
    background(backImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
   fish1.display();
    fish2.display();
    fish3.display();
    fish4.display();
    fish5.display();
   
    platform1.display();
    fish6.display();
    fish7.display();
    fish8.display();
    fish9.display();
    platform2.display();

    fish10.display();
    fish11.display();
    fish12.display();
    base.display();

    
   
     
    stone.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.break();
}