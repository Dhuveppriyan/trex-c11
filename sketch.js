var trex,treximage
var  ground,groundimage
var invisibleground
function preload(){

  treximage=loadAnimation("trex1.png","trex3.png","trex4.png")
groundimage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,160,20,50)
 trex.addAnimation("dino",treximage)

 trex.scale=0.5
  //create a trex sprite
 ground=createSprite(200,180,400,20)
ground.addImage("sand",groundimage)
 
invisibleground=createSprite(200,190,400,10)
invisibleground.visible=false          
}


function draw(){
background(180 )

  
if (keyDown("space")&&trex.y>=140){
  trex.velocityY=-10
}
trex.velocityY+=0.5 

trex.collide(invisibleground)
 
ground.velocityX=-4

if (ground.x<0){
  ground.x=ground.width/2
  
}









drawSprites()



}












