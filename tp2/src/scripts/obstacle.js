/* TYPE Obstacle */
export default class Obstacle {
  /* constructor of the class */
  constructor(x,y, width, height) {
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;
    this.deltaX=0;
    this.deltaY=0;
  }


  draw(context){
    context.fillStyle = 'black';
    context.fillRect(this.x, this.y, this.width, this.height);
  }

    moveLeft() {
        this.deltaX = this.deltaX - 10;
    }

    moveUp(){
        this.deltaY = this.deltaY - 10;
    }

    moveRight() {
        this.deltaX = this.deltaX + 10;
    }

    moveDown(){
        this.deltaY = this.deltaY + 10;
    }

    stopMoving() {
        this.deltaX = 0;
        this.deltaY = 0;
    }

    move(box) {
        this.x = Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX));
        this.y = Math.max(0, Math.min(box.height - this.height, this.y + this.deltaY));
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

}
