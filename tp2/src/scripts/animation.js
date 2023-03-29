import Ball from './ball';

/* TYPE Animation */
export default class Animation {
  /* constructor of the class */
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    // this.ball = new Ball(canvas.width/2, canvas.height/2,20);
    this.balls=[];
    this.animationRequest = null;
  }
/* animate the ball */
  animate() {
    this.animationRequest = requestAnimationFrame(this.animate.bind(this));
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(ball => {
      ball.move(this.canvas);
      ball.draw(this.context);
    });
  }



  /* add ball to the array of balls */
  addBall(){
    const x=alea(this.canvas.width);
    const y=alea(this.canvas.height);
    const deltaX= alea(11) - 3;
    const deltaY= alea(11) -3;
    this.balls.push(new Ball(x,y, deltaX, deltaY));
  }

  /* start the animation or stop it if previously running */
  startAndStop() {
    if (this.animationRequest) {
      cancelAnimationFrame(this.animationRequest);
      this.animationRequest = null;
    } else {
      this.animationRequest = requestAnimationFrame(this.animate.bind(this));
    }
  }
}

/* generate an aleatoire integer beetwen 0 and n */
function alea(n){
  return Math.floor(Math.random() * n);
}
