import {connect} from 'react-redux';


export const MyComponent = ({show, onClick}) => {
    return show ? (
      <div>
        Do something awesome here
        <button onClick={onClick}>Ok</button>
      </div>
    ) : null
  };

  const mapStateToProps = (state) => ({
    show: state.showMyCompoent
  });
  
  const mapDispatchToProps = (dispatch) => ({
      onClick: () => dispatch({
        type: 'SHOW_MY_COMPONENT', payload: false
      })
    })
  ;
  export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);