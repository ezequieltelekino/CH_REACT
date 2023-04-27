import React, {useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../App";
  
import "./CardListComponent.css";

const CardList = () => {
    const contenidoDelContexto = useContext(Contexto );
    let prods = contenidoDelContexto.productos 

    
    return (
        <div className="Cards-List">
            {
            prods.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <Link to={`/detalle-producto/${producto.id}`}>
                                <CardProduct key={producto.id} data={producto}/>
                            </Link>
                        </div>
                    );
                }
            ) 
            }
        </div>
    );
};

export default CardList;