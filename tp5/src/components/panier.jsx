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


handleQuantiteChange(event) {
    const newQuantite = parseInt(event.target.value, 10);
    if (!isNaN(newQuantite) && newQuantite >= 0) {
      const { product } = this.props;
      this.props.modifierQuantite(product.id, newQuantite);
    }
  }

  render() {
  const { produits, prixTotal, poidsTotal } = this.props;
  return(
   <div className="cart">
     <h11>Poids total {poidsTotal} g</h11> 
     <div id="panier">
        <h4>Panier</h4>
 
        <div className="productList">
          {produits.map((product) => (
         <div className="product"  key={product.id}>
		<div className="info">
              <div> {product.name} </div>
 		<div className="imageProduit">
          	<img src={product.image} alt={name} />
        </div>
              <div>qté 
              <input
                type="number"
                min="0"
                value={product.stock}
                onChange={this.handleQuantiteChange}
              />
              </div>	  
           <button onClick={() => this.props.supprimer(product)}><img src={poubelle} alt="poubelle" style={{ width: '40px', height: '40px' }} /></button>
        </div>
         </div>
         ))}       
         </div>
         </div>
        <div className="total">
        <h8>total commande :{prixTotal} $</h8>
         </div>
      </div>
   );
  }
}
