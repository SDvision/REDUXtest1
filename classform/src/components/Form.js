import NameInput from "./NameInput"
import GenderInput from "./GenderInput"
import StateInput from "./StateInput"

import MyComponent from "./myComponent"

import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
    }

    showData(e){
        e.preventDefault();
        //store.dispatch({type: 'SHOW_MY_COMPONENT', payload: true});   
    }
    render() {
        return (
        <div>
          <form onSubmit="return ShowData(event)"  > 
            <NameInput />
            <GenderInput />
            <StateInput /> 
            <br />
            <MyComponent show = {false}/>
            <br />
            <button onClick = {this.showData}> Submit </button>
          </form>
        </div>
        );
    }
}
export default Form;



// export const SomeOtherComponent = () => {
//     const dispatch = useDispatch();
//     const toggleId = 'MY_COMPONENT_TOGGLE';
//     return (
//       <div>
//               <span>Say something</span>
//               <Toggle id={toggleId}>
//                 <MyComponent onClick={() => dispatch(hideToggle(toggleId))}/>
//               </Toggle>
//               <button onClick={() => dispatch(showToggle(toggleId))}>Show my component</button>
//       </div>
//   )};
  
//   export default SomeOtherComponent;
