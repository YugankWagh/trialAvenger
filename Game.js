class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,650);
    player1.addImage("player1",player1Img);
    player1.scale= 0.1
    player1.x = World.mouseX;
    
    player2 = createSprite(800,500);
   // player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
      form.hide();

      Player.getPlayerInfo();
     image(back_img, 0, 0, 1500, 800);
      // var x =100;
      //var y=200;
       var index =0
        drawSprites();
        for(var plr in allPlayers){
         index = index+1;
         //var x = 500-allPlayers[plr].distance;
         //var y= 500;
         // players[index -1].x = x;
         // players[index - 1].y = y;
            textSize(25);
            fill("white");
             text("Player 1 :" +allPlayers.player1.score,50,50);
              text("Player 2 :" + allPlayers.player2.score, 50, 100);
                 
         }
      

 //if (keyWentDown(UP_ARROW)) {
       
      // player.update();
    // }
 //if (keyWentDown(DOWN_ARROW)) {
      //player1.x = player.x - 10
    // player.update();
//}
            
  if (frameCount % 100 === 0) {
                     enemy = createSprite(random(1,1500), 90, 100, 100);
                     enemy.velocityY = 2;
                     enemy.addImage(enemyImg)
                    }
                    if (frameCount % 1000 === 0) {
                        thanos = createSprite(random(1,1500), 90, 100, 100);
                        thanos.velocityY = 3;
                        thanos.addImage(thanosImg)
                        thanos.scale= 0.2;
                       }
                 
                 /* if (player.index !== null) {
                      for (var i = 0; i < 100; i++) {
                          if (enemy.isTouching(players)) {
                              enemy.get(i).destroy();
                              player.score =player.score+1;
                              player.update();
                              
                          }
                          
                      }
                    }*/         

    }

    end(){
       console.log("Game Ended");
    }
}