import React, { Component } from 'react';

class Dropdown extends Component {
    state = {  }
    render() { 
        const { changeEvent, options, label } = this.props
        return ( 
            <>
                <label>{label}</label>
                <select onChange={changeEvent}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </>
         );
    }
}
 
export default Dropdown;