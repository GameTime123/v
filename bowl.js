class dustbin {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true,
          'restitution':10.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("Trash.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill('blue');
      image(this.image,405,655,250,500)
    }
  };
  