
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
  getwidth() {
    return this.image.width;
  }
  getheight() {
    return this.image.height;
  }

	collisionWith(obstacle){
		  let p1x= Math.max(this.x,obstacle.x);
      let p1y=Math.max(this.y,obstacle.y);
      let x1 = this.x + this.getwidth();
      let y1 = this.y + this.getheight();
      let x2 = obstacle.x + this.getwidth();
      let y2 = obstacle.y + this.getheight();
      let p2x= Math.min(x1,x2);
      let p2y=Math.min(y1,y2);

		  return p1x < p2x && p1y < p2y;
  }


}
