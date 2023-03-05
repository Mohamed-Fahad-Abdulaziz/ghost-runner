var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200);
  ghost.scale = 0.3;
  ghost.addImage("ghost",ghostImg);
  doorsGroup = createGroup()
  climbersGroup = createGroup()
  invisibleBlockGroup = createGroup();
  invisibleBlock1 = createSprite(300,600,600,10);
  invisibleBlock2 = createSprite(600,0,1500,10);
  
 
   invisibleBlockGroup.add(invisibleBlock1,invisibleBlock2);
  
}

function draw() {
  background(200);

  
   
  
  
  





  if(gameState === "play"){

  
  if(keyDown("LEFT_ARROW")){
    ghost.x = ghost.x-3;
  }

  if(keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x+3;
  }
  if(keyDown("SPACE")){
    ghost.velocityY = -10;
  }
 ghost.velocityY= ghost.velocityY + 0.8;


  if(tower.y > 400){
      tower.y = 300
    }
    if (climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0
      
    } 

    if (doorsGroup.isTouching(ghost)){
      ghost.destroy();
      gameState = "end"
    }
  }

   else if (gameState === "end"){
    stroke("yellow") 
    fill("yellow");
    textSize(30);
    text("GAME OVER",230,250);




   }
    

    drawSprites();
    spawnDoors();
}

function spawnDoors(){
 if(frameCount % 160 === 0);
   var door = createSprite(200,-50)
   var climber = createSprite(200,10)
   door.addImage(doorImg);
   climber.addImage(climberImg);
  
   climber.velocityY = 1
   door.velocityY= 1

   doorsGroup.x = Math.round(random(120,480));
   

   climber.x = door.x

   door.lifetime = 800;
   climber.lifetime = 800;

   doorsGroup.add(door);
   climbersGroup.add(climber);




}