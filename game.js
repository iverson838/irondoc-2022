//create a DOM element
const canvasBoard = document.createElement('canvas');
document.body.appendChild(canvasBoard);

canvasBoard.width = window.innerWidth;
canvasBoard.height = window.innerHeight;


let spaceTimer = 0;
const lasershoot = new Audio('./sounds/lasershoot.wav');
const newball = new Audio('./sounds/pop.wav');

class Game {
  constructor(canvasBoard) {
    this.canvas = canvasBoard;
    this.context = canvasBoard.getContext('2d');
    //conector to player class, creates a new player object and saves into this.player?
    this.maxWidth = canvasBoard.width;
    this.maxHeight = canvasBoard.height;
    this.score = 0;
    this.player = new Player(this);
    this.enableControls();
    this.shoots = [];
    this.ball = [new Ball(this)];
    
    
  }

 

  gerateBall() {
    const ball = new Ball(this);
    newball.play();
    this.ball.push(ball);
  }

  generateTinyBall(dir, x, y) {
    let ball = new Ball(this);
    newball.play();

    ball.radius = 25;
    ball.startingPointy = y;
    ball.startingPointx = x;
    ball.gravityx = dir;
    this.ball.push(ball);
  }

  gerateBall2() {
    const ball2 = new Ball2(this);
    this.ball2.push(ball2);
  }

  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.ball.forEach((_ball) => {
        _ball.runLogic();
      });

      this.draw();

      if (Math.floor(Math.random() * 1000) > 997) {
        this.gerateBall();
      }
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
           if(diference < 0){
             diference = 0;
          } else {
          if (diference > 0.5) {
            this.shoot();
            spaceTimer = timeSeconds;
          }
        }
      }
    });
  }

  shoot() {
    lasershoot.play();
    const shoot = new Shoot(
      this,
      this.player.x + this.player.widthPlayer / 2,
      this.player.y
    );
    this.shoots.push(shoot);
  }

  runLogic() {
    //  if(Math.random()>0.5){
    //  this.gerateBall()
    // }

    for (const shoot of this.shoots) {
      shoot.runLogic();
    }
  }

  drawScore() {
    this.context.font = '64px monospace';
    this.context.fillText(this.score, 100, 900);
  }

  draw() {
    this.context.clearRect(0, 0, canvasBoard.width, canvasBoard.height);
    this.player.draw();
    this.drawScore();
    this.ball.forEach((_ball) => {
      _ball.draw();
    });

    for (const shoot of this.shoots) {
      shoot.draw();
    }
  }
}

const game = new Game(canvasBoard);

game.player.draw();

game.loop();
