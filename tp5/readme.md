# TP 5
______________________
## Auteur :
**Sara Lyna OUYAHIA**
______________________

______________________
## Mise en place du TP
______________________

Pour commencer, vous devez effectuer les étapes suivantes pour mettre en place le TP :
1.Exécutez la commande `npm install` pour installer les dépendances nécessaires.
2.Ensuite, exécutez la commande `npm run build` pour créer la version de production de l'application.
 Le fichier index.html sera généré dans le dossier `dist`.
3.Enfin, exécutez la commande `npm run dev-server` pour démarrer le serveur de développement.

________________
## Votre travail
________________
Ce projet est une application de gestion de panier en ligne. 
Il permet aux utilisateurs de parcourir une boutique virtuelle, 
d'ajouter des produits à leur panier, de modifier les quantités et 
de supprimer des produits du panier.

__________________
## Fonctionnalités
__________________

- Affichage des produits disponibles dans la boutique.
- Filtrage des produits en fonction du texte saisi par l'utilisateur.
- Ajout de produits au panier avec gestion des quantités.
- Modification des quantités des produits dans le panier.
- Suppression des produits du panier.
- Calcul du prix total de la commande.
- Calcul du poids total des produits dans le panier.

___________________________________
## Explications et taches effectuées 
___________________________________

1.Création des classes :

`app.jsx` : classe principale qui contient toutes les méthodes nécessaires.
(méthode d'ajout et de suppression d'un produit du panier, gestion du stock, 
gestion du prix total, du poids total aussi).

`product.jsx`: classe pour gérer les informations sur les produits.

`AllProducts.jsx`: classe qui représente la boutique ou se trouvent tous les produits.

`panier.jsx`: classe qui représente la zone du panier.


2.Schéma explicatif des composants:

- app
    - AllProducts
         - product
    - panier

______________________
## Exécution du projet
______________________ 
Pour exécuter le projet, utilisez la commande suivante :
`npm run dev-server`

Cela lancera le serveur de développement et vous pourrez accéder à l'application dans votre navigateur.


__________________________
## Technologies utilisées
__________________________
Les technologies utilisées dans ce projet sont les suivantes :

- React: Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- JavaScript: Le langage de programmation principal utilisé pour développer la logique et les fonctionnalités du projet.
- HTML: Utilisé pour structurer les éléments de l'interface utilisateur.
- CSS: Utilisé pour styliser et mettre en forme les éléments de l'interface utilisateur.
- Node.js: Une plateforme logicielle permettant d'exécuter du code JavaScript côté serveur.
- npm: Le gestionnaire de paquets de Node.js, utilisé pour installer et gérer les dépendances du projet.
- Webpack: Un outil de construction qui permet de regrouper et de transformer les fichiers source du projet.
