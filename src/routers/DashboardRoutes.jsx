import { Route, Routes } from "react-router-dom"
import { NavBar } from "../ui/NavBar"
import { TodosScreen } from '../pages/TodosScreen'
import { Home } from "../pages/Home"
import { Comerciante } from "../pages/Comerciante"
// import { Footer } from "../ui/Footer"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Rutas para el comerciante */}
        <Route path="/comerciante" element={ <Comerciante/> } />

        <Route path="/home" element={ <Home/> } />

        {/* Ruta para el cliente */}
        <Route path="/cliente" element={ <Home/> } />
        

        
      </Routes>
      {/* <Footer/> */}
    </>
  )
}
