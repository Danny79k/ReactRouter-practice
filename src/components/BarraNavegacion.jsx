import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Output.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const BarraNavegacion = () => {
  return (
    <div className='bg-red-400 flex flex-row justify-evenly p-5'>
      <NavLink className='btn btn-outline-warning text-black' to='/'>Inicio</NavLink>
      <NavLink className='btn btn-outline-warning text-black' to='/contacto'>Contacto</NavLink>
      <NavLink className='btn btn-outline-warning text-black' to='/blog'>Blog</NavLink>
    </div>
  )
}
