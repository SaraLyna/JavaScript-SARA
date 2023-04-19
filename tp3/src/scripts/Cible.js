import cibleSrc from './assets/images/cible.png';
import GameElement from "./GameElement";


/* TYPE Cible */
export default class Cible extends GameElement{
    static CIBLE_WIDTH = 75;
    static CIBLE_HEIGHT = 50;

  constructor(x , widthC, heightC) {
    super( cibleSrc,x, 0, 0, 1);
        this.x = Math.random() * (widthC - this.CIBLE_WIDTH);
        this.y = 0;
        this.deltaX=0;
        this.deltaY=1;
        this.heightC=heightC;
    }

    hit(){
        this.deltaY=0;
        return 1000;
    }

}
