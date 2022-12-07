import React, { useState } from "react";
import img from "../assets/img/verificar.png";

export const Bienvenida = () => {
  const [clase, setClase] = useState("color-strong-azul");
  //   setInterval(Bienvenido, 1000);
  let size = "size: 36px";
  //   function Bienvenido() {
  //     if (clase === 'color-strong-blanco') {
  //         setClase('color-strong-azul')
  //     } else {
  //         setClase('color-strong-blanco'
  //         )
  //     }
  //     // let blink = document.getElementById("bienv");
  //     // color = color == "#ffffff" ? "blue" : "#ffffff";
  //     // blink.style.color = color;
  //     // blink.style.fontSize = "36px";
  //   }
  return (
    <div className="col-lg-8 p-3 mt-5">
      <div className="bg-light bg-opacity-75">
        <h1 className="text-primary mt-5">
          <strong id="bienv" className={`${size} ${clase}`}>
            PrecioSmart Bienvenido estimado COMERCIANTE
          </strong>
        </h1>
        <img className="mb-4 mt-4" src={img} alt="" width={120} height={100} />
      </div>
    </div>
  );
};
