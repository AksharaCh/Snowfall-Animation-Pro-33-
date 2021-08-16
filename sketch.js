const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas,bg;
var together, engine;
var tom, snow, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

var snow1 = []
var snow2 = []
var snow3 = []
var snow4 = []
var snow5 = []

function preload() {
    bg = loadImage("images/snow1.jpg");
    tomImg1= loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3= loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}


function setup(){
    canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    Engine.update(engine);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    if(frameCount % 20 === 0)
    {
        snow5.push(new Snow(random(5, 955),0, 10))
    }
    if(frameCount % 20 === 5)
    {
        snow1.push(new Snow(random(5, 955), 0, 10))
    }
    if(frameCount % 20 ===10)
    {
        snow2.push(new Snow(random(5, 955), 0, 10))
    }
    if(frameCount % 20 === 15)
    {
        snow3.push(new Snow(random(5, 955), 0, 10))
    }
    if(frameCount % 20 === 20)
    {
        snow4.push(new Snow(random(5, 955), 0, 10))
    }


    for(var s = 0; s < snow1.length; s++)
    {
        snow1[s].display();
    }
    for(var s = 0; s < snow2.length; s++)
    {
        snow2[s].display();
    }
    for(var s = 0; s < snow3.length; s++)
    {
        snow3[s].display();
    }
    for(var s = 0; s < snow4.length; s++)
    {
        snow4[s].display();
    }
    for(var s= 0; s < snow5.length; s++)
    {
        snow5[s].display();
    }

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}