
var iss,issImg;
var bg,scImg1,scImg2,scImg3,scImg4;
var hasDocked=false;
function preload(){
bg=loadImage("spacebg.jpg")
scImg1=loadImage("spacecraft1.png");
scImg2=loadImage("spacecraft2.png");
scImg3=loadImage("spacecraft3.png");
scImg4=loadImage("spacecraft4.png");
issImg=loadImage("iss.png");
}




function setup() {
  createCanvas(800,400);
  spaceCraft=createSprite(285,240);
  spaceCraft.addImage(scImg1);
  spaceCraft.scale=0.15
  iss=createSprite(330, 120, 50, 50);
  iss.addImage("iss",issImg);
  iss.scale=0.45
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random (-1,1)

  
  if(keyDown("UP_ARROW")){

    spaceCraft.y=spaceCraft.y-1
  }
  if(keyDown("DOWN_ARROW")){

    spaceCraft.y=spaceCraft.y+1
  }
  if(keyDown("LEFT_ARROW")){

    spaceCraft.x=spaceCraft.x-1
  }
  if(keyDown("RIGHT_ARROW")){

    spaceCraft.x=spaceCraft.x+1
  }

}
if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){

  hasDocked=true;
  textSize(25);
  fill ("white");
  text("DOCKING SUCCESSFULL",200,300);
}

  drawSprites();
}