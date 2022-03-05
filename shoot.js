const syringe = new Image();
syringe.src = './img/syringe.png';

class Shoot {
  constructor(gameInstance, x, y) {
    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 40;
  }

  draw() {
    this.game.context.save();

    //this.game.context.drawImage(syringe, this.x, this.y,this.width,this.height);
    this.game.context.fillStyle = 'red'
    this.game.context.fillRect(this.x, this.y, this.width, this.height);

    this.game.context.restore();
  }

  runLogic() {
    this.y -= 5;

    // for (let z = 0; z < this.game.shoots.length; z++) {
    //   for (let i = 0; i < this.game.ball.length; i++) {
    //     if (
    //       this.x + this.width > this.game.ball[i].startingPointx &&
    //       this.x <
    //         this.game.ball[i].startingPointx + this.game.ball[i].radius &&
    //       this.y + this.height > this.game.ball[i].startingPointy &&
    //       this.y < this.game.ball[i].startingPointy + this.game.ball[i].radius
    //     ) {
    //       this.game.generateTinyBall(-3,this.game.ball[i].startingPointx,this.game.ball[i].startingPointy);
    //       this.game.generateTinyBall(3,this.game.ball[i].startingPointx,this.game.ball[i].startingPointy);
    //       this.game.ball.splice(i, 1);
    //       this.game.shoots.splice(z, 1);

    //     }
    //   }
    // }

    this.game.shoots.forEach((shoot) => {
      let shootIndex = this.game.shoots.indexOf(shoot);
      if (shoot.y < 0) {
        this.game.shoots.splice(shootIndex, 1);
      }

      this.game.ball.forEach((_ball) => {
        let ballIndex = this.game.ball.indexOf(_ball);
        if (
          shoot.x + shoot.width > _ball.startingPointx &&
          shoot.x < _ball.startingPointx + _ball.width &&
          shoot.y + shoot.height > _ball.startingPointy &&
          shoot.y < _ball.startingPointy + _ball.width
        ) {
          if (_ball.radius > 20) {
            this.game.generateTinyBall(
              -3,
              _ball.startingPointx,
              _ball.startingPointy+50
            );
            this.game.generateTinyBall(
              3,
              _ball.startingPointx,
              _ball.startingPointy+50
            );
            this.game.score += 10;
          }
         
          else{this.game.score += 20}
          this.game.ball.splice(ballIndex, 1);
          this.game.shoots.splice(shootIndex, 1);
          
        }
      });
    });
  }
}
