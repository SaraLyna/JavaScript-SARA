/* TYPE Obstacle */
export default class Obstacle {
  /* constructor of the class */
  constructor(x,y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(contexte){
    contexte.fillStyle = 'black';
    contexte.fillRect(this.x, this.y, this.width, this.height);
  }
}
