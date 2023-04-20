# TP 3

# OUYAHIA Sara Lyna

## Mon travail
. installation des fichiers nécessaires au projet :
déja j'ai importé le fichier keyManager.js dans src/script pour pouvoir manier les touches du clavier.

grace à la commande npm install j'ai installé le compilateur pour le projet.

. production du bundle et exécution du projet :
 npm install
 npm run build : pour la production du bundle
 ou bien :
 npm run dev-server
 pour directement visualiser en ligne le résultat
 
 ouverture de la page web dans : dist/index.html
 
. exécution dans : tp3/dist/index.html

. précisions sur le code :
chaque classe a été créée dans un fichier à part,
toute la partie jeu a été quasiment codée dans le fichier game.js
puis les autres classes ont été utilisées pour la création des différents objets nécessaires au jeu:
l'arc, les fleches, le carquois, ...




## Travail réalisé
. par rapport au cahier des charges :
Création de la classe qui regroupe d'autres classes ayant des caractéristiques communes : GameElement.js

Création des différentes classes d'objets qui héritent de GameElement: Arc.js, Carquois.js, Fleche.js, Oiseau.js, Cible.js
pour Oiseau.js j'ai plutot opté pour une seule classe au lieu de deux classes séparées ppour représenter les oiseaux de gauche et ceux de droite, et pour l'affichage de ces oiseaux j'ai créé une méthode randomIMG() qui s'occupe d'afficher aléatoirement soit l'oiseau gauche soit le droit. 

Codage de la classe game.js : afin de pouvoir jouer correctement à l'aide des méthodes : animate()...

Codage de la classe main.js : pour l'affichage des différents objets de game


pour l'instant tout marche sauf que j'ai pas vraiment maitrisé à la fin.
