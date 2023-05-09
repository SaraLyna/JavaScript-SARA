import app from '../assets/style/app.css';
import React from 'react';
import Currency from './Currency';
import CurrencyWithInput from './CurrencyWithInput';
import currencies from '../data/currencies';

/*
 define root component
*/
export default class ConvertAppV3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      euroValue: '1',
      currencies: [],
    };
  }

  componentDidMount() {
    this.setState({ currencies: currencies });
  }

  amountChanged = (newValue) => {
    const { currencies } = this.state;
    const euroValue = parseFloat(newValue) / currencies[0].rate;
    this.setState({ euroValue });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currencies } = this.state;
    const euroValue = parseFloat(prevState.euroValue) * currencies[0].rate;
    if (parseFloat(prevState.euroValue) !== euroValue) {
      this.setState({ euroValue });
    }
  }

  render() {
    const { euroValue, currencies } = this.state;

    return (
      <div className="app">
        <h1>Convertisseur de devises</h1>
        <CurrencyWithInput
          code={currencies[0].code}
          rate={currencies[0].rate}
          symbol={currencies[0].symbol}
          euro={parseFloat(euroValue)}
          amountChanged={this.amountChanged}
        />
        {currencies.slice(1).map((currency) => (
          <Currency
            key={currency.code}
            code={currency.code}
            rate={currency.rate}
            symbol={currency.symbol}
            euro={parseFloat(euroValue)}
          />
        ))}
      </div>
    );
  }
}

