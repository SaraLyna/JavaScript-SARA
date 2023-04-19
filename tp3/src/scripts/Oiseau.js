import GameElement from "./GameElement";
import oiseauGaucheSrc from "./assets/images/oiseau-voleur-gauche-droite.png";
import oiseauDroiteSrc from "./assets/images/oiseau-voleur-droite-gauche.png";



export default class Oiseau extends GameElement{
    static OISEAU_WIDTH = 80;
    static OISEAU_HEIGHT = 50;
    static OISEAU_SPEED = 4;
    static OISEAU_PROBABILITY = 0.75;

    constructor(canvas,x,y,deltaX){
        super(oiseauGaucheSrc,oiseauDroiteSrc,x,y,deltaX,0);
        this. x = (Math.random() < 0.5) ?  canvas.width + Oiseau.OISEAU_WIDTH : -Oiseau.OISEAU_WIDTH;
        this. y = Math.floor(Math.random() * 300) + 100;
        this. deltaX = (this.x < 0) ? Oiseau.OISEAU_SPEED : -Oiseau.OISEAU_SPEED;
        this.image = this.randomIMG();
        this.isOut=false;

    }

     update(box) {
        super.update(box);
        if (this.x < -this.width || this.x > box.width) {
          this.isOut = true;
        }
      }

      move(canvas) {
        if (this.sens === "gauche") {
          this.x -= 4;
          if (this.x < -this.width) {
            this.x = canvas.width + Math.random() * 300;
            this.y = Math.random() * (canvas.height - 100) + 100;
            this.sens = "droite";
            this.image.src = oiseauDroiteSrc;
          }
        } else {
          this.x += 4;
          if (this.x > canvas.width) {
            this.x = -this.width - Math.random() * 300;
            this.y = Math.random() * (canvas.height - 100) + 100;
            this.sens = "gauche";
            this.image.src = oiseauGaucheSrc;
          }
        }
      }

/**
      move = (canvas) => {

        this.x += this.deltaX;
      // this.y += this.deltaY;
    }
    */

   randomIMG() {
  const oiseauGaucheSrc = "./assets/images/oiseau-voleur-gauche-droite.png";
  const oiseauDroiteSrc = "./assets/images/oiseau-voleur-droite-gauche.png";

  if (this.deltaX < 0) {
    return oiseauGaucheSrc;
  } else {
    return oiseauDroiteSrc;
  }

}
}
