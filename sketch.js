//Create variables here
var dog, happyDog;
var database, foodS, foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(10,10,10,10);
  dog.addImage = ("dog",dogImg);
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(happyDogImg);
}
  drawSprites()
  //add styles here
text("food stock is" + foodStock, 450, 450);
textSize = 10;
fill(yellow);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if (x<=0 ){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



