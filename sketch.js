const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480, 800);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75))
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175))
  }
  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275))
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375))
  }
  for (var i = 0; i<= width; i = i + 40) {
    particles.push(new Particle(i,800))
  }
  ground = new Ground(0, 791, 960, 20)
}

function draw() {
  background("black");
  Engine.update(engine)
  ground.display()
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display()
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].display()
  }
  
  spawnParticles()
}

function spawnParticles(){
  if (frameCount % 90 === 0) {
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10))    
  }
}