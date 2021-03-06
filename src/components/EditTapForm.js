import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm (props) {
  const {tap} = props;

  function handleEditTapFormSubmission(event) 
  {
    event.preventDefault();
    props.onEditTap({name: event.target.name.value, location: event.target.location.value, price: parseInt(event.target.price.value), content: parseInt(event.target.content.value), kegVal: parseInt(event.target.kegVal.value), id: tap.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formText="Update Keg Details"
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText="Update Tap" />
    </React.Fragment>
  );
}
EditTapForm.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func
}
export default EditTapForm;