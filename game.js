//create a DOM element
const canvasBoard = document.createElement('canvas');

document.body.appendChild(canvasBoard);

canvasBoard.width = window.innerWidth;
canvasBoard.height = window.innerHeight;
let spaceTimer = 0;

class Ball {
    constructor(gameBall){
        this.game = gameBall;

    }

    draw(){
        this.game.context.save();
        this.game.context.beginPath();
        this.game.context.arc(800,200, 0, 2*Math.PI);
        this.game.context.closePath();
        this.game.context.fill();

        this.game.context.restore();
    }
}

class Player {
  constructor(game) {
    //conect the class game to player
    this.game = game;
    this.x = 850;
    this.y = 800;
    this.widthPlayer = 50;
    this.heightPlayer = 50;
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

class Shoot {
  constructor(gameInstance, x, y) {
    this.game = gameInstance;
    this.x = x;
    this.y = y;
    this.width = 5;
    this.height = 20;
  }

  runLogic() {
    this.y -= 3;
  }

  draw() {
    this.game.context.save();

    //paint yellow
    this.game.context.fillStyle = 'yellow';
    //draw a square
    this.game.context.fillRect(this.x, this.y, this.width, this.height);

    this.game.context.restore();
  }
}

class Game {
  constructor(canvasBoard) {
    this.canvas = canvasBoard;
    this.context = canvasBoard.getContext('2d');
    //conector to player class, creates a new player object and saves into this.player?
    //
    this.player = new Player(this);
    this.ball = new Ball (this);
    this.enableControls();
    this.shoots = [];
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.draw();
      this.loop();
    });
  }

  enableControls() {
    window.addEventListener('keydown', (event) => {
      const code = event.code;
      let time = new Date();
      let timeSeconds = time.getSeconds();

      if (code === 'Space') {
      }

      switch (code) {
        case 'ArrowRight':
          this.player.x += 10;
          break;

        case 'ArrowLeft':
          this.player.x -= 10;
          break;

        case 'Space':
          let diference = timeSeconds - spaceTimer;
          console.log(diference);

          if (diference > 0.7) {
            this.shoot();
            spaceTimer = timeSeconds;
          }

          break;
      }
    });
  }

  shoot() {
    const shoot = new Shoot(this, this.player.x + (this.player.widthPlayer/2), this.player.y);
    this.shoots.push(shoot);
  }

  runLogic() {
    for (const shoot of this.shoots) {
      shoot.runLogic();
    }
  }

  draw() {
    this.context.clearRect(0, 0, canvasBoard.width, canvasBoard.height);
    this.player.draw();
    this.ball.draw();

    for (const shoot of this.shoots) {
      shoot.draw();
    }
  }
}

const game = new Game(canvasBoard);

game.player.draw();
game.ball.draw();

game.loop();

game.player.draw();
