var garden15Img, garden15;
var sunImg, sun;
var snowflakeImg, snowflake;
var flower, flowerImg;

var gameState = "play";


function preload(){
  garden15Img = loadImage("Garden15.png");
  sunImg = loadImage("Sun.jpg");
  snowflakeImg = loadImage("Snowflake.webp");
  flowerImg = loadImage("Flower.png");
  
}

function setup() {
  createCanvas(600,600);
  
  garden15.addImage("garden15",garden15Img);
  garden15 = createSprite(600,600);
  garden15.velocityY = 1;
  
  
  flower.addImage("flower", flowerImg);
  flower = createSprite(200,200,50,50);
  flower.scale = 0.3;
 

  score = 0;
}


function draw() {
  background("#42f551");

  text("Score: "+ score, 500,50);


  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        flower.x = flower.x - 3;

    }
    if(keyDown("right_arrow")){
  
          flower.x = flower.x + 3;

      
    }
    if(keyDown("space")){
  
         flower.velocityY = -10;

      
    }
  
  flower.velocityY = flower.velocityY + 0.8;
  
   
     
    
      if(garden15.y > 400){
      garden15.y = 300
      }

      spawnSprites();

  

     if(sun.isTouching(flower)){
      flower.velocityY = 0;
    }
    if(snowflake.isTouching(flower) || garden.y > 600){
      flower.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("blue");
    fill("blue");
    textSize(30);
    text("Game Over", 230,250)
  }


  if(flower.collide(sun)){
    score = score + 1;
    sun.destroy();
  }
}

function spawnSprites()
 {
  
  if (frameCount % 240 === 0) {
    var sun = createSprite(200, -50);
    var snowflake = createSprite(200,10);
   
   
    
    sun.x = Math.round(random(120, 400));
    snowflake.x = sun.x;
  
    
    sun.velocityY = 1;
    snowflake.velocityY = 1;
   
    
     
    flower.depth = sun.depth;
    flower.depth += 1;

    

 sun.lifetime = 800;
  snowflake.lifetime = 800;
    
    
  }
}