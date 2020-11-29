const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var bird;
var pig1, pig2;
//var constrainedLog;
var sling;
var bgImage;

var gameState = "onSling";
var bg = "images/bg1.png";
var score = 0;

function preload() {
  getBgImage();
}

function setup() {
  var canvas = createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(740,320,70,70);
  box2 = new Box(880,320,70,70);
  box3 = new Box(740,240,70,70);
  box4 = new Box(880,240,70,70);
  box5 = new Box(810,200,60,60);
  log1 = new Log(810,300,220,PI/2);
  log2 = new Log(810,230,220,PI/2);
  log3 = new Log(760,140,100,PI/6.5);
  log4 = new Log(860,140,100,-PI/6.5);
  //constrainedLog = new Log(230,180,80,PI/2);
  bird = new Bird(200,50);
  pig1 = new Pig(810,350);
  pig2 = new Pig(810,280);
  sling = new Slingshot(bird.body, {x: 200, y: 50});
  ground = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170);
}

function draw() {
  if (bgImage) {
    background(bgImage);
  }
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
  pig1.display();
  pig2.display();
  sling.display();
  ground.display();
  platform.display();
  //constrainedLog.display();
}

function mouseDragged() {
  if (gameState != "offSling") {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
  }
}

function mouseReleased() {
  sling.fly();
  gameState = "offSling";
}

function keyPressed() {
  if (keyCode == 32) {
    // sling.attach(bird.body);
  }
}

async function getBgImage() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Melbourne");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  if (hour >= 6 && hour <= 19) {
    bg = "images/bg1.png";
  } else {
    bg = "images/bg2.png";

    bgImage = loadImage(bg);
  }
}