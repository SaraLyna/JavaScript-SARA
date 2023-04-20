
// importation de la classe Game.js
import Game from './game.js';
import Cible from './Cible';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le panier
const init = () => {
   const canvas = document.getElementById("playfield");
   //const arc =  new Arc(40,50,5,0);
  const cible =new Cible (40,50,50);
 //const fleche = new Fleche (40,50);
   const game = new Game(canvas,cible);
 document.getElementById("stopAndStartGame").addEventListener("click",()=>game.startAndStop() );
    window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
    window.addEventListener('keyup', game.keyUpActionHandler.bind(game));

}

window.addEventListener("load", init);

//
console.log('le bundle a été généré');
