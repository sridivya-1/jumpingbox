var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(10,500,220,10);
surface1.shapeColor = "blue"
surface2 = createSprite(240,500,220,10);
surface2.shapeColor = "orange"
surface3 = createSprite(470,500,220,10);
surface3.shapeColor = "red"
surface4 = createSprite(710,500,240,10);
surface4.shapeColor = "green"

//create box sprite and give velocity
box = createSprite(random(2,170),10,20,20)
box.shapeColor = "white"
box.velocityX = -4
box.velocityY = -5
edges = createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue"
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "orange"
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "red"
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green"
    }
    drawSprites()
}
