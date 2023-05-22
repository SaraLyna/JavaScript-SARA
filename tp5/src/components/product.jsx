import React from 'react';
import '../assets/style/product.css';
import panier from '../assets/images/panier.jpg';



export default class Product extends React.Component {
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
    const { id, name, description, image, price, stock, weight } = this.props.product;
    return (
      <div className="product">
      <div className="info">
      
          <div className="name">{name}</div>    
          <div className="description petit">{description}</div>
           <div className="weight">{weight}</div>
        </div>
       
        <div className="imageProduit">
          <img src={image} alt={name} />
        </div>
         <div className="stock">
          qté {stock}
          <input
            type="number"
            min="0"
            value={this.props.product.stock}
            onChange={this.handleQuantiteChange}
          />
        </div>
         <div className="price">{price}</div>
      
        <button onClick={() => this.props.add(this.props.product)}><img src={panier} alt="panier" style={{ width: '40px', height: '40px' }} /></button>
        
      </div>
    );  
  }
}
