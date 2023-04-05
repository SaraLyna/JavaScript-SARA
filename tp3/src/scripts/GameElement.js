
/* TYPE GameElement */
export default class GameElement {

  constructor(x, y, deltaX =0 , deltaY =0 , urlImg ) {

    this.x = x ;
    this.y = y ;
		this.deltaX = deltaX;
    this.deltaY = deltaY;

		this.image = this.#createImage(urlImg) ;
		this.image.src = urlImg;

  }


  draw(context) {
		context.drawImage(this.image, this.x, this.y);
  }

	 position (){
		this.x += this.deltaX ;
		this.y += this.deltaY ;

  }

	#createImage(imageSource) {
		this.largeur = 30;
  	this.longueur = 30;
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
