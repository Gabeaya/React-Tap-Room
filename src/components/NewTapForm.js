import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTapForm(props){
  function handleNewTapFormSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, location: event.target.location.value, price: event.target.price.value, content: event.target.content.value, kegVal: event.target.kegVal.value, id: v4()}); 
  }

  return(
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of the beverage.' />
        
        <input 
          type='text'
          name='location'
          placeholder='Where is this beverage from?'/>
        <input 
          type='text'
          name='price'
          placeholder='Price per pint.'/>
        <input
          type='text'
          name='content'
          placeholder='What is the ABV?'/>
        <input
          type='number'
          name='kegVal'
          placeholder='Input 124 if its a keg.'/>
        <button type='submit'>Add to Menu</button>
      </form>
    </React.Fragment>
  )
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};
export default NewTapForm;