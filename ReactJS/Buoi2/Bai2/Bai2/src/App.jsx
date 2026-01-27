import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const tang = () => {
    setCount(count + 1);
  };

  const giam = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2 style={{color: count > 10 ? "red" : "black"}}>{count}</h2>
        <button onClick={tang}>Tăng</button>
        <button onClick={giam}>Giảm</button>
        <button onClick={reset}>Đặt lại</button>


      </div>
    </>
  )
}

export default App
