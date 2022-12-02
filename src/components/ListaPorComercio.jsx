import React, { useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { TYPES } from "../types/typesCarrito";
import { CartItems } from "./cartItems";
import { ProductItems } from "./productItems";


export const ListaPorComercio = () => {
  const [products, setProducts] = useState([]);
  const showData = async () => {
    const resp = await fetch('http://localhost:4000/productos')
    const data = await resp.json()
    setProducts(data);
  }
  useEffect(() => {
    showData()
  }, []);

  // console.log(products);

  const initialState = {
    cart: [],
    totalPrice: 0
  }


  const [state, cartDispatch] = useReducer(cartReducer,initialState)
  const { cart } = state

  const addToCart = (id) => {
    // console.log(id);
    cartDispatch({
      type: TYPES.ADD_TO_CART,
      payload: {
        id,
        products
      }
    })
  }

  const clearCart = () => {
    cartDispatch({type: TYPES.CLEAR_CART})
  }

  const deleteAllFromCart = (id) => {

  }

  //********   PRODUCTOS AGRUPADOS POR COMERCIO   ************/
  const agrupadoPorComercio = {};

  products.forEach((producto) => {
    const comercio = producto.idComercio.commerceName;
    if (!agrupadoPorComercio[comercio]) {
      agrupadoPorComercio[comercio] = [];
    }
    agrupadoPorComercio[comercio].push(producto);
  });
  // console.log(agrupadoPorComercio)


  //************** LISTADO DE PRODUCTOS DEL CARRITO AGRUPADOS POR COMERCIOS *************/

  const listaPorComercios = (agrupado, carrito) => {
    let listadoDeProductosPorComercio = {};

    for (let comerce in agrupado) {
      let comercioIndex = comerce;
      if (!listadoDeProductosPorComercio[comercioIndex]) {
        listadoDeProductosPorComercio[comercioIndex] = [];
      }
      agrupado[comerce].map((productiño) => {
        carrito.map((item) => {
          // if (productiño.productName.toLowerCase().includes(item.productName.toLocaleLowerCase())) {
          //   listadoDeProductosPorComercio[comercioIndex].push(productiño);
          // }
          if (
            productiño.productName
              .toLowerCase()
              .includes(item.productName.toLocaleLowerCase()) &&
            productiño.marca
              .toLowerCase()
              .includes(item.marca.toLocaleLowerCase())
          ) {
            listadoDeProductosPorComercio[comercioIndex].push(productiño);
          }
        });
      });
    }
    return listadoDeProductosPorComercio;
  };

  console.log(listaPorComercios(agrupadoPorComercio, cart))

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-lg-8">
            <h2>Listado de productos</h2>
            <div className="container">
              <div className="row">
                {
                  products.map((producto)=> (<ProductItems key={producto._id} data={producto} addToCart={addToCart} />))
                }
              </div>
            </div>
          </div>

          <div className="col col-lg-4">
            <h2>Carrito de compras</h2>
            <article>
              <button type="button" className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>

                {
                  cart.map((product, i)=>(<CartItems key={i} data={product} />))
                }
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
