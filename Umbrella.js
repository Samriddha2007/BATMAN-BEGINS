class Umbrella{
  constructor(x, y, width, height , angle) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1.0,
          'isStatic' : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.image = loadImage("images/Walk/walking_1.png","images/Walk/walking_2.png","images/Walk/walking_3.png","images/Walk/walking_4.png","images/Walk/walking_5.png","images/Walk/walking_6.png","images/Walk/walking_7.png","images/Walk/walking_8.png");
      World.add(world, this.body);
    }
    display(){
      push();
      Matter.Body.setAngle(this.body, this.angle);
      translate(this.body.position.x, this.body.position.y);
      rotate(this.angle);
      scale(1.65); 
      fill("black");
      rect( 0, 0, this.width, this.height);
      pop();
    }
}

