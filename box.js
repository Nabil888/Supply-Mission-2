class Box{
    constructor(x,y,width,height){
        var options = {
            'isStatic': true,
            'friction': 0.5
        }
        this.box = Bodies.rectangle(x,y,width,height,options)
        
        this.width = width;
        this.height = height;
        World.add(world,this.box);
    }
    display(){
        rectMode(CENTER);
        fill("blue");
        push();
        strokeWeight(4);
        stroke("yellow");
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
        pop();
    }
}