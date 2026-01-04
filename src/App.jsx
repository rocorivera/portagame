import './App.css'
import Navbar from './components/Navbar'
import Hero from './Pages/Hero'
import { Routes, Route } from 'react-router-dom'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App