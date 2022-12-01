import React, { useEffect, useState } from "react";

export const Productos = () => {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:4000/productos";

    //************************************/


  const showData = async () => {

    const response = await fetch(URL);

    const data = await response.json();
    console.log(data);
    setProducts(data);
  };

  //Hook useEfect
  useEffect(() => {
    showData();
  }, []);

    // const ultimosDiez = products.slice(-10)
    // console.log(ultimosDiez)

  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <h1 className="mt-3">LISTADO DE PRODUCTOS DE TODOS LOS COMERCIOS</h1>
        <table className="table table-striped table-hover mt-5 shadow-lg table-control">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Presentación</th>
              <th>Precio</th>
              <th>Comercio</th>
            </tr>
          </thead>

          <tbody>
            {products.map((prod) => (
              <tr key={prod._id}>
                <td>{prod.productName}</td>
                <td>{prod.marca}</td>
                <td>{prod.presentacion}</td>
                <td>${prod.precio}</td>
                <td>{prod.idComercio.commerceName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
    </>
  );
};
