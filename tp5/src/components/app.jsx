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
  }

   componentDidMount() {
    this.setState({ produitsBoutique: productsData });
  }

  addToCart(produit) {
    this.setState({
      productsPanier: [...this.state.productsPanier, produit]
    });
  } ajouterAuPanier(produit) {
    const { produitsPanier } = this.state;
    const produitIndex = produitsPanier.findIndex(p => p.id === produit.id);

    if (produitIndex !== -1) {
      const newProduitsPanier = [...produitsPanier];
      newProduitsPanier[produitIndex].quantite += 1;
      this.setState({ produitsPanier: newProduitsPanier });
    } else {
      const newProduit = { ...produit, quantite: 1 };
      this.setState({
        produitsPanier: [...produitsPanier, newProduit]
      });
    }
 const { produitsBoutique } = this.state;
    const newProduitsBoutique = [...produitsBoutique];
    const produitBoutiqueIndex = newProduitsBoutique.findIndex(p => p.id === produit.id);
    newProduitsBoutique[produitBoutiqueIndex].stock -= 1;
    this.setState({ produitsBoutique: newProduitsBoutique });
  }


  
    supprimerDuPanier(produit) {
    const { produitsPanier } = this.state;
    const newProduitsPanier = produitsPanier.filter(p => p.id !== produit.id);
    this.setState({ produitsPanier: newProduitsPanier });

    const { produitsBoutique } = this.state;
    const newProduitsBoutique = [...produitsBoutique];
    const produitBoutiqueIndex = newProduitsBoutique.findIndex(p => p.id === produit.id);
    newProduitsBoutique[produitBoutiqueIndex].stock += produit.quantite;
    this.setState({ produitsBoutique: newProduitsBoutique });
  }

 calculerPrixTotal() {
    const { produitsPanier } = this.state;
    let prixTotal = 0;
    produitsPanier.forEach(produit => {
      prixTotal += produit.prix * produit.quantite;
    });
    return prixTotal;
  }

 calculerPoidsTotal() {
    const { produitsPanier } = this.state;
    let poidsTotal = 0;
    produitsPanier.forEach(produit => {
      poidsTotal += produit.poids * produit.quantite;
    });
    return poidsTotal;
  }

  
  render() {
 const { produitsPanier, filterText } = this.state;
    const produitsFiltres = productsData.filter(
      produit => produit.nom.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div>
        <Products 
        ajouter={this.ajouterAuPanier} filterText={filterText} 
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

