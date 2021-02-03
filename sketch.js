var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2, player3, player4;
var player1Img,player2Img,player3Img,player4Img;
var players;
var enemy, enemyImg;
var player1score =0;
var player2score =0;
var player3score =0;
var player3score =0;
var thanos, thanosImg;

function preload(){
  back_img=loadImage("New_Avengers_Facility_AM.png")
  player1Img= loadImage("70b822cf889586d5493934dfec0824d1.png")
  //player2Img= loadImage()
  enemyImg= loadImage("thanos army.png") 
  thanosImg= loadImage("thanos.jpg") 
}
function setup() {
  createCanvas(1500, 800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
back_img.scale= 1.5
  // Add conditions for gameStates and playerCount
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
   
    game.end();
  }
}