import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <div className='header'>
        <h1>Orange Selector</h1>
        <h2>Count:</h2>
        <img className="h-[15em] p-[1.5em] mx-auto text-center" src="https://www.pngall.com/wp-content/uploads/2016/05/Orange-PNG-Clipart.png" alt="orange"/>
      </div>
    </div>
  )
}

export default App