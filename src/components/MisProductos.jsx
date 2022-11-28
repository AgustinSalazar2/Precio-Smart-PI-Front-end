import React, { useEffect, useState } from "react";

export const MisProductos = () => {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:4000/productos";

    //************************************/
/*     axios.get('https://breakingbadapi.com/api/episodes')
.then(resp =>{
  const limit = 6;

    this.setState({
        // el cero representa desde donde quieres cortar el array.
        // y la constante limit (int) sera el maximo dato a cortar
        episodes: resp.data.slice(0, limit)
    })
}) */


    //************************************** */


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

    const ultimosDiez = products.slice(-10)
    // console.log(ultimosDiez)

  return (
    <>
      <div>
        <table className="table table-striped table-hover mt-5 shadow-lg table-control">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Presentación</th>
              <th>Precio</th>
            </tr>
          </thead>

          <tbody>
            {ultimosDiez.map((prod) => (
              <tr key={prod._id}>
                <td>{prod.productName}</td>
                <td>{prod.marca}</td>
                <td>{prod.presentacion}</td>
                <td>${prod.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
