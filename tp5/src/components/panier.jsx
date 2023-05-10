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
      //this.props.products ||
    };
  }

  render() {
  return(
   <div className="cart">
     <div id="panier">
        <h4>Panier</h4>
 
       
          {this.state.products.map((product) => (
           <Product key={product.id} product={product}
           supp={this.props.supprimer} />
          ))}
          
        </div>
        <button onClick={() => this.props.supp(this.props.product)}><img src={poubelle} alt="poubelle" style={{ width: '40px', height: '40px' }} /></button>
        
        <div className="total">
        <h8> total commande : </h8>
         </div>
      </div>
   );
  }
}
