import React from 'react'

export const CartItems = ({data}) => {

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3>{data.productName}</h3>
          <h4>{data.marca}</h4>
          <h4>{data.precio}</h4>
          {/* <button type="button" className="btn btn-primary" onClick={()=>addToCart(data._id)}>Agregar al Carrito</button> */}
        </div>
      </div>
    </div>
  )
}
