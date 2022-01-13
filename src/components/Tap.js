import React from 'react';
import PropTypes from "prop-types";

function Tap(props){
  const name = "Weihenstephaner Vitus";
  return (
    <React.Fragment>
    <h2>{ props.name } - Pint {props.price}</h2>
    <h3><em>{ props.brand }|ABV: {props.content}</em> </h3>


    <hr/>
  </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  content: PropTypes.string,
  kegVal: PropTypes.number
}
export default Tap;