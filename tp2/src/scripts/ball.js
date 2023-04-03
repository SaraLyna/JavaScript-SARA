
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

	static BALL_WIDTH = 48;
	static BALL_HEIGHT= 48;

  constructor(x, y, deltaX = 3, deltaY = -2, radius) {
		this.x = x;
    this.y = y;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
    this.image = this.#createImage(ballImgSrc);
		this.radius = radius;
  }

  /* draw this ball, using the given drawing 2d context */
  draw(context) {
		this.largeur = Ball.BALL_WIDTH;
		this.longueur = Ball.BALL_HEIGHT;
		context.drawImage(this.image, this.x, this.y, this.largeur, this.longueur);
  }
  /* la méthode move() */
	 move (canvas){
	 this.largeur = Ball.BALL_WIDTH;
 	 this.longueur = Ball.BALL_HEIGHT;
	 let x = this.x + this.deltaX;
	 let y = this.y + this.deltaY;
	 if (x < 0 || x + this.largeur > canvas.width ){
		 this.deltaX = -this.deltaX;
	 }
	 if (y < 0 || y + this.longueur > canvas.height) {
		 this.deltaY = -this.deltaY;
	 }
	 this.x += this.deltaX;
	 this.y += this.deltaY;
  }
  /* crée l'objet Image à utiliser pour dessiner cette balle */
  #createImage(imageSource) {
		this.largeur = Ball.BALL_WIDTH;
  	this.longueur = Ball.BALL_HEIGHT;
	  const newImg = new Image();
		newImg.width=this.largeur;
		newImg.height=this.longueur;

  	newImg.src = imageSource;
  	return newImg;
  }
  get width() {
    return this.image.width;
  }
  get height() {
    return this.image.height;
  }

	collisionWith(obstacle){
	 const ballLeft = this.x - this.radius;
	 const ballRight = this.x + this.radius;
	 const ballTop = this.y - this.radius;
	 const ballBottom = this.y + this.radius;

	 const obsLeft = obstacle.x;
	 const obsRight = obstacle.x + obstacle.width;
	 const obsTop = obstacle.y;
	 const obsBottom = obstacle.y + obstacle.height;

	 const p1x = Math.max(ballLeft, obsLeft);
	 const p1y = Math.max(ballTop, obsTop);
	 const p2x = Math.min(ballRight, obsRight);
	 const p2y = Math.min(ballBottom, obsBottom);
	 
    return p1x < p2x && p1y < p2y;
  }


}
