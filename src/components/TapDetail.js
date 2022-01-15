import React from "react";

function TapDetail(prop){
  const { tap } = props;

  return (
    <React.Fragment>
      <h1>Tap Details</h1>
      <h2>{tap.name}</h2>
      <h3>Located in {tap.location}</h3>
      <h3>$({tap.price}) a pint</h3>
      <h3>{tap.content}% ABV</h3>
      <h3>How many pints left:{tap.kegVal}</h3>

      <hr/>
    </React.Fragment>

  );
}

TapDetail.propTypes = {
  tap: PropTypes.object
};
export default TapDetail;