import React, { useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import CalculateTwoToneIcon from '@mui/icons-material/CalculateTwoTone';
import PriceChangeTwoToneIcon from '@mui/icons-material/PriceChangeTwoTone';
import { TYPES } from "../types/typesCarrito";
import { CarritoPorComercio } from "./CarritoPorComercio";
import { CartItems } from "./cartItems";
import { ProductItems } from "./productItems";

export const ListaPorComercio = () => {
  const [listado, setListado] = useState({ typo: false });

  const [products, setProducts] = useState([]);
  const showData = async () => {
    const resp = await fetch("http://localhost:4000/productos");
    const data = await resp.json();
    setProducts(data);
  };
  useEffect(() => {
    showData();
  }, []);

  const initialState = {
    cart: [],
    totalPrice: 0,
  };

  const [state, cartDispatch] = useReducer(cartReducer, initialState);
  const { cart } = state;

  const addToCart = (id) => {
    // console.log(id);
    cartDispatch({
      type: TYPES.ADD_TO_CART,
      payload: {
        id,
        products,
      },
    });
  };

  const clearCart = (e) => {
    e.preventDefault();
    cartDispatch({ type: TYPES.CLEAR_CART });
    setListado({ typo: false });
    return;
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      cartDispatch({type: TYPES.DELETE_ALL_FROM_CART, payload: {
        id,
        products
      }})
    } else {
      cartDispatch({type: TYPES.DELETE_ONE_FROM_CART, payload: {
        id,
        products
      }})
    }
  }
  // console.log(products);

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
  //   Object.entries(agrupadoPorComercio).forEach((key, value) => {
  //     console.log(key);
  // });

  let listadoDeProductosPorComercio = {};

  const listaPorComercios = (agrupado, carrito, listadoDeProductosComercio) => {
    for (let comerce in agrupado) {
      let comercioIndex = comerce;
      if (!listadoDeProductosComercio[comercioIndex]) {
        listadoDeProductosComercio[comercioIndex] = [];
      }
      agrupado[comerce].map((productiño) => {
        carrito.map((item) => {
          if (
            productiño.productName
              .toLowerCase()
              .includes(item.productName.toLocaleLowerCase()) &&
            productiño.marca
              .toLowerCase()
              .includes(item.marca.toLocaleLowerCase())
          ) {
            // const yaExisteProducto = listadoDeProductosComercio.find((item)=>item._id===productiño._id)
            // yaExisteProducto ? {...item, cantidad: item.cantidad + 1}
            listadoDeProductosComercio[comercioIndex].push({...productiño, cantidad: item.cantidad});
          }
        });
      });
    }
    return listadoDeProductosComercio;
  };

  const onclickListado = (e) => {
    e.preventDefault();
    if (cart.length > 0) {
      const nuevoEstado = listaPorComercios(
        agrupadoPorComercio,
        cart,
        listadoDeProductosPorComercio
      );
      setListado(nuevoEstado);
      return;
    }
    return;
  };
  // console.log(listaPorComercios(agrupadoPorComercio, cart, listadoDeProductosPorComercio))
  // console.log(listado);
  // console.log(cart.length);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          {listado.typo == false 
            ? (
                <div className="col col-xl-6 col-lg-8">
                  <h4><b>Listado de productos</b></h4>
                  <div className="container">

                    <div className="row col-lg-12">
                      <table className="table table-striped table-hover shadow-lg table-control rounded">
                        <thead>
                          <tr>
                            <th><small>Nombre</small></th>
                            <th><small>Marca</small></th>
                            <th><small>Presentación</small></th>
                            <th><small>Accion</small></th>
                          </tr>
                        </thead>

                        <tbody>
                          {products.map((producto, i) => (
                            <ProductItems
                              key={i}
                              data={producto}
                              addToCart={addToCart}
                            />
                          ))}
                        </tbody>
                      </table>
                      {/* {products.map((producto) => (
                        <ProductItems
                          key={producto._id}
                          data={producto}
                          addToCart={addToCart}
                        />
                      ))} */}
                    </div>

                  </div>
                </div>
              ) 
            : (
                <div className="col col-xl-3 col-lg-7">
                  <div className="container">
                    <div className="row">
                      <CarritoPorComercio data={listado} />
                    </div>
                  </div>
                </div>
              )
          }

          <div className="col col-xl-6 col-lg-4">
            <article className="container">
              <div className="row mb-2 mt-3">
                <h4><b>Carrito de compras</b></h4>
                <div className="col mb-2">
                <RemoveShoppingCartTwoToneIcon type="button" fontSize="large" onClick={clearCart}/>

                  {/* <button
                    type="button"
                    className="btn btn-danger"
                    onClick={clearCart}
                  >
                    <small>Limpiar carrito</small>
                  </button> */}
                </div>

                <div className="col mb-2" onClick={onclickListado} type="button">
                <CalculateTwoToneIcon fontSize="large" />
                <PriceChangeTwoToneIcon fontSize="large" />
                <br />Compare
                  {/* <button className="btn btn-success" onClick={onclickListado}>
                    <small>Costo del carrito</small>
                  </button> */}
                </div>
              </div>

              <div className="col col-xl-6 col-lg-4">
                <div className="container">
                  <div className="row">
                    
                  </div>
                  <table hidden={(cart.length == 0) ? true : false} className="table table-striped table-hover shadow-lg table-control rounded">
                    <thead>
                      <tr>
                        <th><small>Nombre</small></th>
                        <th><small>Marca</small></th>
                        <th><small>Presentación</small></th>
                        <th><small>Cantidad</small></th>
                        <th colSpan={2}><small>Accion</small></th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.map((product, i) => (
                        <CartItems key={i} data={product} deleteFromCart={deleteFromCart} />
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};
