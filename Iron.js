class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.01,
          'friction':5.5,
          'density':4.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(180);
      stroke ("black");
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }