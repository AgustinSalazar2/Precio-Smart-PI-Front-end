import React, { useEffect, useState } from 'react'

export const CompraPorComercio = () => {
     //hook de usestate
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para extraer los datos de la API
  const URL = "http://localhost:4000/productos";

  const showData = async ()=>{
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setProducts(data)
  }

  const filtredData = async (e)=> {
    // console.log(e.target.value);
    const categoria = e.target.value
    console.log(categoria)

    if (categoria==="Categoría") {
      console.error("Seleccione una categoria plis")
      return
    }
    
    const URL = `http://localhost:4000/products/${categoria}`
    const resp =  await fetch(URL);
    const dataCategoria = await resp.json();
    console.log(dataCategoria);
    setProducts(dataCategoria)
  }
  
  //Funcion de busqueda
  const buscador = (e) => {
    setSearch(e.target.value);

  }

  //Filtrado mas resumido
  const results = !search ? [] : products.filter((dato)=> dato.productName.toLowerCase().includes(search.toLocaleLowerCase()))

  
  //Hook useEfect
  useEffect(()=>{
    showData()
  },[])
  
  //Renderizado
  return (

    <>
      <div className="container justify-content-center col-lg-8 mt-5">

        <div className="container">
          <div className="row">

            <div className="col-lg-3 justify-content-center ">
              <div className="mb-3">
                {/* <label htmlFor="" class="form-label">
                  Zona
                </label> */}
                <select className="form-select" name="" id="">

                  <option defaultValue value='zona_1'>Zona 1</option>
                  <option value='zona_2'>Zona 2</option>
                  <option value='zona_3'>Zona 3</option>
                  <option value='zona_4'>Zona 4</option>
                  <option value='zona_5'>Zona 5</option>
                  <option value='zona_6'>Zona 6</option>
                  <option value='zona_7'>Zona 7</option>
                  <option value='zona_8'>Zona 8</option>
                  <option value='zona_9'>Zona 9</option>
                </select>
              </div>
            </div>

            <div className="container col-lg-3 justify-content-center ">
              <div className="mb-3">
                {/* <label htmlFor="" class="form-label">
                  Zona
                </label> */}
                <select className="form-select form-select" onChange={filtredData}>

                  {/* <option defaultValue>Categoría</option> */}
                  <option defaultValue value="">Categoría</option>
                  <option value="comestibles">Comestibles</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="limpieza">Limpieza</option>
                  <option value="otros">Otros</option>

                </select>
              </div>
            </div>

            <div className="col-lg-6">
              <input
                value={search}
                onChange={buscador}
                type="text"
                placeholder="search"
                className="form-control mb-3"
                autoFocus={true}
              />

            </div>


          </div>
        </div>

        <table className="table table-striped table-hover mt-5 shadow-lg table-control">
          <thead>
            {search ? (
              <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Presentación</th>
                <th>Precio</th>
                <th>Comercio</th>
              </tr>
            ) : (
              <tr></tr>
            )}
          </thead>

          <tbody>
            {results.map((prod) => (
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
    </>
    
  )
}
