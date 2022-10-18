import './App.css';
import { useState } from 'react';

function App() {
  const [counter, changeCounter] = useState(0);
  const {isLit,setLit}=useState(true)



  return (
    <>
      <div className='navbar'>
        <h3>Counter {isLit}</h3>

      </div>
      <div className='counter'>
        <h1>Counter {counter}</h1>
        <div className='btn'>
          <button className="custom-btn btn-12" onClick={() => changeCounter(counter + 1)}><span> + 1 </span><span>INCREMENT</span></button>
          <button className="custom-btn btn-12" onClick={() => changeCounter(counter - 1)}><span> - 1 </span><span>DECREMENT</span></button>
        </div>
      </div>
    </>
  );
}

export default App;
