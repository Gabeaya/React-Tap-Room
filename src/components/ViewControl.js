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
    let addTapbutton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm />
    } else {
      currentlyVisibleState = <Menu />
      addTapButton = <button onClick={this.handleClick}>Add Tap</button>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
    
  }
}
export default ViewControl;