var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];



var score =0;
function setup() {
  createCanvas(800, 630);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  division1 = new Divisions(100,580,20,300);
  division2 = new Divisions(200,580,20,300);
  division3 = new Divisions(300,580,20,300);
  division4 = new Divisions(400,580,20,300);
  division5 = new Divisions(500,580,20,300);
  division6 = new Divisions(600,580,20,300);
  division7 = new Divisions(700,580,20,300);



    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("yellow");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     division1.display();
     division2.display();
     division3.display();
     division4.display();
     division5.display();
     division6.display();
     division7.display();
     

     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}