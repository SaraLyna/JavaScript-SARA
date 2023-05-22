import React from 'react';
import '../assets/style/cart.css';
import App from './app.jsx';
import productsData from '../data/products.js';
import Product from './product.jsx';
import poubelle from '../assets/images/poubelle.jpg';



export default class Panier extends React.Component {
  constructor(props) {
    super(props);
this.handleQuantiteChange = this.handleQuantiteChange.bind(this);
  }


handleQuantiteChange(event, produitId) {
    const newQuantite = parseInt(event.target.value, 10);
    if (!isNaN(newQuantite) && newQuantite >= 0) {
      this.props.modifierQuantite(newQuantite);
    }
  }

  render() {
  const { produits, prixTotal, poidsTotal } = this.props;
  return(
   <div className="cart">
    <dic className="weight"> 
     <h11>poids total {poidsTotal} g</h11> 
    </div>
     <div id="panier">
        <h4>Panier</h4>
 
          {produits.map((product) => (
         <div className="product" >
                <div> {product.name} </div>
 		<div className="imageProduit">
          		<img src={product.image} alt={name} />
                </div>
                <div>
              		<input
               		 type="number"
                	min="0"
                	value={product.stock}
                	onChange={(event) => this.handleQuantiteChange(event, produit.id)}
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
        <h8>total commande :{prixTotal} €</h8>
         </div>
      </div>
   );
  }
}
