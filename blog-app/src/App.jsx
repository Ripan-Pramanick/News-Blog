import { useState } from 'react'
import './App.css'
import NavBar from './component/navBar.jsx'
import MainContent from './component/mainContent.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MainContent />
    </>
  )
}

export default App
