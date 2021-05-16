class particle{
    constructor(x,y,r){
     var options={
         isStatic:false,
         restitution:0.3
     }
     this.r = r;
     this.body = Bodies.circle(x,y,r,options);
     this.color = color(random(180,39),random(240,79),random(159,59));
     World.add(world,this.body);



    }
   display(){
     var pos = this.body.position;
     var angle = this.body.angle;

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill(this.color);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);

     pop(); 



   }
}