
/* TYPE GameElement */
export default class GameElement {
  static WIDTH = 40;

  constructor(x, y, deltaX =0 , deltaY =0 , urlImg ) {
    this.x = x ;
    this.y = y ;
		this.deltaX = deltaX;
    this.deltaY = deltaY;
		this.image = this.#createImage(urlImg) ;
  }


  draw(context) {
    this.mesure= GameElement.WIDTH;
		context.drawImage(this.image, this.x, this.y, this.mesure );
  }

 position (canvas){
    this.mesure= GameElement.WIDTH;
   let x = this.x + this.deltaX;
	 let y = this.y + this.deltaY;
	 if (x < 0 || x + this.mesure > canvas.width ){
		 this.deltaX = -this.deltaX;
	 }
	 if (y < 0 || y + this.mesure > canvas.height) {
		 this.deltaY = -this.deltaY;
	 }
		this.x += this.deltaX ;
		this.y += this.deltaY ;

  }

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
