import React, {useState} from "react";
import "./App.css";

function App(){
  const [count ,setcount]=useState(0);
  return(
    <div className="App">
      <header>
      <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>Current value of count is {count} </h2>
      <button onClick={() => setcount(0)}>RESET Counter </button>
      <button onClick={() =>setcount(count+1)}>Increase Counter </button>
      <button onClick={() =>setcount(count-1)}>
        DEcrease Counter 
      </button>
    </div>
  )
}
export default App;