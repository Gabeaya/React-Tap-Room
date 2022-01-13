import React from "react";
import Tap from "./Tap";

const mainMenuList = [ 
  {
    name: 'Riggity',
    brand: 'doof',
    price: '$6',
    content: '8%',
    kegVal: 124,
  },
  {
    name: 'Wrecked',
    brand: 'doof',
    price: '$7',
    content: '11%',
    kegVal: 124,
  },
  {
    name: 'Do the Trick',
    brand: 'doof',
    price: '$5',
    content: '7%',
    kegVal: 124,
  }
]

function Menu(){

  return (
    <React.Fragment>
      {mainMenuList.map((tap, index)=>
        <Tap name={tap.name}
          brand={tap.name}
          price={tap.price}
          content={tap.content}
          kegVal={tap.kegVal}
          key={index}/>
      )}
    </React.Fragment>
  
  );
}
export default Menu;