import React, { Component } from 'react';
import './ImageItem.css';

class ImageItem extends Component {
    state = {  }
    render() { 
        return (  
           <div className="div-creatures">
                <section>
                    <p className="Creatures">
                        {this.props.animal.title}
                        <img 
                        alt={this.props.animal.keyword}
                        width="200"
                        src={this.props.animal.url}
                        />
                    </p>
                </section>
                <section className="horns">
                    <h3>Horns:</h3>
                    <p>
                        {this.props.animal.horns}
                    </p>
                </section>
            
            </div>
        );
    }
}
 
export default ImageItem;