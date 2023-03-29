
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

}
