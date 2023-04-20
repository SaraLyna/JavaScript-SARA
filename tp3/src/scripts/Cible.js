import cibleSrc from './assets/images/cible.png';
import GameElement from "./GameElement";


/* TYPE Cible */
export default class Cible extends GameElement{

  constructor(canvas) {
    let x =Math.floor(Math.random()*(canvas.width-64));
    super( cibleSrc,x, 10, 10, 10);
     this.point=0;
    }


    hit(){
        this.deltaY=0;
        return 1000;
    }
}
