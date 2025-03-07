import React from 'react';
import currency from '../assets/style/currency.css';
import currencies from '../data/currencies.js';


export default class CurrencyWithInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    this.props.amountChanged(value * this.props.rate);
  }

  render() {
    const { code, symbol, euro } = this.props;
    const { value } = this.state;
    const convertedValue = euro * (1 / this.props.rate);

    return (
      <div className="currency">
        <input type="number" value={value} onChange={this.handleInputChange} />
        <span>{code}</span>
        <span>{symbol}</span>
        <span>{convertedValue.toFixed(2)}</span>
      </div>
    );
  }
}

