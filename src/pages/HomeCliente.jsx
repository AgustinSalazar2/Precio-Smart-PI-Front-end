import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavBarCliente } from '../ui/NavBarCliente'

export const HomeCliente = () => {
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
  console.log('Este es el results', results);
  //Hook useEfect
  useEffect(()=>{
    showData()
  },[])
  
  //Renderizado
  return (
    <>
      <NavBarCliente />

      <div>
        <input
        value={search}
        onChange={buscador}
        type="text"
        placeholder='search' 
        className='form-control' />
        <table className='table table-striped table-hover mt-5 shadow-lg'>
          <thead>
            {
              (search)
              ? 
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                </tr>
              
              : <div></div>
            }
          </thead>

          <tbody>
            {
              results.map((product)=>(
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.precio}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  )
}
