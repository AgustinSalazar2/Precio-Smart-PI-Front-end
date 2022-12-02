import React from 'react'

export const CartItems = ({data, delFromData}) => {
  let { id, productName, marca, precio, cantidad } = data
  return (
    <div className='mb-3'>
      <div className="card">
        <div className="card-body">
          <h3>{productName}</h3>
          <h4>{marca}</h4>
          
          <h4>${precio} x {cantidad} = $ { precio * cantidad }</h4>

          <button type="button" className="btn btn-sm btn-primary mx-2" >
            Eliminar Uno
          </button>
          <button type="button" className="btn btn-sm btn-danger mx-2">
            Eliminar Todos
          </button>
        </div>
      </div>
    </div>
  )
}
