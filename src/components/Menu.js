import React from "react";
import Tap from "./Tap";
import PropTypes from "prop=types";

function Menu(props){

  return (
    <React.Fragment>
      {props.tapList.map((tap, index)=>
        <Tap name={tap.name}
          brand={tap.brand}
          price={tap.price}
          content={tap.content}
          kegVal={tap.kegVal}
          key={index}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};

export default Menu;