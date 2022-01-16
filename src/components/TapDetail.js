import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <h2>Tap Details</h2>
      <h3>{tap.name}</h3>
      <h3>Located in {tap.location}</h3>
      <h3>$ {tap.price} a pint</h3>
      <h3>{tap.content}% ABV</h3>
      <h3>Pints Remaining: {tap.kegVal} pts</h3>
      <button onClick={props.onClickingEdit}>Update Tap</button>
      <button onClick={()=> onClickingDelete(tap.id)}>Discontinue Tap</button>
      <button onClick={() => onClickingDecrement(tap.id)}>Pint Sold</button>
      <hr/>
    </React.Fragment>

  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};
export default TapDetail;