import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewTapForm(props){
  function handleNewTapFormSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, location: event.target.location.value, price: event.target.price.value, content: event.target.content.value, kegVal: 124, id: v4()}); 
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

        <button type='submit'>Add to Menu</button>
        <p>*Each submitted form has an automated 124 pints added per Tap item</p>

      </form>
    </React.Fragment>
  )
}
NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};
export default NewTapForm;