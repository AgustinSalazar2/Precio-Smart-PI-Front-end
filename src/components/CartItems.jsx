import React from "react";

export const CartItems = ({ data, deleteFromCart }) => {
  return (
    <tr key={data._id}>
      <td><small>{data.productName}</small></td>
      <td><small>{data.marca}</small></td>
      <td><small>{data.presentacion}</small></td>
      <td><small>{data.cantidad}</small></td>
      <td><small><button type="button" className="btn btn-primary btn-xs" onClick={()=>deleteFromCart(data._id)}><small>-1</small></button></small></td>
      <td><small><button type="button" className="btn btn-primary btn-xs" onClick={()=>deleteFromCart(data._id, true)}><small>All</small></button></small></td>
    </tr>
  );
};
