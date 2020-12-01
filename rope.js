class Rope {
  constructor(bodyA,bodyB,offsetX,offsetY) {

    var options = {
      bodyA: bodyA.body,
      bodyB: bodyB.body,
      pointB: {x: offsetX, y: offsetY}
    }

    this.offsetX = offsetX;
    this.offsetY = offsetY;

    this.rope = Constraint.create(options);
    World.add(world,this.rope);
  }
  
  display() {
    push();
    var bodyA = this.rope.bodyA.position;
    var bodyB = this.rope.bodyB.position;
    stroke(0);
    line(bodyA.x, bodyA.y, bodyB.x + this.offsetX, bodyB.y + this.offsetY);
    pop();
  }
}