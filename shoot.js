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
      this.y -= 3;

     for (let i=0 ; i<this.game.shoots.length;i++){
         this.checkIntersection2()
    }

    }

     checkIntersection2() {

      for(let i=0; i< this.game.ball.length;i++){
  
     if(this.x + this.width > this.game.ball[i].startingPointx && this.x < this.game.ball[i].startingPointx + this.game.ball[i].radius
      && this.y + this.height >this.game.ball[i].startingPointy && this.y < this.game.ball[i].startingPointy + this.game.ball[i].radius) {
      
        this.game.ball.splice(i,1)
      }
    }
     
     
 
        console.log('teste')
   
    }


    
}