import React, { createContext, useState } from "react"
import './Output.css'
import { BarraNavegacion } from "./components/BarraNavegacion"
import { Routes, Route } from 'react-router-dom'
import { Inicio } from "./pages/Inicio"
import { Blog } from "./pages/Blog"
import { Contacto } from "./pages/Contacto"
import { Layout } from "./layouts/Layout"
import { BlogCarachter } from "./components/BlogCarachter"


export const CharactersContext = createContext()
function App() {
  
  const [charactersList, setCharactersList] = useState(null)

  console.log(charactersList)
  return (
    <div>
      <CharactersContext.Provider value={{ charactersList, setCharactersList }}>
        <BarraNavegacion />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Inicio />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/blog/:id" element={<BlogCarachter />}></Route>
          </Route>
        </Routes>
      </CharactersContext.Provider>
    </div>
  )
}

export default App
