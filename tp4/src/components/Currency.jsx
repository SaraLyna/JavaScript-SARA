import React from 'react';
import currency from '../assets/style/currency.css';
import currencies from '../data/currencies.js';


export default class Currency extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
    const { code, euro } = this.props;
    const currency = currencies.find(c => c.code === code);
    const value = euro * currency.rate;
    const formattedValue = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: code,
    }).format(value);

    return (
      <div className="currency">
        <div className="currency-name">{currency.code}</div>
        <div className="currency-value">{formattedValue}</div>
        <div className="currency-symbol">{currency.symbol}</div>
      </div>
    );
  }



}
