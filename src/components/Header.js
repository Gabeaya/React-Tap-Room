import React from "react";
import image from "./../img/rick.jpeg";

function Header (){
  return(
    <React.Fragment>
      <h1> Welcome to Ricktoberfest </h1>
      <img src={image} alt="Ricktoberfest logo art" />
    </React.Fragment>
  
  );
}

export default Header;