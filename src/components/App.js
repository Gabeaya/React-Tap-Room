import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = "Weihenstephaner Vitus";

  return (
    <React.Fragment>
      <Header />
      <h3>{name}</h3>
      <hr />
    </React.Fragment>
    
  );
}

export default App;
