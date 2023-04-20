import GameElement from "./GameElement";
import oiseauGaucheSrc from "./assets/images/oiseau-voleur-gauche-droite.png";
import oiseauDroiteSrc from "./assets/images/oiseau-voleur-droite-gauche.png";



export default class Oiseau extends GameElement{
    static OISEAU_WIDTH = 30;
    static OISEAU_HEIGHT = 20;
    static OISEAU_SPEED = 4;
    static OISEAU_PROBABILITY = 0.75;

    constructor(canvas,x,y,deltaX){
        super(oiseauGaucheSrc,oiseauDroiteSrc,x,y,deltaX,0);
        this. x = (Math.random() < 0.5) ?  canvas.width + Oiseau.OISEAU_WIDTH : -Oiseau.OISEAU_WIDTH;
        this. y = Math.floor(Math.random() * 300) + 100;
        this. deltaX = (this.x < 0) ? Oiseau.OISEAU_SPEED : -Oiseau.OISEAU_SPEED;
        this.image = this.createImage(this.randomIMG());
        this.isOut=false;

    }
    createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }


    update(box) {
        super.update(box);
        if (this.x < -this.width || this.x > box.width) {
          this.isOut = true;
        }
      }


      move(box) {
        this.x += this.deltaX;
       
    }
    

   randomIMG() {

  if (this.deltaX < 0) {
    return oiseauGaucheSrc;
  } else {
    return oiseauDroiteSrc;
  }

}
}
