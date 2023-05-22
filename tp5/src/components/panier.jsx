import React from 'react';
import '../assets/style/cart.css';
import App from './app.jsx';
import productsData from '../data/products.js';
import Product from './product.jsx';
import poubelle from '../assets/images/poubelle.jpg';



export default class Panier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products:  []
    };
  }

  render() {
  const { produits, prixTotal, poidsTotal } = this.props;
  return(
   <div className="cart">
     <h8>Poids total {poidsTotal} g</h8> 
     <div id="panier">
        <h4>Panier</h4>
 
       
          {produits.map((product) => (
           <Product 
		key={product.id} 
		product={product}
           	supprimer={this.props.supprimerDuPanier} 
           	
	  />
	  
          ))}
           <button onClick={() => this.props.supprimerDuPanier(this.props.product)}><img src={poubelle} alt="poubelle" style={{ width: '40px', height: '40px' }} /></button>
        </div>
        
        <div className="total">
        <h8>total commande :{prixTotal}</h8>
         </div>
      </div>
   );
  }
}
