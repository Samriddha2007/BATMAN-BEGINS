class Drop
{
    constructor(x,y)
    {
        var options =
        {
            restitution: 0.5,
            friction: 0,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.height = 10;
        this.width = 10;
        World.add(world,this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue")
        ellipse( 0, 0, this.width, this.height);
        pop();
    }
}

