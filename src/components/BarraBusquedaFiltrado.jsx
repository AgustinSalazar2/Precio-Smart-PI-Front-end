import React, { useEffect, useState } from "react";




export const BarraBusquedaFiltrado = () => {

    //! Función para traer los COMERCIOS de la API
    const getComercios = async () => {
        const urlComercios = "http://localhost:4000/comercios";
        const resp = await fetch(urlComercios);
        const respJSON = await resp.json();
        setComerces(respJSON);
    };

    //!Función que establece el estado de productos en productos por categoría, es decir, me cambia el estado y pone en el array de productos sólo los productos que pertencen a la categría que seleccionó el usuario.
    const filtredData = async (e) => {
        // console.log(e.target.value);
        const categoria = e.target.value;
        if (categoria === "todos") {
            showData();
        }
        // console.log(categoria)
        const URL = `http://localhost:4000/products/${categoria}`;
        const resp = await fetch(URL);
        const dataCategoria = await resp.json();
        // console.log(dataCategoria);
        setProducts(dataCategoria);
    };
    return (
        <>
        <div className="container">
            <div className="row">
            <div className="col-lg-3 justify-content-center ">
                <div className="mb-3">
                {/* <label htmlFor="" class="form-label">
                                Zona
                                </label> */}
                <select className="form-select" name="" id="">
                    <option defaultValue value="zona_1">
                    Zona 1
                    </option>
                    <option value="zona_2">Zona 2</option>
                    <option value="zona_3">Zona 3</option>
                    <option value="zona_4">Zona 4</option>
                    <option value="zona_5">Zona 5</option>
                    <option value="zona_6">Zona 6</option>
                    <option value="zona_7">Zona 7</option>
                    <option value="zona_8">Zona 8</option>
                    <option value="zona_9">Zona 9</option>
                </select>
                </div>
            </div>

            <div className="container col-lg-3 justify-content-center ">
                <div className="mb-3">
                {/* <label htmlFor="" class="form-label">
                                Zona
                                </label> */}
                <select
                    className="form-select form-select"
                    onChange={filtredData}
                >
                    {/* <option defaultValue>Categoría</option> */}
                    <option defaultValue value="">
                    Categoría
                    </option>
                    <option value="todos">Todos</option>
                    <option value="comestibles">Comestibles</option>
                    <option value="bebidas">Bebidas</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="otros">Otros</option>
                </select>
                </div>
            </div>

            <div className="col-lg-6">
                <input
                value={search}
                onChange={buscador}
                type="text"
                placeholder="search"
                className="form-control mb-3"
                autoFocus={true}
                />
            </div>
            </div>
        </div>
        </>
    );
};
