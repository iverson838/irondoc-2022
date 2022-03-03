const imageDead = new Image();
  imageDead.src = './img/MUERTE.png'

class Player {
    constructor(game) {
      //conect the class game to player
      this.game = game;
      this.x = 750;
      this.y = 650;
      this.widthPlayer = 172;
      this.heightPlayer = 200;

      console.log(this.x)
      
    }
  
    draw() {
      //save the state
      this.game.context.save();
      //draw a square
      this.game.context.drawImage(imageDead, this.x,this.y,172,200);
      // this.game.context.fillRect(
      //   this.x,
      //   this.y,
      //   this.widthPlayer,
      //   this.heightPlayer
      // );
  
      this.game.context.restore();
    }
  }