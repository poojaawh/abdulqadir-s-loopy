var character;
var ground;
var invisibleGround;
var bottle;
function setup() {
  createCanvas(600,600);  
ground = new Ground(300,300,700,700) 
invisibleGround = new Ground(300,570,700,10)
character = new Character(300,550)
bottle = new Water()
invisibleGround.ground.visible=false;
obstacle = new Obstacle();
}

function draw() {
  background(255,0,0);  
  ground.display();
 
 character.display();
 character.move();
 character.jump();
 bottle.appear();
obstacle.spawnObstacle();
 character.character.collide(invisibleGround.ground);
 drawSprites();
}
