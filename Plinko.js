class Plinko {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2    
        }
        this.x = x
        this.y = y
        this.r = 10
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rectMode(CENTER)
        fill("white")
        stroke('white')
        ellipse(0,0,this.r,this.r)
        pop()
    }
}