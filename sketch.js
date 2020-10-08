var bullet,wall;
var speed,weight;
var thickness; 

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if (wall.x - bullet.x < bullet.width/2 + wall.width/2 ) {
  damage = 0.5 * weight * speed * speed / thickness * thickness *thickness;
  bullet.velocityX = 0;
  if (damage < 10 ) {
    bullet.shapeColor = "red";
  }
  if(damage > 10 )
  bullet.shapeColor = "green";
  }
  





  drawSprites();
}