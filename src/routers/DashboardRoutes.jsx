import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { CargarProducto } from "../pages/CargarProducto"
import { HomeCliente } from "../pages/HomeCliente"
import { HomeComerciante } from "../pages/HomeComerciante"
// import { Footer } from "../ui/Footer"

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={ <Home/> } />

        {/* Rutas para el comerciante */}
        <Route path="/comerciante" element={ <HomeComerciante /> } />
        <Route path='/add-prod' element={ <CargarProducto /> }/>


        {/* Ruta para el cliente */}
        <Route path="/cliente" element={ <HomeCliente/> } />
        
        
      </Routes>
      {/* <Footer/> */}
    </>
  )
}
