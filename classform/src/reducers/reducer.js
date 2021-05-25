const initialState = {
    showMyComponent: false,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_MY_COMPONENT':
        return {...state, showMyComponent: action.payload};
      case 'SHOW_SOME_OTHER_COMPONENT':
        return {...state, showSomeOtherComponent: action.payload};
      default:
        return state;
    }
  };
  
  
