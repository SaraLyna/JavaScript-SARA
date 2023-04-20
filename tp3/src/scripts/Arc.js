import GameElement from "./GameElement";
import KeyManager from './keyManager';
import arcSrc from './assets/images/arc.png';
//import Fleche from "./Fleche";


/* TYPE Arc */
export default class Arc extends GameElement{
    static ARC_WIDTH = 96;
    static ARC_HEIGHT = 70;
    static ARROWS=5;


     constructor(canvas, x, y) {
         super(arcSrc,x,y, 10, 10);
         this.x = (canvas.width - this.width) / 2;
         this.y = canvas.height - this.height - 10;
         this.life=3;
         this.Arrows=5;
        
     }

getX(){
    return this.x;
  }
  getY(){
    return this.y;
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

     removeLife(){
    if (this.life>0)
      this.life--;
  }


}
