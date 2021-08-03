import React, { Component } from 'react';
import './App.css';
import images from './Data.js';
import ImageList from './ImageList.js';

class App extends Component {
  state = { 
    keyword:'all',
    horns: 'all',
    sortOption: 'horns'
  }
  handleKeywordChange=(e) => {this.setState({keyword: e.target.value, sortOption: 'keyword'})}
  handleChange=(event) => {this.setState({horns: event.target.value, sortOption: 'horns'})}
  render() { 
    const filteredImage = images.filter(image => image.keyword === this.state.keyword || this.state.keyword === 'all')
    const hornsFiltered = images.filter(image => this.state.horns === 'all' || image.horns === Number(this.state.horns))
    return ( 
      <>
        <div className="dropDown">
          <h1>Choose Your Favorite Creature Category</h1>
          <select onChange={this.handleKeywordChange}>
            <option value="all">all</option>
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
        <div className="hornsDropdown">
          <h1>Choose Number of Horns</h1>
        <select onChange={this.handleChange}>
            <option value="all">all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
        </select>
        </div>
        <div>
          <ImageList Creatures={this.state.sortOption === 'keyword' ? filteredImage : hornsFiltered}/>
        </div>
      </>
     );
  }
}
 
export default App;
