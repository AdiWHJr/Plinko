class Particle {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2    
        }
        this.x = x
        this.y = y
        this.r = 10
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        this.color = color(random(0,255), random(0.255), random(0,255))
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}