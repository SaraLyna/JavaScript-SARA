import React from 'react';
import '../assets/style/product.css';
import panier from '../assets/images/panier.jpg';
import poubelle from '../assets/images/poubelle.jpg';



export default class Product extends React.Component {
  constructor(props) {
    super(props);
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
        </div>
         <div className="price">{price}</div>
    
          <img
                className="button"
                src={panier}
                alt="panier"
                onClick={() => this.props.supprimer(product)}
              />
      </div>
    );  
  }
}
