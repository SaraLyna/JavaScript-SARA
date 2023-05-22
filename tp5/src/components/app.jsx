import React from 'react';
import Products from './AllProducts.jsx';
import Product from './product.jsx';
import Panier from './panier.jsx';
import '../assets/style/app.css';
import productsData from '../data/products.js';


/*
 define root component
*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produitsPanier: [],
       filterText: ''
    };
    this.ajouterAuPanier = this.ajouterAuPanier.bind(this);
    this.supprimerDuPanier = this.supprimerDuPanier.bind(this);
    this.modifierQuantite = this.modifierQuantite.bind(this);
  }

   componentDidMount() {
    this.setState({ produitsBoutique: productsData });
   }

  
   ajouterAuPanier(produit) {
    const { produitsPanier } = this.state;
    const produitIndex = produitsPanier.findIndex(prod => prod.id === produit.id);

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
    
    const { produitsBoutique } = this.state;
    const newProduitsBoutique = [...produitsBoutique];
    const produitBoutiqueIndex = newProduitsBoutique.findIndex(prod => prod.id === produit.id);
    newProduitsBoutique[produitBoutiqueIndex].stock -= 1;
    this.setState({ produitsBoutique: newProduitsBoutique });
  }


  
    supprimerDuPanier(produit) {
    const { produitsPanier } = this.state;
    const newProduitsPanier = produitsPanier.filter(prod => prod.id !== produit.id);
    this.setState({ produitsPanier: newProduitsPanier });

    const { produitsBoutique } = this.state;
    const newProduitsBoutique = [...produitsBoutique];
    const produitBoutiqueIndex = newProduitsBoutique.findIndex(prod => prod.id === produit.id);
    newProduitsBoutique[produitBoutiqueIndex].stock += produit.stock;
    this.setState({ produitsBoutique: newProduitsBoutique });
    }

   modifierQuantite(produitId, quantite) {
    this.setState((prevState) => {
      const produitsPanier = prevState.produitsPanier.map((produit) => {
        if (produit.id === produitId) {
          const stockDiff = quantite - produit.stock;
          produit.stock -= stockDiff;
          produit.stock = quantite;
        }
        return produit;
      });

      const produitsBoutique = productsData.map((produit) => {
      const produitPanier = produitsPanier.find((p) => p.id === produit.id);
      if (produitPanier) {
        produit.stock = produit.stock + produitPanier.stock;
      } else {
        produit.stock = produit.stock;
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

  
  render() {
 const { produitsPanier, filterText } = this.state;
    const produitsFiltres = productsData.filter(
      produit => produit.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <Products 
          ajouter={this.ajouterAuPanier} 
          filterText={filterText} 
         />
        <Panier 
          supprimer={this.supprimerDuPanier}
          produits={produitsPanier}
          prixTotal={this.calculerPrixTotal()}
          poidsTotal={this.calculerPoidsTotal()}
        />
      </div>
    );
  }
}

