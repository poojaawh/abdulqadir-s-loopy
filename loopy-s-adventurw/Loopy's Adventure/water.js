class Water {
    constructor() {
     // this.water=createSprite(x,y,20,50);
      //this.y=y    
      //this.image=loadImage("images/Untitled.png")    
    }
  display(){
    //this.ground.addImage(this.image);
  }
appear(){
    if (World.frameCount % 250 === 0) {
        this.water=createSprite(600,500,20,50);
        this.water.x =Math.round( random(200,550));
        //this.water.y =Math.round( random(470,530));
        //.setAnimation("cloud");
        //cloud.scale = 0.5;
        //this.water.velocityX = -3;
        
         //assign lifetime to the variable
        this.water.lifetime = 100;
        
        //adjust the depth
       // cloud.depth = trex.depth;
        //trex.depth = trex.depth + 1;
        
        //add each cloud to the group
        //CloudsGroup.add(cloud);
      }
}
}
