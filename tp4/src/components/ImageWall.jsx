import React from 'react';
import '../assets/style/murImages.css';

export default class ImageWall extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  render() {
    const images = this.props.images.filter(photo => photo.texte.toLowerCase().includes(this.props.filterText.toLowerCase())).map(photo => 
      <img src={photo.image}  alt={photo.texte} title={photo.texte}  key={photo.image}
      onMouseOver={() => this.props.imageChanged(photo.image, photo.texte)}
    />
    );

    return <div id="mur"> 
     {images} </div>;
  }
}
