import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Mo, setMo] = useState(true)

  return (
    <>
      <div className="container">
      <button onClick={() => setMo(true)}>Mo Form</button>

      <div className={`login-box ${Mo ? "show" : "hide"}`}>
        <span className="close" onClick={() => setMo(false)}>
          ×
        </span>

        <h2>Dang nhap</h2>

        <input type="text" />
        <input type="password" />

        <button className="login-btn">Dang nhap</button>
      </div>
    </div>
    </>
  )
}

export default App
