import React, { Component } from 'react';
import './App.css';
import images from './Data.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>Choose Your Favorite Creature</h1>
        <ImageList Creatures={images}/>
      </div>
     );
  }
}
 
export default App;
