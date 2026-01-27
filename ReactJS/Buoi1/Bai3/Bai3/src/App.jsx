import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [type, setType] = useState("")

  return (
    <>
      <div>
        <div className={`alert ${type}`}>
        
      </div>

      <button onClick={() => setType("success")}>Success</button>
      <button onClick={() => setType("warning")}>Warning</button>
      <button onClick={() => setType("error")}>Error</button>


      </div>
    </>
  )
}

export default App
