class Ball extends BaseClass{
  constructor(x,y, options){
    var options = {
      restitution: 0,
      friction:0,
      mass: 10
    }
    super(x,y,40, 30);
    
    
  }
  display(){
    
     
    var pos =this.body.position;
      fill("white");
      circle(pos.x, pos.y, 40);
      super.display();
    
  }
}