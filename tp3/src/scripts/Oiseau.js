import GameElement from "./GameElement";
import oiseauGaucheSrc from "./assets/images/oiseau-voleur-gauche-droite.png";
import oiseauDroiteSrc from "./assets/images/oiseau-voleur-droite-gauche.png";



export default class Oiseau extends GameElement{
    static OISEAU_WIDTH = 80;
    static OISEAU_HEIGHT = 50;
   // static OISEAU_SPEED = 4;
   // static OISEAU_PROBABILITY = 0.75;

    constructor(canvas,x,y){
        super(oiseauGaucheSrc,oiseauDroiteSrc,x,y,4,0);
      this.x = (Math.random() < 0.5) ?  500 + Oiseau.OISEAU_WIDTH : -Oiseau.OISEAU_HEIGHT;
      this.y = Math.floor(Math.random() * 301) + 100;
      //  this. deltaX = (this.x < 0) ? Oiseau.OISEAU_SPEED : -Oiseau.OISEAU_SPEED;
        this.image = this.createImage(this.randomIMG());
     this.isOut=false;
     this.width=80;
       this.height=50;

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
