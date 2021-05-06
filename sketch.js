var bg
var cat,catImg1,catImg2,catImg4,catImg3
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg4=loadAnimation("images/cat4.png")
mouseImg1=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg4=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(800,600);
cat.addAnimation("catsleeping",catImg1);
cat.scale=0.2
mouse=createSprite(200,600);
mouse.addAnimation("mousestanding",mouseImg1);
mouse.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocity.x=0 
    cat.addAnimation("catgoing",catImg4)
    cat.scale=0.2
    cat.changeAnimation("catgoing")
    mouse.addAnimation("mousemoving",mouseImg4)
    mouse.scale=0.2
    mouse.changeAnimation("mousemoving")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.velocityX=-4
cat.addAnimation("catrunning",catImg2)
cat.changeAnimation("catrunning")
mouse.addAnimation("mouseteasing",mouseImg2)
mouse.changeAnimation("mouseteasing")
}

}
