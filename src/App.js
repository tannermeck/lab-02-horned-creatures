import React, { Component } from 'react';
import images from './Data.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';

class App extends Component {
  state = { 
    keyword:'all',
    horns: 'all',
    sortOption: 'horns'
  }
  
  hornOption = ['all', '1', '2', '3', '100']
  handleKeywordChange=(e) => {this.setState({keyword: e.target.value, sortOption: 'keyword'})}
  handleChange=(event) => {this.setState({horns: event.target.value, sortOption: 'horns'})}
  
  render() { 
    let keywordOption = [...new Set(images.map(image => image.keyword))];
    keywordOption.push('all');
    const results = images.filter(image => ((image.keyword === this.state.keyword || this.state.keyword === 'all') && (this.state.horns === 'all' || image.horns === Number(this.state.horns))))
    
    return ( 
      <>
        <Dropdown 
          label='Keyword'
          changeEvent={this.handleKeywordChange}
          options={keywordOption}/>
        <Dropdown 
          label='Horns'
          changeEvent={this.handleChange}
          options={this.hornOption}/>
        <div>
          <ImageList Creatures={results}/>
        </div>
      </>
     );
  }
}
 
export default App;
