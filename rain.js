class drop{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill(0, 0, 255);
        if(pos.y > 400){
          Matter.Body.setPosition(this.body, {x:pos.x,y:0});
        }
        ellipse(pos.x, pos.y, this.radius);
        pop();
      }
}