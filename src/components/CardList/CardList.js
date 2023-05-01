import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { useContext } from "react";
import { Contexto } from "../../App";
  
import "./CardListComponent.css";

const CardList = ({mostrar}) => {
    const contenidoDelContexto = useContext(Contexto );
    let listaCompleta = contenidoDelContexto.productos 
    let prods = []
    if ( mostrar == 0 ){
        //console.log("Mostrando todos los elementos")
        prods = listaCompleta
        console.log(prods)
    }else{
        //console.log ("Mostando " + mostrar + " elementos")
        for (let i = 0 ; i< mostrar && i < listaCompleta.length ; i++){
            prods.push (listaCompleta [i])
        }
    }
    
    return (
        <div className="Cards-List">
            {
            prods.map((producto) => {
                    return (
                        <div key={producto.id}>
                                <CardProduct key={producto.id} data={producto} sePuedeAgregar={true}/>
                        </div>
                    );
                }
            ) 
            }
        </div>
    );
};

export default CardList;
