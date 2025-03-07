import React from 'react';
import '../assets/style/app.css';
import productsData from '../data/products.js';

import Products from './AllProducts.jsx';
import Product from './product.jsx';
import Panier from './panier.jsx';



/*
 define root component
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produitsPanier: [],
      produitsBoutique: productsData,
      filterText: ''
    };
    this.ajouterAuPanier = this.ajouterAuPanier.bind(this);
    this.supprimerDuPanier = this.supprimerDuPanier.bind(this);
    this.modifierQuantite = this.modifierQuantite.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }

   componentDidMount() {
     this.setState({ produitsBoutique: productsData });
   }


   ajouterAuPanier(produit) {
     const { produitsPanier, produitsBoutique } = this.state;
     const produitIndex = produitsPanier.findIndex((prod) => prod.id === produit.id);

     if (produitIndex !== -1) {
       const newProduitsPanier = [...produitsPanier];
       newProduitsPanier[produitIndex].stock += 1;
       this.setState({ produitsPanier: newProduitsPanier });
     } else {
       const newProduit = { ...produit, stock: 1 };
       this.setState({
       produitsPanier: [...produitsPanier, newProduit]
     });
   }
     const newProduitsBoutique = [...produitsBoutique];
     const produitBoutiqueIndex = newProduitsBoutique.findIndex((prod) => prod.id === produit.id);
     if (newProduitsBoutique[produitBoutiqueIndex].stock > 0) {
       newProduitsBoutique[produitBoutiqueIndex].stock -= 1;
     }
     this.setState({ produitsBoutique: newProduitsBoutique });
  }



    supprimerDuPanier(produit) {
      const { produitsPanier, produitsBoutique } = this.state;
      const newProduitsPanier = produitsPanier.filter((prod) => prod.id !== produit.id);
      this.setState({ produitsPanier: newProduitsPanier });
      const newProduitsBoutique = [...produitsBoutique];
      const produitBoutiqueIndex = newProduitsBoutique.findIndex((prod) => prod.id === produit.id);
      if (newProduitsBoutique[produitBoutiqueIndex].stock >= 0) {
        newProduitsBoutique[produitBoutiqueIndex].stock += produit.stock;
      }
      this.setState({ produitsBoutique: newProduitsBoutique });
    }


    modifierQuantite( produitId, stock) {
      this.setState((prevState) => {
      const produitsPanier = prevState.produitsPanier.map((produit) => {
      if (produit.id === produitId) {
        const stockDiff = stock - produit.stock;
        produit.stock += stockDiff;
      }
        return produit;
      });
      const produitsBoutique = productsData.map((produit) => {
      const produitPanier = produitsPanier.find((p) => p.id === produit.id);
      if (produitPanier) {
        produit.stock = produit.stock - produitPanier.stock;
      }
      return produit;
      });

    return { produitsPanier, produitsBoutique };
      });
   }


    calculerPrixTotal() {
      const { produitsPanier } = this.state;
      let prixTotal = 0;
      produitsPanier.forEach(produit => {
        prixTotal += produit.price * produit.stock;
      });
      return prixTotal;
    }


    calculerPoidsTotal() {
      const { produitsPanier } = this.state;
      let poidsTotal = 0;
      produitsPanier.forEach(produit => {
        poidsTotal += produit.weight * produit.stock;
      });
      return poidsTotal;
    }


    filterChanged(newFilterText){
      this.setState({filterText: newFilterText});
    }

    render() {
      const { produitsPanier, produitsBoutique, filterText } = this.state;

      return (
        <div>
          <Products
	           produits={produitsBoutique}
             ajouter={this.ajouterAuPanier}
	           filterChange={this.filterChanged}
             filterText={filterText}
          />
          <Panier
            supprimer={this.supprimerDuPanier}
            modifierQuantite={this.modifierQuantite}
            produits={produitsPanier}
            prixTotal={this.calculerPrixTotal()}
            poidsTotal={this.calculerPoidsTotal()}
          />
      </div>
    );
  }
}
