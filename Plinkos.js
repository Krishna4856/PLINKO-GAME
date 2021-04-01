class Plinkos{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:1,
            friction:0
            
        }
        this.r=7;
        this.body=Bodies.circle(x,y,7,options);

        World.add(world,this.body);
           
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill("WHITE");
      
        ellipseMode(RADIUS);
        ellipse(0,0,7,7);
        pop();
      
    }
}