import React, { useEffect, useState } from 'react'

export const BuscarProductos = () => {
     //hook de usestate
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  const cuandoEscribeelUsuario = ({target}) => {
    const palbraClave = target.value


  }

  //funcion para extraer los datos de la API
  const URL = "http://localhost:4000/productos";

  const showData = async ()=>{
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setProducts(data)
  }
  
  //Funcion de busqueda
  const buscador = (e) => {
    setSearch(e.target.value);
  }
  
  // //Metodo de filtrado comun:
  // let results = [];
  // if (!search) {
  //   results = users;
  // } else {
  //   results = users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  // }

  //Filtrado mas resumido
  const results = !search ? [] : products.filter((dato)=> dato.productName.toLowerCase().includes(search.toLocaleLowerCase()))

  
  //Hook useEfect
  useEffect(()=>{
    showData()
  },[])
  
  //Renderizado
  return (
    <>
      <div className='container justify-content-center col-lg-8 mt-5'>
        <div className='container col-lg-6 justify-content-center'>
          <input
          value={search}
          onChange={buscador}
          type="text"
          placeholder='search' 
          className='form-control mt-3' />
        </div>
        <table className='table table-striped table-hover mt-5 shadow-lg table-control'>
          <thead>
            {
              (search)
              ? 
                <tr>
                  <th>Nombre</th>
                  <th>Marca</th>
                  <th>Presentación</th>
                  <th>Precio</th>
                </tr>
              
              : <tr></tr>
            }
          </thead>

          <tbody>
            
            {
              results.map((prod)=>(
                <tr key={prod._id}>
                  <td>{prod.productName}</td>
                  <td>{prod.marca}</td>
                  <td>{prod.presentacion}</td>
                  <td>${prod.precio}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  )
}
