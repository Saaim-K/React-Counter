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
          <h3 className={`head-${(isLit) ? 'light' : 'dark'} head`}>Counter</h3>
          <button onClick={toggle}>Toggle Theme</button>
        </div>
        <div className='counter'>
          <h1 className={`body-${(isLit) ? 'light' : 'dark'}`}>Counter {counter}</h1>
          <div className='btn'>
            <button className={`${(isLit) ? 'custom-btn light-btn' : 'dark-btn'}`} onClick={increment}><span> + 1 </span><span>INCREMENT</span></button>
            <button className={`${(isLit) ? 'custom-btn light-btn' : 'dark-btn'}`} onClick={decrement}><span> - 1 </span><span>DECREMENT</span></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
