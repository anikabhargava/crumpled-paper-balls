class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height, ground_options)
        World.add(myWorld,this.body)
        this.width=width
        this.h=height
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.h)
    }
}