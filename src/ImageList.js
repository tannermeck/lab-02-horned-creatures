import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import './ImageList.css';


class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
           <div className="div-section">
                {this.props.Creatures.map((image) =>  {
                    return <ImageItem key={image.title} animal={image} />
                })}
           </div> 
         );
    }
}
 
export default ImageList;