import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier)
  }
  return (
    <div className="App">
      <div className='header'>
        <h1>Orange Selector</h1>
        <h2>Count: {count}</h2>
        <img onClick={updateCount} className="h-[30em] p-[2em] mx-auto text-center" src="https://www.pngall.com/wp-content/uploads/2016/05/Orange-PNG-Clipart.png" alt="orange"/>
      </div>
    </div>
  )
}

export default App