import { useState } from 'react'
import './App.css'
import NavBar from './component/navBar.jsx'
import MainContent from './component/mainContent.jsx';
import TopBtn from './component/clickTopBtn.jsx'
import Footer from './component/footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    

      <NavBar />
      <TopBtn/>
      <MainContent />
      <Footer/>
    </>
  )
}

export default App
