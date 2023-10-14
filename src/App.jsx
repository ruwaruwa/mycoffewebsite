


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import {FaAdn} from 'react-icons/fa6'


import Homepage from './components/pages/Homepage'
import Navbar from './components/header/Navbar'
import { Customers } from './components/pages/Customers';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='home' element={<Homepage/>}/>
      <Route path='custamers' element={<Customers/>}/>
      <Route path='custamers' element={<Products/>}/>
      <Route path='service' element={<Services/>}/>
    </Routes>
     </div>
    </>
  )
}

export default App
