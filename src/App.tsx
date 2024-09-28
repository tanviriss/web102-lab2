import './App.css';
import React, { useState } from 'react';

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
      <div className='m-[50px] flex'>
      <div className="container mt-[50px] flex">
    <div className="upgrade border border-[rgba(153,153,153,0.497)] p-[20px_10px] mr-[25px] w-[200px] leading-[0.5]">
      <h3>Double Stuffed 👯‍♀️</h3>
      <p>2x per click</p>
      <button className="rounded-[8px] border border-transparent px-4 py-[0.3em] text-[1em] font-medium font-[inherit] bg-[#1a1a1a] text-[rgba(255,255,255,0.87)] cursor-pointer mt-[10px]">
        Cost: 10 Samosas
      </button>
    </div>

    <div className="upgrade border border-[rgba(153,153,153,0.497)] p-[20px_10px] mr-[25px] w-[200px] leading-[0.5]">
      <h3>Party Pack 🎉</h3>
      <p>5x per click</p>
      <button className="rounded-[8px] border border-transparent px-4 py-[0.3em] text-[1em] font-medium font-[inherit] bg-[#1a1a1a] text-[rgba(255,255,255,0.87)] cursor-pointer mt-[10px]">
        Cost: 100 Samosas
      </button>
    </div>

    <div className="upgrade border border-[rgba(153,153,153,0.497)] p-[20px_10px] mr-[25px] w-[200px] leading-[0.5]">
      <h3>Full Feast 👩🏽‍🍳</h3>
      <p>10x per click</p>
      <button className="rounded-[8px] border border-transparent px-4 py-[0.3em] text-[1em] font-medium font-[inherit] bg-[#1a1a1a] text-[rgba(255,255,255,0.87)] cursor-pointer mt-[10px]">
        Cost: 1000 Samosas
      </button>
    </div>
  </div>

    </div>
    </div>
  )
}

export default App