import React, { Component } from 'react';
import images from './Data.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>Choose Your Favorite Create</h1>
        <ImageList Creatures={images}/>
      </div>
     );
  }
}
 
export default App;
