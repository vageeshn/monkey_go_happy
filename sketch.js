var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(50,280,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,300,800,10);
  ground.velocityX = -5;
 
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0
  
}


function draw() {
  background("cyan")
  
   textSize(25);
   fill("black");
   text("Survival Time: " +score,100,50);
   score = score + Math.round(getFrameRate()/60);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 260) {
        monkey.velocityY = -15; 
      
    }
   monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);

 drawSprites(); 
  
  food();
  rocks();
}

function food(){
  if (frameCount % 80 === 0){
    banana = createSprite(400,200,20,200);
    banana.y = Math.round(random(80,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.setLifetime = 100;
    
    FoodGroup.add(banana);
    
  }
}
  
  function rocks(){
  if (frameCount % 200 === 0){
    rock = createSprite(400,278,20,20);
    rock.addImage("rock",obstaceImage)
    rock.scale = 0.1;
    rock.velocityX = -4;
    rock.seLifetime = 100;
    
    obstacleGroup.add(rock);
    
  }
   
}




