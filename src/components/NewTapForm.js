import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";


function NewTapForm(props){
  function handleNewTapFormSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, location: event.target.location.value, price: event.target.price.value, content: event.target.content.value, kegVal: event.target.kegVal.value, id: v4()}); 
  }

  return(
    <React.Fragment>
      <ReusableForm
      formText="New Keg Info"
      formSubmissionHandler={handleNewTapFormSubmission}
      buttonText="Add Tap" />
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;