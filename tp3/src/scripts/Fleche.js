import flecheSrc from './assets/images/fleche.png';
import GameElement from "./GameElement";
//import Arc from './Arc';


/* TYPE Fleche */
export default class Fleche extends GameElement{

  constructor(x , y) {
    super(flecheSrc,x,y,0,-8);
        this.x = this.x;
        this.y = this.y;
        this.deltaY=-8;
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


    moveLeft() {
        this.deltaX = this.deltaX - 10;
    }

    moveUp() {
        if (this.y > 100) {
            this.deltaY = this.deltaY - 10;
        }
    }

    moveRight() {
        this.deltaX = this.deltaX + 10;
    }

    moveDown() {
        this.deltaY = this.deltaY + 10;
    }

    stopMoving() {
        this.deltaX = 0;
        this.deltaY = 0;
    }


    move(canvas) {
        this.x = Math.max(this.arc.width / 2, Math.min(canvas.width - this.width, this.x + this.deltaX));
        this.y = Math.max(100, Math.min(canvas.height - this.height, this.y + this.deltaY));

    }
*/
  move(box){
    //this.x = this.x -8;
    this.y+=this.deltaY
 }

}
