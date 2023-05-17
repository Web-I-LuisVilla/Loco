import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensaje from './components/Mensaje'
import { BrowserRouter as Router,
Routes,
Route,
Link
 } from 'react-router-dom'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import Quienessomos from './components/Quienessomos'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/*
      <h1>Props</h1>
      <hr />
      <h2>Contador:{count}</h2>
      <Mensaje contador= {count} setCount={setCount} nombre='pedro' edad={21} url='https://app.juniorfc.co/sites/all/themes/basic_theme/images/logo-junior-fc.png'/>
      */}
      <div className='container mt-3'>
      <nav>
        <div className='btn-group'>
          <Link to="/" className='btn btn-info'>Inicio</Link>
          <Link to="/contacto" className='btn btn-info'>Contacto</Link>
          <Link to="/mensaje" className='btn btn-info'>Mensaje</Link>
          <Link to="/quienessomos" className='btn btn-info'>Quiénes Somos</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path='quienessomos/:id' element={<User/>}/>
        <Route path='/' element={<Inicio/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path='quienessomos' element={<Quienessomos/>}/>
        <Route path='mensaje' 
        element={<Mensaje contador= {count} setCount={setCount} nombre='pedro' edad={21} url='https://app.juniorfc.co/sites/all/themes/basic_theme/images/logo-junior-fc.png'/>}/>
      </Routes>
      </div>
      
    </Router>
  )
}

export default App
