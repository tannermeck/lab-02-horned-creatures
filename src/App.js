import React, { Component } from 'react';
import './App.css';
import images from './Data.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = { 
    keyword:'All'
   }
  render() { 
    return ( 
      <>
        <div className="dropDown">
          <h1>Choose Your Favorite Creature</h1>
          <select>
            <option value="All">All</option>
            <option value="narwhal">narwhal</option>
            <option value="rhino">rhino</option>
            <option value="unicorn">unicorn</option>
            <option value="unilego">unilego</option>
            <option value="triceratops">triceratops</option>
            <option value="markhor">markhor</option>
            <option value="mouflon">mouflon</option>
            <option value="addax">addax</option>
            <option value="chameleon">chameleon</option>
            <option value="lizard">lizard</option>
            <option value="dragon">dragon</option>
          </select>
        </div>
        <div>
          <ImageList Creatures={images}/>
        </div>
      </>
     );
  }
}
 
export default App;
