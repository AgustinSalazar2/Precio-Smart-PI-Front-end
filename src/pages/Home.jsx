import React from "react";
import "../assets/cover.css";
import img from "../assets/img/verificar.png";


export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="col-lg-12 p-5 mt-5">
          <h1 className="mt-5">
            <strong>PrecioSmart Bienvenido estimado COMERCIANTE</strong>
          </h1>
          <img className="mb-4" src={img} alt="" width={80} height={75} />
        </div>
      </div>
    </>
  );
};
