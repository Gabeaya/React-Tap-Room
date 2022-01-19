import React from 'react';
import Header from './Header';
import ViewControl from './ViewControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <br/>
      <div className='container'>
        <ViewControl />
      </div>
      
      
    </React.Fragment>
    
  );
}

export default App;
