import React from "react"
import './Output.css'
import { BarraNavegacion } from "./components/BarraNavegacion"
import { Routes, Route } from 'react-router-dom'
import { Inicio } from "./pages/Inicio"
import { Blog } from "./pages/Blog"
import { Contacto } from "./pages/Contacto"

function App() {
  return (
    <div>
      <BarraNavegacion/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  )
}

export default App
