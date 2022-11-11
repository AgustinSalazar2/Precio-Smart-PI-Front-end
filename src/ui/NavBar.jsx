import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { type  } from "../types/type";

// Corregir los estilos y modificar las etiquetas "a" por los componentes NavLink 
// que provee react-router-dom
export const NavBar = () => {

  const { authDispatch } = useContext(AuthContext);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to='/home'>Home</NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link active" to='/todos'>Todos</NavLink>
              </li>
              
              <li className="nav-item">
                <button onClick={()=>authDispatch({type: type.logout})} className=" btn btn-sm btn-danger">Cerrar Sesión</button>
              </li>
        
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
    </nav>
  )
}
