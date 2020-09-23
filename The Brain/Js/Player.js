class Player {
  constructor(){
    this.index = null;
    this.points = 50;
    this.name = null;
    this.Age = null;
    this.Gender = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      points:this.points,
      rank:this.rank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getCarRank(){
   var carRankRef = database.ref('CarsAtEnd');
   carRankRef.on("value",(rank)=>{
     this.rank = rank.val();
   })


  }
}





