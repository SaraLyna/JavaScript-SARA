import React from 'react';
import app from '../assets/style/app.css';
import Currency from './Currency.jsx';
import currencies from '../data/currencies.js';

/*
 define root component
*/
export default class ConvertAppV2 extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
    euro: '1',
    currencies: [],
  };
   this.handleEuroChange = this.handleEuroChange.bind(this);
  }

  componentDidMount() {
    this.setState({ currencies: currencies });
  }

  handleEuroChange(event) {
    this.setState({ euro: event.target.value });
  }

 
 render() {
     return (
      <div className="app">
        <h1>Convert Euro to:</h1>
          <div className="form-group">
            <label htmlFor="euro">Euro:</label>
            <input
              type="text"
              id="euro"
              className="form-control"
              onChange={this.handleEuroChange}
              value={this.state.euro}
            />
          </div>
        <div className="currencies">
          <Currency
            code="USD"
            rate={1.19}
            symbol="$"
            euro={parseFloat(this.state.euro)}
            key="USD"
          />
          <Currency
            code="GBP"
            rate={0.87}
            symbol="£"
            euro={parseFloat(this.state.euro)}
            key="GBP"
          />
          <Currency
            code="JPY"
            rate={130.22}
            symbol="¥"
            euro={parseFloat(this.state.euro)}
            key="JPY"
          />
        </div>
      </div>
    );
  }
}
