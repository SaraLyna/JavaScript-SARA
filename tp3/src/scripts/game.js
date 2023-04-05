import GameElement from './GameElement';
import Arc from './Arc';


/* TYPE Game */
export default class Game {

   #canvas;
   #context
   #arc
   // à compléter

   constructor(canvas) {
      this.#canvas = canvas;
      this.#context = this.#canvas.getContext('2d');

      this.#arc = new Arc(50,50);
      // à compléter
   }

   /** donne accès au canvas correspondant à la zone de jeu */
   get canvas() {
      return this.#canvas;
   }

   animate() {
     //this.animationRequest = requestAnimationFrame(this.animate.bind(this));
     this.#context.clearRect(0, 0, this.#canvas.WIDTH, this.#canvas.WIDTH);
     this.#context.fillRect(this.#arc.x, this.#arc.y, this.#arc.WIDTH, this.#arc.WIDTH);
   }
}
