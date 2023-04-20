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
      this.x =Math.floor(Math.random()*(canvas.width+27));
      this.y = Math.floor(Math.random()*(301))+100;
    }




   

}
