import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Tap" />
    </React.Fragment>
  );
}
EditTapForm.propTypes = {
  tap: PropTypes.object,
  onEditTap: PropTypes.func
}
export default EditTapForm;