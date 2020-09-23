var canvas;
var game;
var database;
var form;
var img;
var player;
var home;
var quizz;
var gamestate =0;
function preload(){
  
  
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight-114);
  database = firebase.database();
  game = new Game();
  game.start();
  type = createSelect();
  type.option("Portrait");
  type.option("Landscape");
  type.position(displayWidth-960,displayHeight-380);
}


function draw(){
  background("pink");
  if(gamestate===0){
   w = type.value();
  if (img) {
    if(w === "Portrait"){
    image(img, displayWidth-800,displayHeight-430, 90,80);
    }
    else if(w === "Landscape"){
      image(img, displayWidth-800,displayHeight-430, 120,80);
      }

  }
}

else{
  type.hide();
}
}
function handleFile(file) {
  if(gamestate===0){
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}
}