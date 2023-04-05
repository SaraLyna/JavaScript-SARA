 import oiseauDroiteSrc from './assets/images/oiseau-voleur-droite-gauche.png';
 import oiseauGaucheSrc from './assets/images/oiseau-voleur-gauche-droite.png';

/* TYPE Oiseau */
export default class Oiseau extends GameElement{


  constructor(x , y,deltaX =0 , deltaY =0) {
    super(x, y, oiseauDroiteSrc, oiseauGaucheSrc);
    this.x = x ;
    this.y = y ;
    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }



}















}
