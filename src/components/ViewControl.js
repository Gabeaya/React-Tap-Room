import React from 'react';
import NewTapForm from './NewTapForm';  
import Menu from './Menu';

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm />
    } else {
      currentlyVisibleState = <Menu />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
    
  }
}
export default ViewControl;