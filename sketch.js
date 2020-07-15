//Global variables
var bullet,wall,thickness;
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 70, 25);
  bullet.shapeColor="white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

   bullet.velocityX=speed;

   damage = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);
}

function draw() {
  background("black");  

  // To check the Damage


  if(hascollided(bullet,wall)){

    bullet.velocityX=0;
    

    if(damage>10){

      wall.shapeColor=color(255,0,0);
      
    }

    if(damage<10){

      wall.shapeColor=color(0,255,0);
      
    }
  }
console.log(damage);

  drawSprites();
}
function hascollided(lbullet,lwall){

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

}
      
  