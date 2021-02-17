class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':4.0,
          'density':3.0
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //circleMode(CENTER);
      fill("blue");
      stroke ("black");
      strokeWeight(4);
      circle(0, 0, this.radius);
      pop();
    }
  };