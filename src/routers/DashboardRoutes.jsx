import { HomeCliente } from "../pages/HomeCliente";
import { HomeComerciante } from "../pages/HomeComerciante";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const DashboardRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user.rol === "comerciante" ? <HomeComerciante /> : <HomeCliente />}
      {/* {(user.rol==='comerciante' && user.comercio) ? <CargarProducto /> : (user.rol==='comerciante' && !user.comercio)?<CargarComercio />:<HomeCliente />} */}
    </>
  );
};
