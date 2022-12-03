import React from 'react'
import "../assets/foroNego.css"

export const ForoNego = () => {
  return (
    <form>
        <div>
            <div >
                <div className='a'>
                    <h1>BIENVENIDOS AL FORO DE NEGOCIOS</h1>
                </div>

                <div className='forodesc'>
                    <p>
                    Aquí los comerciantes registrados podrán enviar propuestas de compra - venta, ofertas mayoristas, ofrecer servicios, fletes compartidos y todo lo pertinente para abaratar costos de forma asociativa con otros colegas comerciantes, transportistas, productores, intermediarios, entre otros.
                    </p>
                </div>

{ /******************   Formulario de carga *************0042855752 */}

<div className="col-lg-4">
            <main className="form-signin w-100 mt-5">
              <form onSubmit="" className="form-control mt-5 mb">
                {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
                {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}
                <label htmlFor="formForo"className="mt-3 mb-0">
                  <strong >FORMULARIO PARA EL FORO</strong>
                </label>
                <div className="form-floating mb-5 mt-5">
                  <div className="form mb-2">
                    <input 
                      type="text"
                      className="form-control"
                      name="commerceNameForo"
                      placeholder="Ingrese el nombre de su Comercio"
                    //   value={commerceName}
                    //   onChange={handleInputChange}
                    />
                    {/* <label htmlFor="nombProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="Teléfono para que lo contacten"
                    //   value={phone}
                    //   onChange={handleInputChange}
                    />
                  </div>

                  <div className="form m-auto">
                    <textarea
                      type="text"
                      className="form-control"
                      name="propuesta"
                      placeholder="Comente brevemente su propuesta para los colegas"
                    //   value={phone}
                    //   onChange={handleInputChange}
                    />
                  </div>

                </div>

                <button
                  className="w-50 btn btn-md btn-primary mb-2"
                  type="submit"
                >
                  Agregar su propuesta al Foro
                </button>
                <hr />
                <div className="mt-4"></div>

                {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
                <p className="mt-2 mb-3 text-muted">© IPF - 2022</p>
              </form>
            </main>
          </div>
                {/* <div className="container">
                    <div class="col-col-9 align-items-flex">
                        <div class="col-6">
                            <input type="text" className="form-control" placeholder="Coloca el nombre de tu comercio" aria-label="First name"/>

                            <button
                        className="w-10 btn btn-sm btn-primary"
                        type="submit">
                        Enviar 
                      </button>
                        </div>

                        <div class="col-8">
                            <input type="text" className="form-control" placeholder="Escriba su propuesta..." aria-label="Last name"/>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    </form>

  )
}

