import React, { Component } from 'react';

class StateInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <label htmlfor= "states">State  : </label>       
            <select id="states">
                <option> MH </option>
                <option> UP </option>
                <option> MP </option>
            </select>
          </div>   
        );
    }
}

export default StateInput;