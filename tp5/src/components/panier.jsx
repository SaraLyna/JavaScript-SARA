import React from 'react';
import '../assets/style/cart.css';
import productsData from '../data/products.js';
import poubelle from '../assets/images/poubelle.jpg';

import App from './app.jsx';
import Product from './product.jsx';




export default class Panier extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuantiteChange = this.handleQuantiteChange.bind(this);
  }


  handleQuantiteChange(event, produitId) {
    const newQuantite = parseInt(event.target.value, 10);
    if (!isNaN(newQuantite) && newQuantite >= 0) {
      this.props.modifierQuantite(produitId, newQuantite);
    }
  }

  render() {
    const { produits, prixTotal, poidsTotal } = this.props;

    return(
      <div className="cart">
      <div className="weight">
          poids total {poidsTotal}
      </div>
      <div id="panier">
          <h4>Panier</h4>
          {produits.map((product) => (
            <div className="product" key={product.id} >
                 <div> {product.name} </div>
 		             <div className="imageProduit">
          		      <img src={product.image} alt={name} />
                 </div>
            <div>
              		<input
               		type="number"
                	min="0"
                	value={product.stock}
                	onChange={(event) => this.handleQuantiteChange(event, product.id)}
                  />
            </div>
            <img
                className="button"
                src={poubelle}
                alt="poubelle"
                onClick={() => this.props.supprimer(product)}
             />
          </div>
          ))}
         </div>
            <div className="total">
                total commande :{prixTotal} €
            </div>
      </div>
   );
  }
}
