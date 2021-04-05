var car,wall;
var speed,weight;
var deform;

function setup() {
  createCanvas(1400,400);
car=createSprite(50,200,50,50);
car.shapeColor="grey";
wall=createSprite(1200,200,30,height/2);
speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

 
}
function draw() {
  background("blue");  

  
car.velocityX=speed;

if(wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0;
  deform=(0.5*weight*speed*speed)/22500;

  if(deform>=180){
    car.shapeColor=color(255,0,0);
  }

  else if(deform<180 && deform>=100){
    car.shapeColor=color(230,230,0);
      }

      else if(deform<100){
        car.shapeColor=color(0,255,0);
      }
      
}
  drawSprites();
}