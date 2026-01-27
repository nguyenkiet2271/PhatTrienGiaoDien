import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import StudentInfo from "./components/StudentInfo.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <StudentInfo
        name="Nguyen Do Anh Kiet"
        id="23649011"
        className="KTPM19ATT"
      />

      <Footer />
    </>
  )
}

export default App
