import { Navigate, redirect, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { CargarProducto } from "../pages/CargarProducto"
import { HomeCliente } from "../pages/HomeCliente"
import { HomeComerciante } from "../pages/HomeComerciante"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useEffect } from "react"
// import { Footer } from "../ui/Footer"

export const DashboardRoutes = () => {
  const { user } = useContext(AuthContext)
  console.log(user);
  const userR = JSON.parse(localStorage.getItem('user'))
  console.log(userR.rol)

  useEffect(()=>{
    const redirigir = () => {
      (userR.rol==='cliente') ? redirect("/cliente") : redirect("/comerciante")
    }
    redirigir()
  },[user])
  
  return (
    <>
    
      <Routes>

        {/* Rutas para el comerciante */}
        <Route path="/comerciante" element={ <HomeComerciante /> } />
        <Route path='/add-prod' element={ <CargarProducto /> }/>


        {/* Ruta para el cliente */}
        <Route path="/cliente" element={ <HomeCliente/> } />
        
        <Route path="/" element={ <Home/> } />
        
      </Routes>
      {/* <Footer/> */}
    </>
  )
}
