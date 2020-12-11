class Thunderbolt{
    constructor(x, y, width, height,images) {
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage(images);
        World.add(world, this.body);
      }
      display(){
        
        push();
        scale(5.65); 
        image(this.image,this.x,this.y, this.width, this.height);
        pop();
      }
  }
  
  