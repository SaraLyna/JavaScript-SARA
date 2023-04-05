import arcSrc from './assets/images/arc.png';


/* TYPE Arc */
export default class Arc extends GameElement{

     constructor(arcWidth , arcHeight) {
       super(x, y,0,0, arcSrc);
       const x = arcWidth / 2-50 ;
       const y = arcHeight-100 ;
       this.arrowCount = 5 ;

     }

     get centerX() {
     return this.x + this.width / 2 ;
     }

     get bottomY() {
     return this.y + this.height ;
    }

    updatePosition(keyPressed) {
    switch(keyPressed) {
    case "ArrowLeft" : this.deltaX =-10 ;
      break ;
    case "ArrowRight" : this.deltaX =10 ;
      break ;
    case "ArrowUp" : this.deltaY =-10 ;
      break ;
    case "ArrowDown" : this.deltaY =10 ;
      break ;
    }
      if(this.y < 100 ) {
        this.y = 100 ;
      }
    }

}
