import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CargarComercio } from "../components/CargarComercio";
import { CargarProducto } from "../components/CargarProducto";
import { Productos } from "../components/Productos";
import { ForoNego } from "../components/ForoNego";
import { NavBar } from "../ui/NavBar";
import { Footer } from "../ui/Footer";
import { BuscarProductos } from "../components/BuscarProductos";

export const HomeComerciante = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const redirigir = () => {
    user.rol === "comerciante" && user.comercio
      ? navigate("/add-prod")
      : (user.rol === "comerciante" && !user.comercio) && navigate("/*");
  };

  useEffect(() => {
    redirigir();
  }, [user.comercio]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<CargarComercio />} />
        <Route path="/productos" element={<BuscarProductos />} />
        <Route path="/add-prod" element={<CargarProducto />} />
        <Route path="/foroComer" element={<ForoNego />} />
      </Routes>
    </>
  );
};
