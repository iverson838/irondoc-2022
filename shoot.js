class Shoot {
  constructor(gameInstance, x, y) {
    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 20;
  }

  draw() {
    this.game.context.save();
    //paint yellow
    this.game.context.fillStyle = 'yellow';
    //draw a square
    this.game.context.fillRect(this.x, this.y, this.width, this.height);

    this.game.context.restore();
  }

  runLogic() {
    this.y -= 4;

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
        console.log(`Funciona`);
      }

      this.game.ball.forEach((_ball) => {
        let ballIndex = this.game.ball.indexOf(_ball);
        if (
          (this.x + this.width > _ball.startingPointx &&
            this.x < _ball.startingPointx + _ball.radius &&
            this.y + this.height > _ball.startingPointy &&
            this.y < _ball.startingPointy + _ball.radius)
        ) {
          if (_ball.radius > 30) {
            this.game.generateTinyBall(-3,_ball.startingPointx,_ball.startingPointy);
            this.game.generateTinyBall(3,_ball.startingPointx,_ball.startingPointy);
          }
          this.game.ball.splice(ballIndex, 1);
          this.game.shoots.splice(shootIndex, 1);

          
        }
      });
    });
  }
}
