import { Route, Routes } from "react-router-dom"
import { NavBar } from "../ui/NavBar"
import { TodosScreen } from '../pages/TodosScreen'
import { Home } from "../pages/Home"
// import { Footer } from "../ui/Footer"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        
        <Route path="/todos" element={ <TodosScreen/> } />

        <Route path="/home" element={ <Home/> } />
        
      </Routes>
      {/* <Footer/> */}
    </>
  )
}
