class Obstacle {
    constructor() {
     
     this.image1 = loadImage("images/snake idle.gif");
     this.image2 = loadImage("images/tribe.jpg");
    }
    
    spawnObstacle(){
    if(frameCount % 120 === 0) {
    var obstacle = createSprite(600,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,2));

   switch(rand) {
     case 1: obstacle.addImage(this.image1);
       break;
       case 2: obstacle.addImage(this.image2);
         break;
         default:
           break;
   }
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
   
  }
}
}