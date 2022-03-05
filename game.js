//create a DOM element




let spaceTimer = 0;
const lasershoot = new Audio('./sounds/lasershoot.wav');
const newball = new Audio('./sounds/pop.wav');

class Game {
  constructor(canvasBoard,screens) {
    this.canvas = canvasBoard;
    this.context = canvasBoard.getContext('2d');
    this.screens = screens;
    this.running = false;
    this.score = 0;
    this.player = new Player(this);
    this.shoots = [];
    this.ball = [new Ball(this)];
    this.enableControls(); 
  }
  start () {
    this.running = true;
   
    this.displayScreen('playing');

    this.loop();
  }

  displayScreen (name) {
    for (let screenName in this.screens) {
      this.screens[screenName].style.display = 'none'
    }
    this.screens[name].style.display = '';
  }

  lose () {
    this.running = false;
    this.displayScreen('end');
  }

  gerateBall() {
    const ball = new Ball(this);
    newball.play();
    this.ball.push(ball);
  }

  generateTinyBall(dir, x, y) {
    let ball = new Ball(this);
    newball.play();

    ball.radius = 15;
    ball.startingPointy = y;
    ball.startingPointx = x;
    ball.gravityx = dir;
    this.ball.push(ball);
  }


  loop() {
    window.requestAnimationFrame(() => {
      this.runLogic();
      this.ball.forEach((_ball) => {
        _ball.runLogic();
      });

      this.draw();

      if (Math.floor(Math.random() * 1000) > 996) {
        // if (this.ball.length <= 1) {
        this.gerateBall();
      }
      
game.player.draw();
if (this.running) {
  this.loop();
}
      //this.loop();
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
          if(this.player.x < 1250)
          this.player.x += 20;
          break;

        case 'ArrowLeft':
          if(this.player.x > 0) {
          this.player.x -= 20;
        }
          break;

        case 'Space':
          let diference = timeSeconds - spaceTimer;
           if(diference < 0){
             diference = 0;
          } else {
          if (diference > 0.3) {
            this.shoot();
            spaceTimer = timeSeconds;
          }
        }
        console.log(diference)
        console.log(spaceTimer)
        break;
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
    this.context.fillStyle = 'red'
    this.context.font = '40px monospace';
    
    this.context.fillText(`Virus Killed: ${this.score}`, 30, 740);
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



//game.loop();

