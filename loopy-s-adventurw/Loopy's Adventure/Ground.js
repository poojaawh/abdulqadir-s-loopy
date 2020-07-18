class Ground {
    constructor(x,y,width,height) {
      this.ground=createSprite(x,y,width,height);
    this.image=loadImage("images/Untitled.png")    
    }
  display(){
    this.ground.addImage(this.image);
  }
}