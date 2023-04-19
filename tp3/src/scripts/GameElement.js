

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

 collisionWith(obstacle){
    const left = this.x;
    const right = this.x + this.width;
    const top = this.y;
    const bottom = this.y + this.height;

    const left_obs = obstacle.x;
    const right_obs = obstacle.x + obstacle.width;
    const top_obs = obstacle.y;
    const bottom_obs = obstacle.y + obstacle.height;

    const p1 = {
      x: Math.max(left, left_obs),
      y: Math.max(top, top_obs),
    };
    const p2 = {
      x:Math.min(right, right_obs),
      y: Math.min(bottom, bottom_obs),
    };
    return p1.x < p2.x && p1.y < p2.y  ;
  }
}
