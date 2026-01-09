import './App.css'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Hero/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
   <>
      <Navbar/>
      <AnimatedRoutes/>
   </>
  )
}

export default App