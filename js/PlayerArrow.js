class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    //add the code to move arrow up and down

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  
   
  }

  shoot(archerAngle){
    var velocity =p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{x:velocity.x, y: velocity.y })

    // x:velocity.x *(180/3.14),
    // y;velocity.y*(180/3.14);
    

  }
}
