import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { DashboardRoutes } from "./DashboardRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            <DashboardRoutes/>
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
