import Ball from './ball';
import Animation from './animation';

/* TYPE AnimationWithObstacle  */
export default class AnimationWithObstacle extends Animation {
  /* constructor of the class */
  constructor(canvas,obstacle) {
    super(canvas);
    this.obstacle=obstacle;
  }

   animate(){
    balls = balls.map(ball => ball.move());
    const remainingBalls = balls.filter(ball => !ball.collidesWith(this.obstacle));
    this.balls = remainingBalls;
    remainingBalls.forEach(ball => ball.draw(this.ctx));
     this.contexte.clearRect(0, 0, this.canvas.width, this.canvas.height);
     this.animationRequest = requestAnimationFrame(this.animate.bind(this));
   }
}
