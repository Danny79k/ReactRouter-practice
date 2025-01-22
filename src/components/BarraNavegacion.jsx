import React from 'react'
import { Link } from 'react-router-dom'
import '../Output.css'

export const BarraNavegacion = () => {
  return (
    <div className='bg-red-400 flex flex-row justify-evenly p-5'>
      <Link className='' to='/'>Inicio</Link>
      <Link className='' to='/contacto'>Contacto</Link>
      <Link className='' to='/blog'>Blog</Link>
    </div>
  )
}
