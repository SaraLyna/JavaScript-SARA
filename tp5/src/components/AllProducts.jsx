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
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    this.setState({ filterText: event.target.value });
  }

  render() {
     const filteredProducts = this.state.products.filter(product =>
      product.name.toLowerCase().includes(this.props.filterText.toLowerCase())
     );
    
    return (
    <div className="productList">
        <h4>Boutique</h4> 
         <div className="filter">
        <input type="text" 
	       placeholder="filtrer les produits" 
	       value={this.props.filterText}
               onChange={this.handleFilterChange}
	/>
        </div> 
         <div className="productsZone">     
          {filteredProducts.map((product) => (
           <Product 
           	key={product.id} 
		product={product} 
           	ajouter={this.props.ajouterAuPanier}
            />
          ))}
        </div>  
          
      </div>
    );
  }
}
