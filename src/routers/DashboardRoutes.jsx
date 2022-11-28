import { HomeCliente } from "../pages/HomeCliente"
import { HomeComerciante } from "../pages/HomeComerciante"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
// import { Footer } from "../ui/Footer"

export const DashboardRoutes = () => {
  const { user } = useContext(AuthContext)
  
  return (
    <>
      {(user.rol==='comerciante' ? <HomeComerciante /> : <HomeCliente />)}
    </>
  )
}
