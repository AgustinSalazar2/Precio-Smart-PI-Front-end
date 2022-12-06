import React from "react";
import img from "../assets/img/verificar.png";

export const Bienvenida = () => {
    return (
        <div className="col-lg-8 p-3 mt-5">
            <h1 className="mt-5">
                <strong>PrecioSmart Bienvenido estimado COMERCIANTE</strong>
            </h1>
            <img className="mb-4 mt-4" src={img} alt="" width={120} height={100} />
        </div>
    );
};
