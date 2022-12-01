import React, { useContext, useReducer } from 'react'
import { CartContext } from '../context/CartContext'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'

export const Carrito = () => {

  const dataCart = useContext(CartContext)
  const [state, cartDispatch] = useReducer( cartReducer, cartInitialState )

  const [ cart ] = state

  return (
    <div>
      <h2> Carrito de Compras </h2>
      <h3> Productos </h3>
      <article>Lugar para los productos</article>
      <h3>Carrito</h3>
      <article>Lugar para los productos del carrito</article>
    </div>
  )
}
