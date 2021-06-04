var prince,princess
var joker,monster,dragon
var cage

 function preload(){
   
     prince =loadImage("images/Prince.png") 
     princess = loadImage("images/Princess.png")
     joker = loadImage("images/JokerVillain.jpg")
    monster = loadImage("images/Monsterimage.jpg") 
     dragon = loadImage("images/DragonImage.png")
     cage  = loadImage("images/Cageimage.png")
    

    
 }

 function setup() {

   createCanvas(1200,1200)


    cage = createSprite(1000,500,50,50);
    cage.addImage("cage",cage);
    princess = createSprite(1000,500,50,50);
    princess.addImage("princess",princess);



    
 

 }


 function draw(params) {
   background("WHITE");
   drawSprites();

 }


    
 