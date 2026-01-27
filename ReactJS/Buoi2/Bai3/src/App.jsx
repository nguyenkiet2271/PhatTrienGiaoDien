import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ten, setTen] = useState("")
  const [email, setEmail] = useState("")

  

  return (
    <>
      <div>
        <input type="text"  value={ten} onChange={(e) => setTen(e.target.value)}/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

        
        
          <p>ten:{ten}</p>
          <p>email:{email}</p>
      </div>
    </>
  )
}

export default App
