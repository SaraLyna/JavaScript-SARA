import React from 'react';

export default class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div id="details">
    détails
      <img src={this.props.image} alt={this.props.texte} /> 
      <div className="legende">{this.props.texte}</div>
      <input
   id="filtre" type="text" placeholder="filtre image..."
   value ={this.props.filterText}
   onChange ={(event) => this.props.filterChanged(event.target.value)}
  />
    </div>);
  }
}
