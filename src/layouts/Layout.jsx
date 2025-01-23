import { Outlet } from "react-router-dom";
import React from 'react'
import '../Output.css'

export const Layout = () => {
  return (
    <div>
        <Outlet>

        </Outlet>
        <div className="bg-green-500">soy un footer</div>
    </div>
  )
}
