import React, { Component } from 'react';
import './ImageItem.css';

class ImageItem extends Component {
    state = {  }
    render() { 
        return (  
           <>
                <p className="Creatures">
                    {this.props.animal.description}
                    <img 
                    alt={this.props.animal.keyword}
                    width="100"
                    src={this.props.animal.url}
                    />
                </p>
            
            </>
        );
    }
}
 
export default ImageItem;