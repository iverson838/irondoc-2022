class Player {
    constructor(game) {
      //conect the class game to player
      this.game = game;
      this.x = 900;
      this.y = 800;
      this.widthPlayer = 50;
      this.heightPlayer = 50;

      console.log(this.x)
      
    }
  
    draw() {
      //save the state
      this.game.context.save();
      //draw a square
      this.game.context.fillRect(
        this.x,
        this.y,
        this.widthPlayer,
        this.heightPlayer
      );
  
      this.game.context.restore();
    }
  }