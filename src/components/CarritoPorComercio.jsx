import React from "react";

export const CarritoPorComercio = ({ data }) => {
  // console.log(data);
  let arreglo = [];
  Object.values(data).map((e) => {
    arreglo.push(e);
  });
  let precioTotal = 0;
  // console.log(arreglo);
  return (
    <>
      {arreglo.length > 0 ? (
        arreglo.map((comercio, index) => (
          <div className="col-lg-6 container">
            {comercio[0] && (
              <div key={index}>
                <div className="row border m-auto">
                  <div>
                    <h5><b>{comercio[0].idComercio.commerceName}</b></h5>
                    <div hidden={true}>{(precioTotal = 0)}</div>
                    <table className="table table-striped table-hover mt-2 shadow-lg table-control">
                      <thead>
                        <tr>
                          <th><small>Nombre</small></th>
                          <th><small>Marca</small></th>
                          <th><small>Precio</small></th>
                          <th><small>Cant</small></th>
                          <th hidden={true}></th>
                        </tr>
                      </thead>

                      <tbody>
                        {comercio.map((producto,i) => (
                          <tr key={i}>
                            <td><small>{producto.productName}</small></td>
                            <td><small>{producto.marca}</small></td>
                            <td><small>${producto.precio}</small></td>
                            <td><small>{producto.cantidad}</small></td>
                            <td hidden={true}>
                              {(precioTotal += parseFloat(producto.precio*producto.cantidad))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div><b>Precio Total: ${precioTotal}</b></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div></div>
      )}
    </>
  );
};
