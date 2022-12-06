import React from "react";
import img from "../assets/img/verificar.png";

export const Bienvenida = () => {

window.setInterval (Bienvenido, 600);
var color = "red";
function Bienvenido () {
var blink = document.getElementById ("bienv");
color = (color == "#ffffff")? "blue" : "#ffffff";
blink.style.color = color;
blink.style.fontSize='36px';}
    return (
            
        <div className="col-lg-8 p-3 mt-5">
            <div className="bg-light bg-opacity-75">
                <h1 className="text-primary mt-5">
                    <strong id="bienv" className="size: 50%">PrecioSmart Bienvenido estimado COMERCIANTE</strong>
                </h1>
                <img className="mb-4 mt-4" src={img} alt="" width={120} height={100} />
            </div>
        </div>
    );
};
