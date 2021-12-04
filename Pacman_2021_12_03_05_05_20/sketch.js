var pacman;
var pacmanImg;
var pacbackground;

var ghost1;
var ghost1Img;
var ghost2;
var ghost2Img;
var ghost3;
var ghost3Img;
var ghost4;
var ghost4Img;

var ghostwall1;
var ghostwall2;
var ghostwall3;
var ghostwall4;
var ghostwall5;

var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var wall24;
var wall25;
var wall26;
var wall27;
var wall28;

function preload(){

  pacbackground=loadImage("Pacman_background.png");
  pacmanImg=loadAnimation("Pacman_open_mouth.png","Pacman_closed_mouth.png");
  
  ghost1Img=loadImage("Pacman_ghost1-removebg-preview.png");
  ghost2Img=loadImage("Pacman_ghost2-removebg-preview.png");
  ghost3Img=loadImage("Pacman_ghost3-removebg-preview.png");
  ghost4Img=loadImage("Pacman_ghost4-removebg-preview.png");

}

function setup() {

  createCanvas(700, 700);

  pacman=createSprite(350,350,20,20);
  pacman.depth=100;
  pacman.addAnimation("pacman moving",pacmanImg);
  pacman.scale=1.5;

  ghostwall1=createSprite(350,367,174,10);
  ghostwall2=createSprite(268.5,323,11,80.5);
  ghostwall3=createSprite(432,323,11,80.5);
  ghostwall4=createSprite(298.5,287.5,50,10);
  ghostwall5=createSprite(403,287.5,53,10);

  wall1=createSprite(350,158,170,20)

}

function draw() {

  background(pacbackground);

  if(keyDown("UP_ARROW")){
    pacman.velocityY=-3
    pacman.rotation=270
  }
  if(keyDown("DOWN_ARROW")){
    pacman.velocityY=3
    pacman.rotation=90
  }


  drawSprites()

}