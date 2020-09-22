var stone, river, edges;

function setup() {
  createCanvas(800,400);
  stone = createSprite(200, 50, 50, 50);
  stone.shapeColor = "magenta";
  river = createSprite(500,350,50,50);
  river.shapeColor = "magenta";

  stone.velocityX = 5
  stone.velocityY = 5;
  river.velocityX = -5;
  river.velocityY = -5;

  edges = createEdgeSprites();
}

function draw() {
  background("black");

  if(river.x - stone.x <= river.width/2 + stone.width/2 &&
    stone.x - river.x <= river.width/2 + stone.width/2 &&
    river.y - stone.y <= river.height/2 + stone.height/2 &&
    stone.y - river.y <= river.height/2 + stone.height/2){
      stone.velocityX = -1*stone.velocityX;
      river.velocityX = -1*river.velocityX;
      stone.velocityY = -1*stone.velocityY;
      river.velocityY = -1*river.velocityY;
    }
    else{
      stone.shapeColor = "magenta";
      river.shapeColor = "magenta";
    }

    river.bounceOff(edges);
    stone.bounceOff(edges);

  drawSprites();
}