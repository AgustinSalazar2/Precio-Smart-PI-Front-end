import React, { useContext } from 'react'
import '../assets/signin.css'
import img from '../assets/img/verificar.png'
import { AuthContext } from '../context/AuthContext'
import { type  } from "../types/type";


// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {

  const { authDispatch } = useContext(AuthContext);

  return (
      <div className='container p-5'>
      <div className='row p-4'>
        <div className='col-lg-5 p-5 mt-5'>
          <h1 className='mt-5'><strong>PrecioSmart</strong></h1>
          <img className="mb-4" src={img} alt="" width={80} height={75} />
        </div>
        <div className='col-lg-7'>
          <main className="form-signin w-100 m-auto">
            <form className='form-control'>
              {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
              {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}
              <div className="form-floating mb-2 mt-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
                <label htmlFor="floatingInput">Nombre de Usuario</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
              </div>
              <button onClick={()=>authDispatch({type: type.login})} className="w-100 btn btn-lg btn-primary mb-3" type="submit">Iniciar Sesión</button>
              <hr />
              <div className='mt-4'>
                <button type="button" className="w-90 btn btn-md btn-success mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel"><strong>Registrarse</strong></h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                
                <div className='container'>
                  <main className="form-signin w-100 m-auto">
                    <form className=''>

                      <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
                        <label htmlFor="floatingInput">Nombre de Usuario</label>
                      </div>
                      
                      <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                      </div>

                      <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirmar contraseña</label>
                      </div>

                      <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingEmail" placeholder="Example@email.com" />
                        <label htmlFor="floatingInput">Email</label>
                      </div>

                      <div>
                        <p><small>Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.</small></p>
                      </div>

                      <button onClick={()=>authDispatch({type: type.login})} className="w-100 btn btn-md btn-success" data-bs-dismiss="modal" type="submit">Registrarse</button>
                    </form>
                  </main>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
