const gameOver = new Audio('./sounds/game-over.wav');
const image = new Image();
image.src = './img/layer1.png';

const imageVirus = new Image();
imageVirus.src = './img/virus2_teste.png';

class Ball {
  constructor(gameBall) {
    this.game = gameBall;

    this.gravity = 5;
    this.gravityx = 3;
    this.radius = 30;
    this.width = 100;
    this.height = 102;
    this.startingPointy = Math.floor(Math.random() * (50 - 100)) + 100;
    this.startingPointx = Math.floor(Math.random() * 1200);
  }

  draw() {
    this.game.context.save();
    //this.game.context.drawImage(ballImage,this.startingPointx, this.startingPointy, this.radius*2, this.radius*2)
    // this.game.context.beginPath();
    // // ballImage.onload = function() {
    // //   this.game.context.drawImage(ballImage,0,0);
    // // }
    // this.game.context.arc(this.startingPointx, this.startingPointy, this.radius, 0, 2 * Math.PI);
    // this.game.context.closePath();

    //  this.game.context.fill();

    if (this.radius > 28) {
      this.game.context.drawImage(
        image,
        this.startingPointx,
        this.startingPointy,
        100,
        102
      );
    } else {
      this.width = 30;
      this.height = 20;

      this.game.context.drawImage(
        imageVirus,
        this.startingPointx,
        this.startingPointy,
        47,
        47
      );
    }
    this.game.context.restore();
  }

  runLogic() {
    this.startingPointy += this.gravity;
    this.startingPointx += this.gravityx;

    if (this.startingPointy > 700 || this.startingPointy < 0) {
      this.gravity *= -1;
    }

    if (this.startingPointx > 1300) {
      this.gravityx *= -1;
    } else if (this.startingPointx < 0) {
      this.gravityx *= -1;
    }

    //console.log(this.game.player)
    this.checkIntersection(this.game.player);
  }

  checkIntersection() {
    // if (
    //   this.game.player.x + this.game.player.widthPlayer > this.startingPointx &&
    //   this.game.player.x < this.startingPointx + this.width &&
    //   this.game.player.y + this.game.player.heightPlayer >
    //     this.startingPointy &&
    //   this.game.player.y < this.startingPointy + this.width
    // )

    if (
      this.startingPointx + this.radius > this.game.player.x &&
      this.startingPointx < this.game.player.x + this.game.player.widthPlayer &&
      this.startingPointy + this.radius > this.game.player.y &&
      this.startingPointy < this.game.player.y + this.game.player.heightPlayer
    ) {
      gameOver.play();

      this.game.lose();

      gameOver.pause();
    }


    
  }
}
