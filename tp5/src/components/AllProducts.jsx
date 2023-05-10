import React from 'react';
import Product from './product.jsx';
import productsData from '../data/products.js';
import '../assets/style/productList.css';
import Panier from './panier.jsx';
import App from './app.jsx';

export default class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    };
  }

  

  render() {
    return (
    <div className="productList">
        <h4>Boutique</h4> 
         <div className="filterZone">
        <input type="text" placeholder="filtrer les produits" />
        </div> 
         <div className="productsZone">     
          {this.state.products.map((product) => (
           <Product 
           	key={product.id} product={product} 
           	add={this.props.ajouter}
            />
          ))}
        </div>  
          
      </div>
    );
  }
}
