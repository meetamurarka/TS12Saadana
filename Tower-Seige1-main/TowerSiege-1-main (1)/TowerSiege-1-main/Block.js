class Block{
  constructor(x, y, width, height) {
    var options = {
      'density':0.5,
        'restitution':0.8,
        'friction':0.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
 //fill("pink");
    rect( 0, 0, this.width, this.height);
    pop();
  }
}