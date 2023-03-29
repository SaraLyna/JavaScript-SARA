import Ball from './ball';

/* TYPE Animation */
export default class Animation {
  /* constructor of the class */
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.ball = new Ball(canvas.width/2, canvas.height/2, 20);
    this.animationRequest = null;
  }

  animate() {
    this.animationRequest = requestAnimationFrame(this.animate.bind(this));
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.move(this.canvas);
    this.ball.draw(this.context);




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
