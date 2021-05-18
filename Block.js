class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      /*var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      */
      if(this.body.speed<3) {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER);
        fill("#ffabf2");
        strokeWeight(2);
        stroke("black")
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
    else {
        World.remove(world, this.body)
        push()
        this.visibility = this.visibility-5
        tint(255, this.visibility)
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, 50, 50)
        pop()
    }}
  
 
  }