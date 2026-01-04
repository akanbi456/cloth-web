import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Component/Header'
import Collection from './pages/Collection'
import Navbar from './Component/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './Component/Footer'
function App() {
  

  return (
    <>
      <Router>
         <Navbar />
      <Header/>
     <Collection/>
     <About/>
     <Contact/>
     <Footer/>
     
        <Routes>
          <Route/>

        </Routes>
      </Router>

      
  
     
    </>
  )
}

export default App
