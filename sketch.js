var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2)
 wall=color(80,80,80)
 car.velocityX = speed;
  speed=random(55,90)
  weight=random(400,1500)
  if(wall.x-car.x< (car.width+wall.width)/2)
 {
   car.velicotyX=0;
   var deformation=0.5 *weight * speed* speed/22509;
   if(deformation>180)
   {
     carshapeColor=color(255,0,0);
   }
   if(deformation<180 && defromation>100)
   {
     car.shapeColor=color(230,230,0);
   }
   if(deformation<100)
   {
     car.shapeColor=color(0,255,0);
   }
}

function draw() {
  background(255);
  drawSprites();
 }
}