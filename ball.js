const ballImage = new Image();
ballImage.src = './img/virus.png'

class Ball {
    constructor(gameBall) {
      this.game = gameBall;
      
      this.gravity = 3;
      this.gravityx = 5;
      this.radius = 50;
      this.startingPointy = Math.floor(Math.random() * (500 - 200)) + 200;
      this.startingPointx = Math.floor(Math.random() * 1200);
      
    }
  
    draw() {
      this.game.context.save();
      //this.game.context.drawImage(ballImage,this.startingPointx, this.startingPointy, this.radius, 0, 2 * Math.PI)
      this.game.context.beginPath();
      this.game.context.arc(this.startingPointx, this.startingPointy, this.radius, 0, 2 * Math.PI);
      this.game.context.closePath();
      this.game.context.fill();
      
    }
  
      runLogic() {
  
        this.startingPointy += this.gravity
        this.startingPointx += this.gravityx
        

        if(this.startingPointy > 800 || this.startingPointy < 150){
           this.gravity *= -1

            

        }
            
      
        if(this.startingPointx > 1250){
            this.gravityx *= -1
        } else if (this.startingPointx < 50){
            this.gravityx *= -1
        }

    

        
        //console.log(this.game.player)
        this.checkIntersection(this.game.player)
      }
  
      checkIntersection() {
  
        if(this.game.player.x + this.game.player.widthPlayer > this.startingPointx && this.game.player.x < this.startingPointx + this.radius
         && this.game.player.y + this.game.player.heightPlayer >this.startingPointy && this.game.player.y < this.startingPointy + this.radius) {
           alert('game loose')
         }
  
         
    
      }
  
  
  
     
  }