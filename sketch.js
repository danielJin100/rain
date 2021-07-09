const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var dropArray = [];

function preload(){
    
}

function setup(){
   createCanvas(400, 400)
   engine = Engine.create();
    world = engine.world;

   for(var i = 0; i < 100; i++){
   dropArray.push(new drop(random(0, 400), random(0, 400), 5));
}}

function draw(){
   background(0);
   Engine.update(engine);
   for(var i = 0; i < 100; i++){
      dropArray[i].display();
   }
}   

