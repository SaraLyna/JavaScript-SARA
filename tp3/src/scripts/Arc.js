import GameElement from "./GameElement";
import KeyManager from './keyManager';
import arcSrc from './assets/images/arc.png';
import Fleche from "./Fleche";


/* TYPE Arc */
export default class Arc extends GameElement{
    static ARC_WIDTH = 96;
    static ARC_HEIGHT = 70;


     constructor(canvas, x, y) {
         super(arcSrc,x, y, 0, 0);
         this.x = (canvas.width - this.width) / 2;
         this.y = canvas.height - this.height - 10;
         this.deltaX=0;
         this.deltaY=0;
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

     move(box) {
         this.x = Math.max(0, Math.min(box.width - Arc.ARC_WIDTH, this.x + this.deltaX));
         this.y = Math.max(0, Math.min(box.height - Arc.ARC_HEIGHT, this.y + this.deltaY));
     }

     handleMoveKeys(keyManager) {
         this.stopMoving();
         if (keyManager.left)
         this.moveLeft();
         if (keyManager.right)
         this.moveRight();
         if (keyManager.up)
         this.moveUp();
         if (keyManager.down)
         this.moveDown();
     }

     load() {
       this.stock = 5;
   }

   fireArrow() {
       if (this.stock > 0 && !this.used) {
           this.stock--;
           this.used = true;
          // return new Fleche(this.x + this.width / 2, this.y);
          const arrow = new Fleche(this.x + this.width / 2, this.y);
           this.fleches.push(arrow);
           return arrow;
   }
 }


   shootArrow() {
       if (this.stock > 0) {
         const arrow = new Fleche(this.x + this.image.width / 2, this.y);
         this.lastArrow = arrow; // stocker la dernière flèche tirée
         this.stock--;
         return arrow;
       } else {
         return null;
       }
     }




}
