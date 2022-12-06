import React, { useEffect, useState } from "react";
import "../assets/foroNego.css";
// ===============================================================================
//container ocupa el 90% de la pantalla, fluid el 100.
//row: agrupa en columnas, y en el otro div hay q darle el tamaño de los items

export const ForoNego = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const comerce = user.comercio;

  const initPost = {
    commerceName: comerce.commerceName,
    telefono: "",
    mensaje:"",
    idComercio: comerce._id
  }

  const [mensajes, setMensajes] = useState([]);
  const [post, setPost] = useState(initPost);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": user.token //!Al pedo dice agustín
    },
  };

  const { commerceName, telefono, mensaje, idComercio } = post;

  // ************  FUNCIÓN QUE CAPTURA LOS VALORES DE LOS INPUTS ****************
  const handleInputChange = ({ target }) => {
    setPost({
      ...post,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      options.body = JSON.stringify({
        commerceName,
        telefono,
        mensaje,
        idComercio
      });

      const resp = await fetch("http://localhost:4000/foro", options);
      
      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();
      console.log(data.foroMensaje)
      setMensajes(prev => [ data.foroMensaje, ...prev])
      setPost(initPost)
        // console.log(data);
      
    })();
  };

    // ********************  FUNCIÓN PARA ELIMINAR FORO  ***************
  
    const eliminarForo = async (id) => {

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = `http://localhost:4000/foro/${id}`;
      const resp = await fetch(url, options);
      if (resp.ok) {
        showMensajes();
      }
    };

  const URL = "http://localhost:4000/foro";
  // **************   Función para MOSTRAR EL FORO   ****************
  const showMensajes = async ()=>{
    const mensajesForo = await fetch(URL);
    const datos = await mensajesForo.json();
    console.log("CLG-front los datos:", datos);
    setMensajes(datos)
  };
  useEffect(()=>{
    showMensajes()
  },[])

  
  // console.log(comerce)
// %%%%%%%%%%%%%%%%%%%%%%%%%%      RETURN        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="bg-warning rounded mt-2">
          <h1>BIENVENIDOS AL FORO DE NEGOCIOS</h1>
        </div>

        <div className="foroDescri text-start">
          <p className="bg-info rounded p-1 text-wrap mt-2">
            Aquí los comerciantes registrados podrán enviar propuestas de compra
            - venta, ofertas mayoristas, ofrecer servicios, fletes compartidos y
            todo lo pertinente para abaratar costos de forma asociativa con
            otros colegas comerciantes, transportistas, productores,
            intermediarios, entre otros.
          </p>
        </div>

        {/******************   Formulario de carga *************0042855752 */}
        <div className="col-lg-4">
          <main className="form-signin w-100 mt-1">
            <form onSubmit={handleSubmit} className="form-control mt-1">
              <label htmlFor="formForo" className="mt-1 mb-0">
                <strong>FORMULARIO PARA EL FORO</strong>
              </label>
              <div className="form-floating mb-5 mt-5">
                <div className="form mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="telefono"
                    placeholder="Teléfono para que lo contacten"
                    value={post?.telefono || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mb-1">
                  <textarea
                    type="text"
                    className="form-control"
                    name="mensaje"
                    placeholder="Comente brevemente su propuesta para los colegas"
                    value={post?.mensaje || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button
                className="w-50 btn btn-md btn-primary mt-1 mb-1"
                type="submit"
              >
                Agregar su propuesta al Foro
              </button>
              <hr />
              <div className="mt-1"></div>

              {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
              <p className="mt-1 mb-1 text-muted">© IPF - 2022</p>
            </form>
          </main>
        </div>
        {/* --------  RENDERIZADO DE LOS MENSAJES DEL FORO  ------------------------ */}

        <div className="col-lg-8 mt-3 text-black text-start">
          <div className="bg-light border-4 border border-info rounded">
            <h5 className="mx-4 my-3">Supermercados APA: Hola, el 20 de diciembre realicé un pedido de 700cajas de arroz itajai de 1kg directo de la fábrica, queda una vacante para 1400 cajas más, para los que quieran sumarse para abaratar el costo del Flete y de los precios del arroz. Teléfono de contactos: 123456</h5>
          </div>
          <br></br>
            {
              mensajes &&
              mensajes.map((mens, i)=>(
              <div key={i}>
                <div className="bg-light border-3 border border-info rounded mb-2">
                  <div className="bg-light border-3 border border-info rounded">
                    <p><strong>Comercio: </strong>{mens.commerceName}</p>
                    <p><strong>{mens.mensaje}</strong></p>
                    <p></p>
                    <h5>Teléfono de contacto: {mens.telefono}</h5>
                    <div className="d-flex flex-row-reverse mx-2">
                      {
                        (mens.commerceName === commerceName )
                        ? (<button
                              className="btn btn-sm btn-danger mb-2"
                              type="submit"
                              onClick={() => eliminarForo(mens._id)}
                            > 
                              Eliminar mensaje
                            </button>)
                        : 
                        <div></div>
                      }
                     

                    </div>
                  </div>
                </div>

              
              </div>



            ))
            }
          
        </div>
        </div>
      </div>
    </div>          
  );
};
