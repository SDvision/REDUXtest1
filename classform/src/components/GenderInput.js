import React, { Component } from 'react';

class GenderInput extends Component {
    constructor(props) {
        super(props);

    }

      render() {
        return (
            <div>
                <p> Gender :
                <input type = "radio" id="male" name ="gender" value = "male"/>
                    <label htmlfor = "male">Male</label>
                <input type = "radio" id= "female" name ="gender" value = "female"/>
                    <label htmlfor = "female">Female</label> 
                </p>
            </div>
        );
    }
}

export default GenderInput;