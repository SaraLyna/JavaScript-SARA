
/* TYPE GameElement */
export default class GameElement {

  constructor(ImgSrc,x,y,deltaX=0,deltaY=0) {
        this.x=x;
        this.y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image = this.#createImage(ImgSrc);
  }


  draw(context) {
	 context.drawImage(this.image, this.x, this.y);
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
