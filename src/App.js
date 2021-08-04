import React, { Component } from 'react';
import './App.css';
import images from './Data.js';
import ImageList from './ImageList.js';
import Dropdown from './Drowpdown.js';

class App extends Component {
  state = { 
    keyword:'all',
    horns: 'all',
    sortOption: 'horns'
  }
  keywordOption = ['all', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']
  hornOption = ['all', '1', '2', '3', '100']
  handleKeywordChange=(e) => {this.setState({keyword: e.target.value, sortOption: 'keyword'})}
  handleChange=(event) => {this.setState({horns: event.target.value, sortOption: 'horns'})}
  
  render() { 
    const filteredImage = images.filter(image => image.keyword === this.state.keyword || this.state.keyword === 'all')
    const hornsFiltered = images.filter(image => this.state.horns === 'all' || image.horns === Number(this.state.horns))
    return ( 
      <>
        <Dropdown 
          label='Keyword'
          changeEvent={this.handleKeywordChange}
          options={this.keywordOption}/>
        <Dropdown 
          label='Horns'
          changeEvent={this.handleChange}
          options={this.hornOption}/>
        <div>
          <ImageList Creatures={this.state.sortOption === 'keyword' ? filteredImage : hornsFiltered}/>
        </div>
      </>
     );
  }
}
 
export default App;
