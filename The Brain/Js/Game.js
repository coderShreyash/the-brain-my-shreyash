class Game {
  constructor(){}

 /* getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();
   })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }*/

  start(){
   /* if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }*/
      form = new Form()
      form.display();
    
     }

  /*play(){
    form.hide();
    Player.getPlayerInfo();
    player.getCarRank();
    if(allPlayers !== undefined){

      background(100)
      image(track,0,-displayHeight*4,displayWidth-400,displayHeight*5)
      var index=0;
      var x = 150;
      var y;
      for(var plr in allPlayers){
        index=index+1;
        x=x+170;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
       
 
        if(index==player.index){ 
          strokeWeight(10);
          fill("red")
          ellipse(x,y,100,100);
          //display distance of the player
          textSize(30)
          stroke("black");
          fill("white");
         
          var p1n,p2n,p3n,p4n,p2d,p3d,p4d,p1d;

          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y-50;
       database.ref('players/player1/name').on("value",function(data){
       p1n = data.val();
       })
       database.ref('players/player2/name').on("value",function(data){
       p2n = data.val();
       })
      database.ref('players/player3/name').on("value",function(data){
       p3n = data.val();
       })
      database.ref('players/player4/name').on("value",function(data){
      p4n = data.val();
      })
      database.ref('players/player1/distance').on("value",function(data){
        p1d = data.val();
     })
      database.ref('players/player2/distance').on("value",function(data){
        p2d = data.val();
     })
     database.ref('players/player3/distance').on("value",function(data){
      p3d = data.val();
      })
     database.ref('players/player4/distance').on("value",function(data){
     p4d = data.val();
     })
      text("Leader Board",1150,y-270)
      text("1. "+p1n+" : "+p1d,1150,y-200);
      text("2. "+p2n+" : "+p2d,1150,y-150);
      text("3. "+p3n+" : "+p3d,1150,y-100);
      text("4. "+p4n+" : "+p4d,1150,y-50);
      line(1050,cars.y-50,1050,cars.y+350);
     
        }
        
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(player.distance==4200){
      gameState=2;
      player.rank+=1;
      Player.updateRank(player.rank);
    }
    if(player.rank>=4){
     Player.updateRank(0);
    }
    drawSprites();
  }
  end() {
  
    console.log("Game Ends !!!");
    console.log("Player Rank: "+player.rank);
    if(player.rank===1){
      alert("Congratulations You Got 1st Rank !!!")
    }
    else if(player.rank===2){
      alert("Congratulations You Got 2nd Rank !!!")
    }
    else if(player.rank===3){
      alert("Congratulations You Got 3rd Rank !!!")
    }
   
    
    }
    */
}
