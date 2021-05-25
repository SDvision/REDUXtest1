import React, { Component } from 'react';

class NameInput extends Component {
    constructor(props) {
        super(props);

    }  
    render() {
        return (
            <div>
                <label for="nameInpur"> Enter Name : </label>
                <input type="text" name="nameInput" id="nameInput" />
            </div>
        );
    }
}

export default NameInput;