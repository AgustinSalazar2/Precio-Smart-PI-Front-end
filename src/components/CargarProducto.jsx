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
  });

  const { categoria, productName, marca, presentacion, precio } = state;

  // ************  FUNCIÓN QUE CAPTURA LOS VALORES DE LOS INPUTS ****************
  const handleInputChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  //*****************************  FUNCIÓN PARA ENVIAR LOS DATOS (BOTON) ******** */

  const usuarioComercio = JSON.parse(localStorage.getItem("user"));
  const comercioId = usuarioComercio.comercio._id;

  const handleSubmit = (e) => {
    e.preventDefault();

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
        console.error("Seleccione una categoria plis");
        return;
      }

      const resp = await fetch("http://localhost:4000/producto", options);

      // Si el ok es false, significa que se produjo un error en la petición
      if (!resp.ok) alert("Revise las credenciales y vuelva a intentarlo");

      const data = await resp.json();
      console.log(data);
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
  };

  // *********************   FUNCIÓN EDITAR  ***********************************
  // const editar = async (id) => {

  //   const selectProduct = products.filter(product => product._id === id )
  //   console.log(selectProduct)
  //   setState({
  //     categoria: selectProduct.categoria,
  //     productName: selectProduct.productName,
  //     marca: selectProduct.marca,
  //     presentacion: selectProduct.presentacion,
  //     precio: selectProduct.precio,
  //   })
  //   const options = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  // };

    

    /* 
             <td>{prod.productName}</td>
                    <td>{prod.marca}</td>
                    <td>{prod.presentacion}</td>
                    <td>${prod.precio}</td>
                    <td>{prod.idComercio.commerceName}</td>
    */

    // const url = `http://localhost:4000/producto/${id}`;
    // const resp = await fetch(url);
    // const data = resp.json();
    // console.log(data)

    // options.body = {
    //     categoria: prod.categoria.value,
    //     productName: prod.productName,
    //     marca: prod.marca,
    //     presentacion: prod.presentacion,
    //     precio: prod.precio,
    //     idComercio:prod.idComercio
    // }
    
    // console.log(data);
  

  return (
    <>
      <div className="container p-4">
        <div className="row p-4">
          <div className="col-lg-4">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleSubmit} className="form-control mt-5">
                {/* <img className="mb-4" src="" alt="" width={72} height={57} /> */}
                {/* <h1 className="h3 mb-3 fw-normal">Inicio de Sesión</h1> */}

                <label htmlFor="nombProd" className="mb-1">
                  <strong>INGRESE LOS DATOS DE SUS PRODUCTOS</strong>
                </label>

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

                <button
                  className="w-50 btn btn-md btn-primary mb-2"
                  type="submit"
                >
                  Agregar a la lista
                </button>
                <hr />
                <div className="mt-4"></div>

                {/* <NavLink className="nav-link active" aria-current="page" to='/todos'>Home</NavLink> */}
                <p className="mt-2 mb-3 text-muted">© IPF - 2022</p>
              </form>
            </main>
          </div>

          <div className="col-lg-8 p-1 mt-1">
            <div>
              <h2 className="mt-5">
                <strong>
                  PRECIO SMART
                  <br />
                </strong>
              </h2>
              <h3>
                <strong>Bienvenido estimado COMERCIANTE</strong>{" "}
              </h3>
              {/* <img className="mb-4" src={img} alt="" width={80} height={75} /> */}
            </div>

            {/* ********************* DIV DE ABAJO ******************************* */}
            <div className="text-bg-info p-3 rounded-3">
              {/* <MisProductos /> */}
              <div className="container ">
                <div className="row">
                  <div className="col-lg-12 ">
                    <h1 className="mt-1">PRODUCTOS</h1>
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
                              <button className="btn btn-success mx-1" onClick={() => editar(prod._id)}>
                                Editar
                              </button>
                              <button className="btn btn-danger mx-1" onClick={() => eliminar(prod._id)}>
                                Eliminar
                              </button>
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
