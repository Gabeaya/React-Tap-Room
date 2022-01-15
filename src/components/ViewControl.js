import React from 'react';
import NewTapForm from './NewTapForm';  
import Menu from './Menu';
import TapDetail  from './TapDetail';

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
    if (this.state.selectedTap != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTapToList = (newTap) => {
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({mainTapList: newMainTapList,
                  formVisibleOnPage: false});
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleDeleteingTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedTap != null) {
      currentlyVisibleState= <TapDetail tap= {this.state.selectedTap} onCLickingDelete={this.handleDeleteingTap} onLCickingEdit = {this.handleEditClick}/>;
      buttonText="Return to Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />;
      buttonText = "Return to Menu"
    } else {
      currentlyVisibleState = <Menu tapList={this.state.mainTapList} onTapSelection={this.handleChangingSelectedTap}/>;
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