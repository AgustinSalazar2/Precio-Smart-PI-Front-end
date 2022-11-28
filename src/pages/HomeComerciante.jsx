import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CargarComercio } from '../components/CargarComercio'
import { CargarProducto } from '../components/CargarProducto'
import { MisProductos } from '../components/MisProductos'
import { NavBar } from '../ui/NavBar'

export const HomeComerciante = () => {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/*' element={ <CargarComercio /> }/>
          <Route path='/productos' element={ <MisProductos /> }/>
          <Route path='/add-prod' element={ <CargarProducto /> }/>
        </Routes>
    </>
  )
}
