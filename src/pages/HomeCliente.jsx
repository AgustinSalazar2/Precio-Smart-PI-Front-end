import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuscarProductos } from '../components/BuscarProductos'
import { CargarProducto } from '../components/CargarProducto'
import { NavBarCliente } from '../ui/NavBarCliente'

export const HomeCliente = () => {
 
  return (
    <>
        <NavBarCliente />
        <Routes>
          <Route path='/*' element={ <BuscarProductos /> }/>
          <Route path='/add-prod' element={ <CargarProducto /> }/>
        </Routes>
    </>
  )
}
