import React from 'react';
import CheckIcon from './assets/CheckIcon';

function App() {
  return (
    <div style={{ textAlign: 'center', display:'flex', alignItems:'center', flexDirection:'column',
      justifyContent:'center', height:'100vh'
     }}>
      <CheckIcon/>
      <h1>Your login process has been completed.</h1>
      <p>You can return back to your application and safely close this window.</p>
    </div>
  );
}

export default App;
