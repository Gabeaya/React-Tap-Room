import React from 'react';
import NewTapForm from './NewTapForm';  
import Menu from './Menu';

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({mainTapList: newMainTapList,
                  formVisibleOnPage: false});
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />
      buttonText = "Return to Menu"
    } else {
      currentlyVisibleState = <Menu tapList={this.state.mainTapList} />
      buttonText = "Add Tap";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
    
  }
}
export default ViewControl;