class sadboi{
    constructor(x,y,width,height){
    var options = {
    isStatic:false, restitution:0.5,friction:10
    
    
    }
this.Body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
this.height = height;
this.width=width;
this.x = x;
this.y = y;
World.add(world, this.Body);

    }
display(){
var pos = this.Body.position
rectMode(CENTER)
fill('red')
rect(pos.x, pos.y, this.width, this.height);

}
}