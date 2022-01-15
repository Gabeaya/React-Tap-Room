import React from "react";
import PropTypes from "prop-types";

function TapDetail(props){
  const { tap, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <h2>{tap.name}</h2>
      <h3>Located in {tap.location}</h3>
      <h3>$ {tap.price} a pint</h3>
      <h3>{tap.content}% ABV</h3>
      <h3>Pints Remaining: {tap.kegVal} pts</h3>
      <button onClick={props.onClickingEdit}>Update Tap</button>
      <button onClick={()=> onClickingDelete(tap.id)}>Close Tap</button>
      <hr/>
    </React.Fragment>

  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};
export default TapDetail;