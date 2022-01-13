import React from 'react';
import PropTypes from "prop-types";

function Tap(props){
  return (
    <React.Fragment>
    <h2>{ props.name } - Pint {props.price}</h2>
    <h3><em>{ props.brand }|ABV: {props.content}</em> </h3>


    <hr/>
  </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string.isRequired,
  content: PropTypes.string,
  kegVal: PropTypes.number.isRequired
};
export default Tap;