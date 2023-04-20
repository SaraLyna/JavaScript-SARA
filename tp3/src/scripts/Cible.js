import cibleSrc from './assets/images/cible.png';
import GameElement from "./GameElement";


/* TYPE Cible */
export default class Cible extends GameElement{
   // static CIBLE_WIDTH = 64;
   // static CIBLE_HEIGHT = 45;

  constructor(canvas) {
    super( cibleSrc,x, 1, 0, 0);
    let x =Math.floor(Math.random()*(canvas.width-64));
     this.point=0;  
    }


    hit(){
        this.deltaY=0;
        return 1000;
    }
}
