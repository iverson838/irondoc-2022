const canvasBoard = document.querySelector('canvas');
const startScreenElement = document.getElementById('start-screen');
const playingScreenElement = document.getElementById('playing-screen');
const endScreenElement = document.getElementById('game-over-screen');
//console.log(endScreenElement)

const startButton = startScreenElement.querySelector('button');
const tryAgainButton = document.getElementById('reset');
console.log(tryAgainButton)
const screenElements = {
  start: startScreenElement,
  playing: playingScreenElement,
  end: endScreenElement
};

const game = new Game(canvasBoard, screenElements);

startButton.addEventListener('click', () => {

  game.start();
});

tryAgainButton.addEventListener('click', () => {
  
  game.start();
});

//game.player.draw();

