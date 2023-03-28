
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

	static BALL_WIDTH = 48;
	static BALL_HEIGHT= 48;

  constructor(x, y, deltaX = 3, deltaY = -2) {
		this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.image = this.#createImage(ballImgSrc);
  }

  /* draw this ball, using the given drawing 2d context */
  draw(context) {
  //  alert('vous devez coder la méthode draw() de Ball');
		context.drawImage(this.image, this.x, this.y, Ball.BALL_WIDTH, Ball.BALL_HEIGHT);
  }
  /* la méthode move() */
	move(canvas) {
	 let X = this.x + this.deltaX;
	 let Y = this.y + this.deltaY;

	 if (X < 0 || X + Ball.BALL_WIDTH > canvas.width) {
		 this.deltaX = -this.deltaX;
	 }
	 if (Y < 0 || Y + Ball.BALL_HEIGHT > canvas.height) {
		 this.deltaY = -this.deltaY;
	 }
	 this.x += this.deltaX;
	 this.y += this.deltaY;
  }

  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

}
