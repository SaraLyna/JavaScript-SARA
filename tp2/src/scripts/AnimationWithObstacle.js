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
     this.ball.filter(elt=> !elt.collisionWith(this.obstacle)).forEach((elt,i) =>
     elt.move(this.contexte) );
     this.contexte.clearRect(0, 0, this.canvas.width, this.canvas.height);
     this.ball.forEach(elt => elt.draw(this.contexte) );
     this.obstacle.draw(this.contexte);
     this.animationRequest = requestAnimationFrame(this.animate.bind(this));
   }
}
