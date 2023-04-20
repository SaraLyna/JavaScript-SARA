import cibleSrc from './assets/images/cible.png';
import GameElement from "./GameElement";


/* TYPE Cible */
export default class Cible extends GameElement{
    static CIBLE_WIDTH = 65;
    static CIBLE_HEIGHT = 45;

  constructor(canvas) {
    super( cibleSrc,x, 10, 10, 10);
    let x =Math.floor(Math.random()*(canvas.width-Cible.CIBLE_WIDTH));
     this.point=0;  
    }

/**
    hit(){
        this.deltaY=0;
        return 1000;
    }
*/
}
