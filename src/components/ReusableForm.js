import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of the beverage.' />
          <br/>
        
        <input 
          type='text'
          name='location'
          placeholder='Where is this beverage from?'/>
          <br/>

        <input 
          type='number'
          name='price'
          placeholder='Price per pint.'/>
          <br/>

        <input
          type='number'
          name='content'
          placeholder='What is the ABV?'/>
          <br/>

        <input 
          type='number'
          name='kegVal'
          disabled
          defaultValue={124} />
          <br/>
        <button type='submit'>{props.buttonText}</button>
        <p>*Each submitted form has an automated 124 pints added per Tap item</p>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;