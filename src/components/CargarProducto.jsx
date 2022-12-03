import React, { useState, useEffect } from "react";
import "../assets/signin.css";
export const CargarProducto = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [state, setState] = useState({
    categoria: "",
    productName: "",
    marca: "",
    presentacion: "",
    precio: 0,
    idProducto: null,
  });

  const { categoria, productName, marca, presentacion, precio, idProducto } =
    state;

  // ************  FUNCIÓN QUE CAPTURA LOS VALORES DE LOS INPUTS ****************
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  //*****************************  FUNCIÓN PARA ENVIAR LOS DATOS (BOTON) ******** */

  const usuarioComercio = JSON.parse(localStorage.getItem("user"));
  console.log(usuarioComercio)
  const comercioId = usuarioComercio.comercio._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Agregando...');
    // return

    (async () => {
      // Se modifican las opciones del fetch, añadiendo los datos del formulario
      options.body = JSON.stringify({
        categoria,
        productName,
        marca,
        presentacion,
        precio,
        idComercio: comercioId,
      });

      if (categoria === "Seleccione una categoría") {
        console.error("Seleccione una categoria por favor");
        return;
      }

      const resp = await fetch("http://localhost:4000/producto", options);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();
      console.log(data);
      if (resp.ok) {
        showData();
        setState({
          categoria: "",
          productName: "",
          marca: "",
          presentacion: "",
          precio: 0,
        });
        setFormulario({
          formAdd: true,
        });
      }


    })();
  };

  // *******************  Renderizado de productos propios ***********************
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:4000/productos";

  //************************************/

  const showData = async () => {
    const response = await fetch(URL);

    const data = await response.json();
    // console.log(data);
    setProducts(data);
  };

  //Hook useEfect
  useEffect(() => {
    showData();
  }, []);

  // ***********************   filtrado   ****************************
  const usuario = JSON.parse(localStorage.getItem("user"));
  // console.log(usuario);
  const productosDelComercio = products.filter(
    (producto) => producto.idComercio._id === usuario.comercio._id
  );
  // ********************  Función para eliminar sus productos  ***************
  const eliminar = async (id) => {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `http://localhost:4000/productos/${id}`;
    const resp = await fetch(url, options);
    if (resp.ok) {
      showData();
    }
  };

  // *********************   FUNCIÓN EDITAR  ***********************************
  const [formulario, setFormulario] = useState({
    formAdd: true,
  });

  const formEditar = () => {
    setFormulario({
      formAdd: false,
    });
  };

  const formAgregar = () => {
    // setFormulario({
    //   formAdd: true,
    // });
    // setState({
    //   categoria: "",
    //   productName: "",
    //   marca: "",
    //   presentacion: "",
    //   precio: 0,
    // });
    console.log('Se ejecuta el formAgregar pero no hace nada')
  };

  const editar = async (producto) => {
    formEditar();
    setState({
      categoria: producto.categoria,
      productName: producto.productName,
      marca: producto.marca,
      presentacion: producto.presentacion,
      precio: producto.precio,
      idProducto: producto._id,
    });
  };

  const submitEditar = (e) => {
    e.preventDefault();
    console.log('Editando... HAY QUE PONER UN SPIN Y QUE EL USUARIO NO PUEDA HACER NADA MIENTRAS SE ESTÁ EDITANDO');
    // return

    (async () => {
      options.method = "PUT";
      options.body = JSON.stringify({
        categoria,
        productName,
        marca,
        presentacion,
        precio,
      });

      const id = idProducto;
      const urlPut = `http://localhost:4000/productos/${id}`;

      const resp = await fetch(urlPut, options);
      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise los datos y vuelva a intentarlo");

      const data = await resp.json();
      // console.log(data);
      if (resp.ok) {
        showData();
        setState({
          categoria: "",
          productName: "",
          marca: "",
          presentacion: "",
          precio: 0,
        });
        setFormulario({
          formAdd: true,
        });
      }

    })();
  };

  // console.log(state)
  // console.log(formulario)

  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col col-lg-3">
            <main className="form-signin w-100 m-auto">
              
              <form onSubmit={formulario.formAdd ? handleSubmit : submitEditar} className="form-control mt-5">

                {formulario.formAdd 
                ? (
                  <label htmlFor="nombProd" className="mb-1">
                    <strong>INGRESE LOS DATOS DE SUS PRODUCTOS</strong>
                  </label>
                  ) 
                : (
                  <label htmlFor="nombProd" className="mb-1">
                    <strong>MODIFIQUE LOS DATOS DE SU PRODUCTO</strong>
                  </label>
                  )
                }

                <div className="form-floating mb-2 mt-3">
                  <div className="form mb-2">
                    <select
                      className="form-select"
                      onChange={handleInputChange}
                      name="categoria"
                    >
                      <option>Seleccione una categoría</option>
                      <option value="comestibles">Comestibles</option>
                      <option value="bebidas">Bebidas</option>
                      <option value="limpieza">Limpieza</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="productName"
                      placeholder="Nombre"
                      value={productName}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="nombProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="marca"
                      placeholder="Marca"
                      value={marca}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="marcaProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>

                  <div className="form mb-2">
                    <input
                      type="text"
                      className="form-control"
                      name="presentacion"
                      placeholder="Presentación"
                      value={presentacion}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="presenProd">Ingrese</label> */}
                  </div>

                  <div className="form mb-4">
                    <label htmlFor="nombPrecio" className="mb-1">
                      Ingrese el precio
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="precio"
                      placeholder="Precio"
                      value={precio}
                      onChange={handleInputChange}
                    />
                    {/* <label htmlFor="precioProd">Ingrese el nombre producto que desea cargar</label> */}
                  </div>
                </div>
                {formulario.formAdd 
                  ? (
                  <button
                    className="w-100 btn btn-md btn-primary mb-2"
                    type="submit"
                  >
                    Agregar
                  </button>
                    ) 
                  : 
                    (
                    <>
                      <button
                        className="w-50 btn btn-sm btn-success m-auto"
                        type="submit"
                      >
                        Actualizar
                      </button>
                      <button
                        className="w-50 btn btn-sm btn-danger m-auto"
                        type="submit"
                        onClick={formAgregar}
                      >
                        Cancelar
                      </button>
                    </>
                    )}
                <hr />
                <div className="mt-3"></div>

                {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
                <p className="mt-2 mb-3 text-muted">© IPF - 2022</p>
              </form>
            </main>
          </div>

          <div className="col col-lg-9 mt-1">
            {/* ********************* DIV DE ABAJO ******************************* */}
            <div className="text-bg-info p-1 rounded-3">
              {/* <MisProductos /> */}
              <div className="container ">
                <div className="row">
                  <div className="col-lg-12 w-100 m-auto">
                    <h2 className="mt-1">PRODUCTOS</h2>
                    <table className="table table-striped table-hover mt-3 shadow-lg table-control rounded-3">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Marca</th>
                          <th>Presentación</th>
                          <th>Precio</th>
                          <th>Comercio</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* {if(prod.idComercio===_id){

            }} */}
                        {productosDelComercio.map((prod) => (
                          <tr key={prod._id}>
                            <td>{prod.productName}</td>
                            <td>{prod.marca}</td>
                            <td>{prod.presentacion}</td>
                            <td>${prod.precio}</td>
                            <td>{prod.idComercio.commerceName}</td>
                            <td>
                              {/* {console.log(prod)} */}
                              <div>
                                <button
                                  className="btn btn-success mx-1"
                                  onClick={() => editar(prod)}
                                >
                                  <span className="mx-1 my-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-pencil-square"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                      <path
                                        fillRule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                      />
                                    </svg>
                                  </span>
                                </button>
                              </div>

                              <div>
                                <button
                                  className="btn btn-danger mx-1"
                                  onClick={() => eliminar(prod._id)}
                                >
                                  <span className="mx-1 my-1">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="14"
                                      fill="currentColor"
                                      className="bi bi-trash3"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
