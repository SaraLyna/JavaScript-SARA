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
    this.ball.forEach(ball => ball.move(this.canvas));
    this.ball = this.ball.filter(balle=> !balle.collisionWith(this.obstacle));
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.obstacle.draw(this.context);
    this.ball.forEach(balle => balle.draw(this.context) );
    this.animationRequest = window.requestAnimationFrame(this.animate.bind(this));
   }
}
