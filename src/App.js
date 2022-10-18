import './App.css';
import { useState } from 'react';

function App() {
  const [counter, changeCounter] = useState(0);
  const [isLit, setLit] = useState(true)

  const increment = () => changeCounter(counter + 1)
  const decrement = () => changeCounter(counter - 1)

  const toggle = () => setLit(!isLit)

  return (
    <>
      <div className='navbar'>
        <h3>Counter {(isLit) ? 'light' : 'dark'}</h3>
        <button onClick={toggle}>sasasas</button>

      </div>
      <div className='counter'>
        <h1>Counter {counter}</h1>
        <div className='btn'>
          <button className="custom-btn btn-12" onClick={increment}><span> + 1 </span><span>INCREMENT</span></button>
          <button className="custom-btn btn-12" onClick={decrement}><span> - 1 </span><span>DECREMENT</span></button>
        </div>
      </div>
    </>
  );
}

export default App;
