class Snow {
  constructor(x, y, r) {
    var options = {
     'restitution' :0.8,
     'friction' :3,
     'density' :30
    };

    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.rectangle(x, y, r, options);
    this.image = loadImage("images/snow4.webp");
    World.add(world, this.body);

  };

  display(){
    //var pos = this.body.position;
    //var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    //fill('')
    imageMode(CENTER)
    image(this.image, 0, 0, this.r, thir.r);
    pop();
  };
};
