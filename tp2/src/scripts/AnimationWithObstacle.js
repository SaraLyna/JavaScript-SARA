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
     this.ball.filter(elt=> !elt.collisionWith(this.obstacle)).forEach((elt,i) => elt.move(this.canvas) );
     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     this.ball.forEach((elt,i) => elt.draw(this.context) );
     this.obstacle.draw(this.context);
     this.animationRequest = requestAnimationFrame(this.animate.bind(this));
   }
}
