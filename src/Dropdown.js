import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    state = {  }
    render() { 
        const { changeEvent, options, label } = this.props
        return ( 
            <div className="drop-down">
                <label>{label}</label>
                <select onChange={changeEvent}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
 
export default Dropdown;