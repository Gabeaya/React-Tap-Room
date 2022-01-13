import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function Menu(props){

  return (
    <React.Fragment>
      {props.tapList.map((tap, index)=>
        <Tap name={tap.name}
          location={tap.location}
          price={tap.price}
          content={tap.content}
          kegVal={tap.kegVal}
          key={index}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  tapList: PropTypes.array
};

export default Menu;