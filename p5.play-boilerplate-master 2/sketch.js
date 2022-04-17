function preload(){
  PlaneImg = loadImage("armyplane.png")
  BombImg = loadImage("bomb.png")
  houseImg = loadImage("house.png")
  bgImg = loadImage("bg.jpg")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 2

  plane = createSprite (displayWidth-200,displayHeight-700,50,50)
  plane.addImage(PlaneImg)
  plane.scale = 0.2

}
function draw() {
  background(255,255,255);  
  drawSprites();
}