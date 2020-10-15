import React from 'react';
import './App.css';
import Child from './Hook/Child'

export const TemaSitus = React.createContext('light');


// custome hook 
const useToogle = function(){
  const [value , toggle ] = React.useState("OFF");

  return [value, toggle];
}


function App() {
 
  let [statuslampu, togglelampu] = useToogle()

  return (
    <div className="App">

      Lampu saat ini : {statuslampu} <br />
      <button onClick={e => togglelampu("ON")}>Saklar</button>
      {/* <TemaSitus.Provider value={'light'}>
        <Child />
      </TemaSitus.Provider> */}
    </div>
  );
}

export default App;
