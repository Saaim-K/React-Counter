import './App.css';
import { useState } from 'react';

function App() {
  const [counter, changeCounter] = useState(0);



  return (
    <>
      <div>
        
      </div>
      <div>
        <h1>Counter {counter}</h1>
        <button className="custom-btn btn-12" onClick={() => changeCounter(counter + 1)}><span>CLICK!</span><span>INCREMENT</span></button>
        <button className="custom-btn btn-12" onClick={() => changeCounter(counter - 1)}><span>CLICK!</span><span>DECREMENT</span></button>
      </div>
    </>
  );
}

export default App;
