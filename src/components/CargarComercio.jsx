import React, { useState } from "react";

import "../assets/signin.css";
import img from "../assets/img/verificar.png";
import { Bienvenida } from "./Bienvenida";

export const CargarComercio = () => {

  const user = JSON.parse(localStorage.getItem('user')) 

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": user.token
    },
  };

  const [state, setState] = useState({
    commerceName: "",
    direccion: "",
    phone: ""
  });

  const { commerceName, direccion, phone } = state;

  // ************  FUNCIÓN QUE CAPTURA LOS VALORES DE LOS INPUTS ****************
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  //*****************************  FUNCIÓN PARA ENVIAR LOS DATOS (BOTON) ******** */

  const handleSubmit = (e) => {
    e.preventDefault();

    
    

    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      options.body = JSON.stringify({
        commerceName,
        direccion,
        phone
      });

      const resp = await fetch("http://localhost:4000/comercio", options);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();
        // console.log(data);
      if (data) {
        //Se trae del localstorage los datos del usuario y se guarda en la constante usuario
        const usuario = JSON.parse(localStorage.getItem('user'))
        
        //Se instancia un nuevo objeto con los datos del usuario y se agrega los datos del comercio
        const user = {
          token: usuario.token,
          username: usuario.username,
          email: usuario.email,
          isLogged: true,
          rol: usuario.rol,
          comercio: data.comerce,
        };

        //Se setean los datos del usuario en el local storage
        localStorage.setItem("user", JSON.stringify(user));

        useEffect(() => {
    
          return () => {
            
          }
        }, [])

      }
      setState({
        commerceName: "",
        direccion: "",
        phone: ""
      })
    })();
  };


  return (
    <>
      <div className="container p-4">
        <div className="row p-4">
          <div className="col-lg-4">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleSubmit} className="form-control mt-5">
                {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
                {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}
                <label htmlFor="nombProd">
                  <strong>INGRESE LOS DATOS DE SU COMERCIO PARA PODER CARGAR SUS PRODUCTOS</strong>
                </label>
                <div className="form-floating mb-2 mt-5">
                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="commerceName"
                      placeholder="Nombre"
                      value={commerceName}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="nombProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="direccion"
                      placeholder="Dirección"
                      value={direccion}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="marcaProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Teléfono"
                      value={phone}
                      onChange={handleInputChange}
                    />
                  </div>

                </div>

                <button
                  className="w-50 btn btn-md btn-primary mb-2"
                  type="submit"
                >
                  Agregar comercio
                </button>
                <hr />
                <div className="mt-4"></div>

                {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
                <p className="mt-2 mb-3 text-muted">© IPF - 2022</p>
              </form>
            </main>
          </div>

          <Bienvenida/>

        </div>
      </div>
    </>
  );
};

