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
      produitsPanier: productsData,
       filterText: '',
    };
    this.addToCart = this.addToCart.bind(this);
    this.suppCart = this.suppCart.bind(this);
  }

  addToCart(produit) {
    this.setState({
      productsPanier: [...this.state.productsPanier, produit]
    });
  }
  
   suppCart(produit) {
    this.setState({
      productsPanier: [...this.state.productsPanier, produit]
    });
  }
  
  render() {
    return (
      <div>
        <Products 
        ajouter={this.addToCart}  		      
        filterText={this.state.filterText}
         />
        <Panier 
        supprimer={this.suppCart}
        produits={this.state.productsPanier} 
        />
      </div>
    );
  }
}

