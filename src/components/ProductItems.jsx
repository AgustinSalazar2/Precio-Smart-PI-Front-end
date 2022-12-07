import React from "react";
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';

export const ProductItems = ({data, addToCart}) => {
// console.log(data)
// console.log(addToCart)
  return (
    <tr key={data._id}>
      <td><small>{data.productName}</small></td>
      <td><small>{data.marca}</small></td>
      <td><small>{data.presentacion}</small></td>
      <td>
      <ShoppingCartCheckoutTwoToneIcon type="button" fontSize="large" onClick={()=>addToCart(data._id)}/>

        {/* <small>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>addToCart(data._id)}>
            <small>Agregar</small>
          </button>
        </small> */}
      </td>
    </tr>

    // <div className="col-lg-3 col-md-6">
    //   <div className="card">
    //     <div className="card-body">
    //       <p>{data.productName}</p>
    //       <p>{data.marca}</p>
    //       {/* <p>{data.precio}</p> */}
    //       <button type="button" className="btn btn-primary btn-sm" onClick={()=>addToCart(data._id)}>Add to Cart</button>
    //     </div>
    //   </div>
    // </div>
  );
};
