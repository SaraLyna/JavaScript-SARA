import carquoisSrc from './assets/images/fleches.png';
import GameElement from "./GameElement";


/* TYPE Carquois */
export default class Carquois extends GameElement{
  static CARQUOIS_WIDTH = 50;
  static CARQUOIS_HEIGHT = 100;

    constructor(canvas, x, y) {
      super(carquoisSrc,x, y, 0, 0);
      this.randomizePosition(canvas);
    }

    randomizePosition(canvas) {
      this.x = Math.random() * (canvas.width - Carquois.CARQUOIS_WIDTH);
      this.y = 100 + Math.random() * 300;
    }




    static spawnRandomly(canvas, carquois) {
      if (Math.random() > 0.5) {
        const newCarquois = new Carquois(canvas, carquois.x, carquois.y);
        return newCarquois;
      }
      return carquois;
    }




    checkCollision(element) {
      if (
        this.x < element.x + element.width &&
        this.x + this.width > element.x &&
        this.y < element.y + element.height &&
        this.y + this.height > element.y
      ) {
        return true;
      }
      return false;
    }


}
