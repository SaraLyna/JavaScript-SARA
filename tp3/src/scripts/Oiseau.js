import GameElement from "./GameElement";
import oiseauGaucheSrc from "./assets/images/oiseau-voleur-gauche-droite.png";
import oiseauDroiteSrc from "./assets/images/oiseau-voleur-droite-gauche.png";



export default class Oiseau extends GameElement{
    static OISEAU_WIDTH = 30;
   // static OISEAU_HEIGHT = 20;
   // static OISEAU_SPEED = 4;
   // static OISEAU_PROBABILITY = 0.75;

    constructor(canvas){
 let y = Math.floor(Math.random() * 301) + 100;
        super(oiseauGaucheSrc,oiseauDroiteSrc,x,y,4,0);
      let x = (Math.random() < 0.5) ?  500 + Oiseau.OISEAU_WIDTH : -Oiseau.OISEAU_WIDTH;
       
      //  this. deltaX = (this.x < 0) ? Oiseau.OISEAU_SPEED : -Oiseau.OISEAU_SPEED;
        this.image = this.createImage(this.randomIMG());
       // this.isOut=false;

    }
    createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }

/**
    update(box) {
        super.update(box);
        if (this.x < -this.width || this.x > box.width) {
          this.isOut = true;
        }
      }
*/

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
