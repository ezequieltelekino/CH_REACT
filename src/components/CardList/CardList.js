import React, {useEffect, useState } from "react";
import CardUser from "../CardUser/CardUser";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../App";
  
import "./CardListComponent.css";

const CardList = () => {
    const contenidoDelContexto = useContext(Contexto );
    let prods = contenidoDelContexto[0].productos 
    let listaSinDuplicados = []
    
    prods.map((producto) => {

        //por algún motivo que desconozco, aparecen duplicados todos los registros... así que antes de mostrarlos, los filtro.
        let yaEstaba=false
        listaSinDuplicados.forEach((sd) =>{
            if (sd.id == producto.id)
                yaEstaba = true
        })
        if (!yaEstaba)  {
            listaSinDuplicados.push(producto)
        }
    })
    
    return (
        <div className="Cards-List">
            {
            listaSinDuplicados.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <Link to={`/user-detail/${producto.id}`}>
                                <CardUser key={producto.id} data={producto}/>
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