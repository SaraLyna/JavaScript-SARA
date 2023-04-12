
// importation de la classe Game.js
import Game from './game.js';
import Arc from './Arc';
import Cible from './Cible';
import Fleche from './Fleche';
import Carquois from './Carquois';
//import Oiseau from './Oiseau.js';



// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le panier
const init = () => {
   const canvas = document.getElementById("playfield");
   const arc =  new Arc(40,50,5,0);
 const cible =new Cible (40,50,50);
 const fleche = new Fleche (40,50);
   const game = new Game(canvas,arc,cible,fleche);

   document.getElementById("stopAndStartGame").addEventListener("click",()=>game.startAndStop() );
    window.addEventListener('keydown', game.keyDownActionHandler.bind(game));
    window.addEventListener('keyup', game.keyUpActionHandler.bind(game));

}

window.addEventListener("load", init);

//
console.log('le bundle a été généré');
