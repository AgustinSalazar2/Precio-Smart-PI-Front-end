import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

import { type } from "../types/type";

import img from "../assets/img/verificar.png";

// Corregir los estilos y modificar las etiquetas "a" por los componentes NavLink
// que provee react-router-dom
export const NavBar = () => {
  const { authDispatch } = useContext(AuthContext);

  //Extraigo del localstorage el usaurio y me fijo si tiene un comercio cargado
  const user = JSON.parse(localStorage.getItem("user"));
  const comerce = user.comercio;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between align-items-center">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <img
          className="mb-2 me-3 "
          src={img}
          alt="Logo de la Aplicación Precios Smart"
          width={50}
          height={50}
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active hover:"
                aria-current="page"
                to="/"
              >
                Mi Comercio
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">
                |
              </a>
            </li> */}

            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/productos"
              >
                Productos del Mercado
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">
                |
              </a>
            </li> */}

            <li className="nav-item">
              {comerce ? (
                <NavLink className="nav-link active" to="/add-prod">
                  Cargar Productos
                </NavLink>
              ) : (
                <NavLink className="nav-link disabled" to="/add-prod">
                  Cargar Productos
                </NavLink>
              )}
            </li>

            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" to="#">
                |
              </a>
            </li> */}

            <li className="nav-item">
              {comerce ? (
                <NavLink className="nav-link active" to="/foroComer">
                  Foro de Negocios
                </NavLink>
              ) : (
                <NavLink className="nav-link disabled" to="/foroComer">
                  Foro de Negocios
                </NavLink>
              )}
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
            <div className="dropdown">
              <AccountCircleTwoToneIcon
                type="button"
                fontSize="large" 
                color="primary" 
                className="mx-5 dropdown-toggle"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              />
              {/* <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Botón Dropdown
              </button> */}
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Perfin</a></li>
                <li><a className="dropdown-item" href="#">Configuracion</a></li>
                <li><a className="dropdown-item" href="#">Sobre Nosotros</a></li>
              </ul>
            </div>

            </li>

            <li className="nav-item">
              <ExitToAppTwoToneIcon
                type="button"
                fontSize="large"
                color="error"
                onClick={() => authDispatch({ type: type.logout })}
              />
              {/* <button
                onClick={() => authDispatch({ type: type.logout })}
                className=" btn btn-sm btn-danger text-white"
              >
                Cerrar Sesión
              </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
