import React from 'react';

function Tap(props){
  const name = "Weihenstephaner Vitus";
  return (
    <React.Fragment>
    <h2>{ props.name } </h2>
    <h3>{ props.brand } </h3>
    <h3><em>{props.price} per pint</em></h3>

    <hr/>
  </React.Fragment>
  );
}
export default Tap;