const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var block1, block2, block3, block4, block5, block6, block7, block8, block9,block10, block11, block12, block13, block14, block15;


function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    block1 = new Box(300, 235, 30, 40);
}
function display(){
    background(225);
    Engine.update(engine)
    block1.display();
}
