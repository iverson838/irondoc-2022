
    
  
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
      // ballImage.onload = function() {
      //   this.game.context.drawImage(ballImage,0,0);
      // }
      this.game.context.arc(this.startingPointx, this.startingPointy, this.radius, 0, 2 * Math.PI);
      this.game.context.closePath();
      
       this.game.context.fill();
      var image = new Image();
  image.src = 'http://www.monkey-and-banana.com/wp-content/uploads/2009/10/star-wars-droids.jpg'
      image.onload = () => {

      this.game.context.save();
      this.game.context.globalCompositeOperation = 'source-in';
      this.game.context.drawImage(image, 0,0);
      this.game.context.restore();
};
//       function make_base()
// {
//   base_image = new Image();
//   base_image.src = 'img/base.png';
//   base_image.onload = function(){
//     context.drawImage(base_image, 0, 0);
//   }
// }
      
    }

     createImg(){

      const ballImage = new Image();
      ballImage.src = './img/virus.png'
      ballImage.onload = function(){
        this.game.context.drawImage(ballImage, 0, 0);
      }
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