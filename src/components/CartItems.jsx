import React from "react";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';

export const CartItems = ({ data, deleteFromCart }) => {
  return (
    <tr key={data._id}>
      <td><small>{data.productName}</small></td>
      <td><small>{data.marca}</small></td>
      <td><small>{data.presentacion}</small></td>
      <td><small>{data.cantidad}</small></td>
      <td>
          <RemoveCircleOutlineTwoToneIcon type="button" fontSize="large" onClick={()=>deleteFromCart(data._id)}/>
          {/* <svg data-testid="DeleteSweepIcon" onClick={()=>deleteFromCart(data._id)}></svg> */}
        {/* <small>
          <button type="button" className="btn btn-primary btn-sm" onClick={()=>deleteFromCart(data._id)}>
            <small>
              Quitar uno
            </small>
          </button>
        </small> */}
      </td>

      <td>
      <DeleteTwoToneIcon type="button" fontSize="large" onClick={()=>deleteFromCart(data._id, true)}/>

        {/* <small>
          <button type="button" className="btn btn-warning btn-sm" onClick={()=>deleteFromCart(data._id, true)}>
            <small>Borrar producto</small>
          </button>
        </small> */}
      </td>

    </tr>
  );
};
