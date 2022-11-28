import React from "react";

import "../assets/signin.css";
import img from "../assets/img/verificar.png";

export const CargarProducto = () => {
  //const { authDispatch } = useContext(AuthContext);

  return (
    <>
      <div className="container p-4">
        <div className="row p-4">
          <div className="col-lg-4">
            <main className="form-signin w-100 m-auto">
              <form className="form-control">
                {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
                {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}
                <label htmlFor="nombProd">
                  <strong>INGRESE LOS DATOS DE SUS PRODUCTOS</strong>
                </label>
                <div className="form-floating mb-2 mt-3">
                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="nombProd"
                      placeholder="Nombre"
                    />
                    {/* <label htmlFor="nombProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="marcaProd"
                      placeholder="Marca"
                    />
                    {/* <label htmlFor="marcaProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      id="presenProd"
                      placeholder="Presentación"
                    />
                    {/* <label htmlFor="presenProd">Ingrese</label> */}
                  </div>

                  <div className="form mb-4">
                    <input
                      type="number"
                      className="form-control"
                      id="precioProd"
                      placeholder="Precio"
                    />
                    {/* <label htmlFor="precioProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>
                </div>

                <button
                  className="w-50 btn btn-md btn-primary mb-2"
                  type="submit"
                >
                  Agregar a la lista
                </button>
                <hr />
                <div className="mt-4">
                  {/* <button type="button" className="w-90 btn btn-md btn-success mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Registrarse
                </button> */}
                  
                </div>

                {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
                <p className="mt-2 mb-3 text-muted">© IPF - 2022</p>
              </form>
            </main>
          </div>

          <div className="col-lg-8 p-5 mt-5">
            <h1 className="mt-5">
              <strong>PrecioSmart Bienvenido estimado COMERCIANTE</strong>
            </h1>
            <img className="mb-4" src={img} alt="" width={80} height={75} />
          </div>
        </div>
      </div>
    </>
  );
};
