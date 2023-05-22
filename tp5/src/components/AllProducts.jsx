import React from 'react';
import Product from './product.jsx';
import productsData from '../data/products.js';
import '../assets/style/productList.css';
import Panier from './panier.jsx';
import App from './app.jsx';
import panier from '../assets/images/panier.jpg';


export default class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: productsData
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }


  render() {
const { products, ajouter, filterText, filterChange } = this.props;
     const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(filterText.toLowerCase()
 ||
        product.description.toLowerCase().includes(filterText.toLowerCase())
     );
    
    return (
    <div className="productList">
        <h4>Boutique</h4> 
         <div className="filter">
        <input type="text" 
	       placeholder="filtrer les produits" 
	       value={filterText}
               onChange={(e) => filterChange(e.target.value)}
	/>
        </div> 
         <div className="productsZone">     
          {filteredProducts.map((product) => (
           <Product 
           	key={product.id} 
		product={product} 
           	ajouter={ajouterAuPanier}
            />
          ))}
        </div>  
          
      </div>
    );
  }
}
