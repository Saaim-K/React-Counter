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
      <div className={`main-${(isLit) ? 'light' : 'dark'}`}>
        <div className='navbar'>
          <h3 className={`body-${(isLit) ? 'light' : 'dark'}`}>Counter {(isLit) ? 'light' : 'dark'}</h3>
          <button onClick={toggle}>Toggle Theme</button>

        </div>
        <div className='counter'>
          <h1 className={`body-${(isLit) ? 'light' : 'dark'}`}>Counter {counter}</h1>
          <div className='btn'>
            <button className="custom-btn btn-12" onClick={increment}><span> + 1 </span><span>INCREMENT</span></button>
            <button className="custom-btn btn-12" onClick={decrement}><span> - 1 </span><span>DECREMENT</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
