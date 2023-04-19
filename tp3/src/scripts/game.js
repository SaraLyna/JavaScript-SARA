import GameElement from './GameElement';
import Arc from './Arc';
import KeyManager from './keyManager';
 import Cible from './Cible';
 import Fleche from './Fleche';
import Carquois from './Carquois';
//import Oiseau from './Oiseau.js';


/* TYPE Game */
export default class Game {
    #canvas;
    context;
    arc;
    //Object = new Array();

    constructor(canvas) {
      this.#canvas = canvas;
      this.context = this.#canvas.getContext('2d');
      this.arc = new Arc(canvas, canvas.width / 2 - 25, canvas.height - 100);
      this.keyManager= new KeyManager();
      this.cible = new Cible(canvas.width-target.width, canvas.height);
      this.fleche = new Fleche(this.arc.x + 43, this.arc.y - 20);
      // this.oiseau = new Oiseau(canvas,0,0,4);
      //  this.oiseaux = [];
      //
      //  this.oiseaux.push(this.oiseau);

       this.carquois = null;
      this.animation = null;
       this.start=false;

       this.lastCarquoisTime = 0
      setInterval(() => {
        const shouldSpawnCarquois = Math.random() <= 0.5;
        if (shouldSpawnCarquois) {
          this.carquois = new Carquois(canvas, 10, 20);
        }
      }, 1500);

      // this.interval_O = setInterval(() => {
      //   const alea = Math.random();
      //   if(alea <= 0.75 && this.start == true)
      //      this.addOiseau();
      //   },1000);

       this.fleches = [];

    }

    animate() {
      this.context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
      this.arc.draw(this.context);
      this.arc.handleMoveKeys(this.keyManager);
      // this.oiseaux.forEach(a=>{
      //   a.draw(this.context);
      //   a.move(this.canvas);
      // });

      this.arc.move(this.#canvas);
     this.cible.draw(this.context);
     this.fleche.draw(this.context);
       this.fleche.move(this.#canvas);
      if (this.carquois !== null) {
        this.carquois.draw(this.context);
      }
      this.animation = requestAnimationFrame(this.animate.bind(this));
    }

    startAndStop() {
      if (this.animation) {
        cancelAnimationFrame(this.animation);
        this.animation = null;
      } else {
        this.animate();
      }
    }


    keyDownActionHandler(event) {
   switch (event.key) {
       case "ArrowLeft":
       case "Left":
           this.keyManager.leftPressed();
           break;
       case "ArrowRight":
       case "Right":
           this.keyManager.rightPressed();
           break;
      case "ArrowUp":
      case "Up":
            this.keyManager.upPressed();
            break;
      case "ArrowDown":
      case "Down":
            this.keyManager.downPressed();
            break;
       default: return;
    }
     event.preventDefault();
}


    keyUpActionHandler(event) {
       switch (event.key) {
          case "ArrowLeft":
          case "Left":
             this.keyManager.leftReleased();
             break;
          case "ArrowRight":
          case "Right":
             this.keyManager.rightReleased();
             break;
          case "ArrowUp":
          case "Up":
              this.keyManager.upPressed();
              break;
          case "ArrowDown":
          case "Down":
                this.keyManager.downPressed();
                break;
          default: return;
       }
       event.preventDefault();
    }





  load() {
        this.stock = 5;
  }

  fireArrow() {
       if (this.stock > 0 && !this.used) {
           this.stock--;
           this.used = true;
          const arrow = new Fleche(this.x + this.width / 2, this.y);
           this.fleches.push(arrow);
      return arrow;

  }
   }


   shootArrow() {
       if (this.stock > 0) {
         const arrow = new Fleche(this.x + this.image.width / 2, this.y);
         this.lastArrow = arrow;
         this.stock--;
         return arrow;
       } else {
         return null;
       }
     }




    // addOiseau(canvas){
    //   const aleax= Math.floor(Math.random()*(this.canvas.width-Oiseau.OISEAU_WIDTH));
    //   this.oiseaux.push(new Oiseau(canvas,aleax,0,4));
    // }
    //
    //
    // addBall(){
    //   const aleax = Math.floor(Math.random()*(this.canvas.width-Ball.BALL_WIDTH));
    //   const aleay = Math.floor(Math.random()*(this.canvas.height-Ball.BALL_WIDTH));
    //   const deltaX= Math.floor(Math.random()*4)+1;
    //   const deltaY = Math.floor(Math.random()*4)+1;
    //   this.oiseaux.push(new Oiseau(canvas,aleax , aleay , deltaX , deltaY));
    // }
}
