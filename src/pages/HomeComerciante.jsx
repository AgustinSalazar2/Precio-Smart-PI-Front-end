import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CargarComercio } from '../components/CargarComercio'
import { CargarProducto } from '../components/CargarProducto'
import { Productos } from '../components/Productos'
import { ForoNego } from '../components/ForoNego'
import { NavBar } from '../ui/NavBar'

export const HomeComerciante = () => {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/*' element={ <CargarComercio /> }/>
          <Route path='/productos' element={ <Productos /> }/>
          <Route path='/add-prod' element={ <CargarProducto /> }/>
          <Route path='/foroComer' element={ <ForoNego /> }/>
        </Routes>
    </>
  )
}
