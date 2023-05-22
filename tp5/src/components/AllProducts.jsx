import React from 'react';
import '../assets/style/productList.css';
import productsData from '../data/products.js';
import panier from '../assets/images/panier.jpg';

import App from './app.jsx';
import Product from './product.jsx';
import Panier from './panier.jsx';




export default class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    };
  }


  render() {
    const { produits,ajouter, filterText, filterChange } = this.props;
    const filteredProducts = produits.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase() || product.description.toLowerCase().includes(filterText.toLowerCase())
    ));
    const displayedProducts = filterText ? filteredProducts : produits;

    return(
      <div className="productList">
        <h4>Boutique</h4>
        <div className="filter">
          <input
              type="text"
	            placeholder="filtrer les produits"
	            value={filterText}
              onChange={(e) => filterChange(e.target.value)}
	        />
        </div>
        <div className="productsZone">
	         {displayedProducts.map((product) => (
           <Product
           	  key={product.id}
		          product={product}
           	  ajouter={ajouter}
           />
	        ))}
       </div>
      </div>
    );
  }
}
