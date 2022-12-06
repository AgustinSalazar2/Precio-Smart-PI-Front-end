import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BuscarProductos } from '../components/BuscarProductos'
import { CargarProducto } from '../components/CargarProducto'
import { ListaPorComercio } from '../components/ListaPorComercio'
import { Footer } from '../ui/Footer'
import { NavBarCliente } from '../ui/NavBarCliente'

export const HomeCliente = () => {
 
  return (
    <>
      <div className="">

        <NavBarCliente />
        <Routes>
          <Route path='/*' element={ <BuscarProductos /> }/>
          <Route path='/list-prod' element={ <ListaPorComercio /> }/>
        </Routes>



      </div>
    </>
  )
}
