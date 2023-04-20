import GameElement from './GameElement';
import Arc from './Arc';
import KeyManager from './keyManager';
 import Cible from './Cible';
 import Fleche from './Fleche';
import Carquois from './Carquois';
import Oiseau from './Oiseau.js';


/* TYPE Game */
export default class Game {
    #canvas;

   static fleches = document.getElementById("nbArrows");
   static score = document.getElementById("score");

    constructor(canvas) {
     this.keyManager= new KeyManager();
      this.#canvas = canvas;
      this.context = canvas.getContext('2d');
      this.arc=new Arc(this.#canvas);
      this.cible=new Cible(this.#canvas);
       this.fleche=new Array();
      this.carquois=null;
      this.oiseau = new Oiseau(canvas,0,0,4);
      this.oiseaux=new Array();
     // this.oiseaux.push(this.oiseau);
      this.score=0;
      this.life=3;

       this.animation = null;
       this.start=false;

      this.quiverInterval=null;
      this.birdInterval=null;
 }

 get canvas() {
      return this.#canvas;
   }

 genereCarquois() {
     this.quiverInterval = setInterval(() => {
       if (Math.random() <= 0.5) {
         this.carquois = new Carquois(this.#canvas);
       }else{
       this.carquois=null;
     }}, 
     1500);
   }


   addBird(canvas){
    const aleax=Math.random();
     //Math.floor(Math.random()*(this.canvas.width-Oiseau.OISEAU_WIDTH));
    this.oiseaux.push(new Oiseau(this.#canvas,aleax,4,0));
  }



genereOiseaux(){
 this.birdInterval = setInterval(() => {
      if( Math.random() <= 0.75 && this.start == true)
        this.addBird();
      },
      1000);
    }





    animate() {
     Game.fleches.textContent=this.arc.Arrows;
     Game.score.textContent=this.score;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
       this.arc.handleMoveKeys(this.keyManager);
      this.arc.move(this.#canvas);
       this.arc.draw(this.context);

 this.oiseaux.forEach(a=>{
      a.draw(this.context);
      a.move(this.canvas);
    });


this.cible?.draw(this.context);
   this.carquois?.draw(this.context);

 if(this.carquois?.collisionWith(this.arc)){
       this.arc.Arrows=5;
       this.carquois=null;
     }
 this.fleche.forEach(elt=>elt.move(this.#canvas));
     this.fleche=this.fleche.filter(elt=>{
      if (elt.collisionWith(this.cible)){
        this.score+=1000;
        this.cible=new Cible(this.#canvas);
        return false;
      }
      else{
        return true;
      }
     });
     this.fleche=this.fleche.filter(elt=>elt.y>0);
     this.fleche.forEach(elt=>elt.draw(this.context));

 if(this.oiseaux.length >0){
      this.oiseaux.forEach((elt,i)=>{

        elt.move(this.#canvas);
        elt.draw(this.context);
        if (elt.collisionWith(this.arc)){
          this.arc = new Arc(this.#canvas);
          let life= document.getElementById('life-'+(this.life));
          life.style.display='none';
          this.life--;
          this.oiseaux.splice(i,1);
        }
        this.fleche.forEach((a,j) =>{
          if ( elt.collisionWith (a)){
            this.oiseaux.splice(i,1) ;
            this.fleche.splice (j,1) ;
          }
        } );

      });

      this.oiseaux=this.oiseaux.filter(elt  =>elt.x>100|| elt.x<this.canvas.width );
     }
      this.animation = requestAnimationFrame(this.animate.bind(this));
    }


fireArrow(){
      if(this.arc.Arrows>0){
        this.fleche.push(new Fleche(this.arc.getX()+41.5,this.arc.getY()));
        this.arc.Arrows--;
      }
    }

    startAndStop() {
       if(!this.start){
          this.animate();
          this.start=true;
          this.genereCarquois();
          this.genereOiseaux() ;
        }else {
        this.quiverInterval=null;
          this.birdInterval=null;
          clearInterval(this.quiverInterval);
          clearInterval(this.birdInterval);
          cancelAnimationFrame(this.animation);
          this.start=false;
          //this.quiverInterval=null;
          //this.birdInterval=null;
        }
    }
    /**
 addBird(canvas){
    const aleax= Math.floor(Math.random()*(this.canvas.width-Oiseau.OISEAU_WIDTH));
    this.oiseaux.push(new Oiseau(canvas,aleax,0,4));
  }
  */


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

      case " ":
              this.fireArrow();
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
              this.keyManager.upReleased();
              break;
          case "ArrowDown":
          case "Down":
                this.keyManager.downReleased();
                break;
          default: return;
       }
       event.preventDefault();
    }


  }
