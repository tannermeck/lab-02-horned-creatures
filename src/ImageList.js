import React, { Component } from 'react';
import ImageItem from './ImageItem.js';


class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
           <>
                {this.props.Creatures.map((image) =>  {
                    return <ImageItem key={image.title} animal={image} />
                })}
           </> 
         );
    }
}
 
export default ImageList;