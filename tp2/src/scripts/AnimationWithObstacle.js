import Ball from './ball';
import Animation from './animation';
import Obstacle from './obstacle';
import KeyManager from './keyManager';

/* TYPE AnimationWithObstacle  */
export default class AnimationWithObstacle extends Animation {
  /* constructor of the class */
  constructor(canvas) {
    super(canvas);
    this.obstacle = new Obstacle(10,10,60,50);
    this.keyManager = new KeyManager();
  }

  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls = this.balls.filter(balle=> { balle.move(this.canvas);
        return ! balle.collisionWith(this.obstacle);});
    this.balls.forEach(balle=>{  balle.draw(this.context);});
    this.obstacle.handleMoveKeys(this.keyManager);
    this.obstacle.move(this.canvas);
    this.obstacle.draw(this.context);
    this.animationRequest = requestAnimationFrame(this.animate.bind(this));
   }

  keyDownActionHandler(event) {
  switch (event.key) {
      case "ArrowLeft":
      case "Left":
          this.keyManager.leftPressed();
          break;
      case "ArrowRight":
      case "Right":
          this.keyManager.rightPressed();
          break;
      case "ArrowUp":
      case "Up":
          this.keyManager.upPressed();
          break;
      case "ArrowDown":
      case "Down":
          this.keyManager.downPressed();
          break;
      default: return;
  }
  event.preventDefault();
}

keyUpActionHandler(event) {
  switch (event.key) {
      case "ArrowLeft":
      case "Left":
          this.keyManager.leftReleased();
          break;
      case "ArrowRight":
      case "Right":
          this.keyManager.rightReleased();
          break;
      case "ArrowUp":
      case "Up":
          this.keyManager.upReleased();
          break;
      case "ArrowDown":
      case "Down":
          this.keyManager.downReleased();
          break;
      default: return;
  }
  event.preventDefault();
}

}
