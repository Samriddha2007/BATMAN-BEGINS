class Umbrella_copy{
  constructor(x, y, width, height) {
      var options = {
          'isStatic' : true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/Walk/walking_1.png","images/Walk/walking_2.png","images/Walk/walking_3.png","images/Walk/walking_4.png","images/Walk/walking_5.png","images/Walk/walking_6.png","images/Walk/walking_7.png","images/Walk/walking_8.png");
      World.add(world, this.body);
    }
    display(){
      
      push();
      scale(5.65); 
      image(this.image, 50, 43, this.width, this.height);
      pop();
    }
}

