import React from 'react';
import PropTypes from "prop-types";

function Tap(props){
  return (
    <React.Fragment>
    <div onClick = {() => props.whenTapClicked(props.id)}>
      <h2>{ props.name } - Pint $ {props.price}</h2>
      <h3><em>From { props.location } | ABV: {props.content}%</em> </h3>


      <hr/>
    </div>
  </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  price: PropTypes.string.isRequired,
  content: PropTypes.string,
  kegVal: PropTypes.number,
  whenTapClicked: PropTypes.func
};
export default Tap;