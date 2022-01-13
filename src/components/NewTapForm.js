import React from "react";

import { v4 } from 'uuid';

function NewTapForm(props){
  return(
    <React.Fragment>
      <form onSubmit={handleNewTapFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name of the beverage.' />
        
        <input 
          type='text'
          name='brand'
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
export default NewTapForm;