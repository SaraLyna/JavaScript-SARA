/* TYPE Obstacle */
export default class Obstacle {
  /* constructor of the class */
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  draw(context){
    context.fillStyle = 'black';
    context.fillRect(this.x, this.y, context.width, context.height);
  }
}
