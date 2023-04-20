import flecheSrc from './assets/images/fleche.png';
import GameElement from "./GameElement";


/* TYPE Fleche */
export default class Fleche extends GameElement{

  constructor(x , y) {
    super(flecheSrc,x,y,0,-8);
        // this.x = this.x;
        // this.y = this.y;
        // this.deltaY=-8;
       // this.arc = new Arc(10,10);
       // this.stopMoving();
       // this.stock=5;
       // this.used = false;
       // this.fleches=[];
  }

/**
  fireArrow() {
        if (this.stock > 0 && !this.used) {
            this.stock--;
            this.used = true;
           const arrow = new Fleche(this.x + this.width / 2, this.y);
            this.fleches.push(arrow);
            return arrow;
         }
  }
    update() {
        this.y += this.deltaY;
    }

    isOutOfBound(canvasHeight) {
        return this.y < -this.height || this.y > canvasHeight;
    }

    collidesWith(cibles) {
        return this.x < cibles.x + cibles.width &&
               this.x + this.width > cibles.x &&
               this.y < cibles.y + cibles.height &&
               this.y + this.height > cibles.y;
    }
*/
  move(box){
    this.y+=this.deltaY
 }

}
