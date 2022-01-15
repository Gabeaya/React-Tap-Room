import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function Menu(props){

  return (
    <React.Fragment>
      {props.tapList.map((tap)=>
        <Tap 
          whenTapClicked = {props.onTapSelection}
          name={tap.name}
          location={tap.location}
          price={tap.price}
          content={tap.content}
          kegVal={tap.kegVal}
          id={tap.id}
          key={tap.id}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  tapList: PropTypes.array,
  onTapSelection: PropTypes.func
};

export default Menu;