import React, { useContext, useState } from "react";
import "../assets/signin.css";
import img from "../assets/img/verificar.png";
import { AuthContext } from "../context/AuthContext";
import { type } from "../types/type";
import { Navigate } from "react-router-dom";

// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  const { authDispatch } = useContext(AuthContext);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    rol: ""
  });
  

  

  // Se desestructuran los valores del state para vincularlos al value de los input
  const { username, password, email, rol } = state;

  // Se capturan los datos ingresados en los inputs
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  // Se envían al back-end los datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      options.body = JSON.stringify({ username, password });

      const resp = await fetch("http://localhost:4000/login", options);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();
      console.log(data);

      if (data.token) {
        const user = {
          token: data.token,
          username: data.user.username,
          email: data.user.email,
          isLogged: true,
          rol: data.user.rol,
          active: data.user.active,
          comercio: data.comerce,
        };
        authDispatch({ type: "AUTH_LOGIN", payload: user });
        localStorage.setItem("user", JSON.stringify(user));
      }
    })();
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    //******Validaciones */
    
    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      options.body = JSON.stringify({ username, password, email, rol });

      const resp = await fetch("http://localhost:4000/user", options);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Datos incorrectos");

      const data = await resp.json();
      console.log(data);

      //*Una vez creado el usuario, se realiza el inicio de sesión.
      handleSubmit(e)
      
    })();
  };

  return (
    <div className="container p-3 mb-5">
      <div className="row p-5">
        <div className="col-lg-5">
          <h1 className="mt-5">
            <strong>PrecioSmart</strong>
          </h1>
          <img className="mb-4" src={img} alt="" width={80} height={75} />
        </div>
        <div className="col-lg-7">
          <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit} className="form-control">
              {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
              {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}
              <div className="form-floating mb-2 mt-3">
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="form-control"
                  placeholder="Username"
                  onChange={handleInputChange}
                  value={username}
                  autoFocus={true}
                />
                <label htmlFor="floatingInput">Nombre de Usuario</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  className="form-control"
                  onChange={handleInputChange}
                  value={password}
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember
                  me
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary mb-3"
                type="submit"
              >
                Iniciar Sesión
              </button>

              <hr />

              <div className="mt-4">
                <button
                  type="button"
                  className="w-90 btn btn-md btn-success mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {/* <NavLink className="nav-link active" aria-current="page" to='/register'>Registrarse</NavLink> */}
                  Registrarse
                </button>
              </div>
              {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
              <p className="mt-2 mb-3 text-muted">© 2017–2022</p>
            </form>
          </main>
        </div>
      </div>

      <div>
        {/* Modal Registro*/}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  <strong>Registrarse</strong>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="container">
                  <main className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmitRegister}>
                      <div className="form-floating mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Username"
                          onChange={handleInputChange}
                          name="username"
                          value={username}
                        />
                        <label htmlFor="floatingInput">Nombre de Usuario:</label>
                      </div>

                      <div className="form-floating mb-2">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          onChange={handleInputChange}
                          name='password'
                          value={password}
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                      </div>

                      <div className="form-floating mb-2">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword2"
                          placeholder="Confirm Password"
                        />
                        <label htmlFor="floatingPassword">
                          Confirmar contraseña
                        </label>
                      </div>

                      <div className="form-floating mb-2">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingEmail"
                          placeholder="Example@email.com"
                          onChange={handleInputChange}
                          name="email"
                          value={email}
                        />
                        <label htmlFor="floatingInput">Email</label>
                      </div>

                      <div className="form mt-3">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          // onSelect={handleInputChange}
                          onChange={handleInputChange}
                          name='rol'
                        >
                          <option value="cliente">Cliente</option>
                          <option value="comerciante">Comerciante</option>
                        </select>
                      </div>

                      <div>
                        <p>
                          <small>
                            Al hacer clic en "Registrarte", aceptas nuestras
                            Condiciones, la Política de privacidad y la Política
                            de cookies.
                          </small>
                        </p>
                      </div>

                      <button
                        className="w-100 btn btn-md btn-success"
                        data-bs-dismiss="modal"
                        type="submit"
                      >
                        Registrarse
                      </button>
                    </form>
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
