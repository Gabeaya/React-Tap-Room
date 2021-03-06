import React from 'react';
import NewTapForm from './NewTapForm';  
import Menu from './Menu';
import TapDetail  from './TapDetail';
import EditTapForm from './EditTapForm';

class ViewControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList: [],
      selectedTap: null,
      editing: false
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

  handleDeletingTap = (id) => {
    const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id);
    this.setState({
      mainTapList: newMainTapList,
      selectedTap: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }
  
  handleEditingTapInList = (tapToEdit) => {
    const editedMainTapList = this.state.mainTapList
      .filter(tap => tap.id !== this.state.selectedTap.id)
      .concat(tapToEdit);
    this.setState({
      mainTapList: editedMainTapList,
      editing: false,
      selectedTap: null
    });

  }
  
  handleDecrementingPints = (id) => {
    if (this.state.mainTapList.length > 1) {
      const decrementedList = this.state.mainTapList.filter(tap => tap.id === id)[0]
      if(decrementedList.kegVal === 10){
        alert('Almost Empty');
        decrementedList.kegVal --;
        const newMainTapList = []
        const changedTapList = newMainTapList.concat(decrementedList);
        this.setState({
          mainTapList: changedTapList
        });
      } else if(decrementedList.kegVal === 0){
        return alert("Keg is empty!");
      }else{
        decrementedList.kegVal --;
        const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id).concat(decrementedList);
        this.setState({
          mainTapList: newMainTapList
        });
      }
    } else {
      console.log("yup");
      const decrementedList = this.state.mainTapList.filter(tap=> tap.id === id)[0]
      if(decrementedList.kegVal === 10){
        alert('Almost Empty');
        decrementedList.kegVal --;
        const newMainTapList = []
        const changedTapList = newMainTapList.concat(decrementedList);
        this.setState({
          mainTapList: changedTapList
        });
      } else if(decrementedList.kegVal === 0){
        return alert("Keg is empty!");
      } else {
        decrementedList.kegVal --;
        const newMainTapList = []
        const changedTapList = newMainTapList.concat(decrementedList);
        this.setState({
          mainTapList: changedTapList
        });
      }
      
    }
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let formText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditTapForm tap = { this.state.selectedTap} onEditTap={this.handleEditingTapInList} />
      buttonText="Return to Menu";
      
    } else if (this.state.selectedTap != null) {
      currentlyVisibleState= <TapDetail tap= {this.state.selectedTap} onClickingDelete={this.handleDeletingTap} onClickingEdit = {this.handleEditClick} onClickingDecrement={this.handleDecrementingPints}/>;
      buttonText="Return to Menu";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList} />;
      buttonText = "Return to Menu";
      formText="Update Tap";
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