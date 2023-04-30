import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { useContext } from "react";
import { Contexto } from "../../App";
  
import "./CardListComponent.css";

const CardListCarrito = () => {
    const contenidoDelContexto = useContext(Contexto );
    let listaCompleta = contenidoDelContexto.carrito 
    let prods = []
    console.log("Mostrando todos los elementos")
    prods = listaCompleta
    console.log(prods)
    let total = 0

    
    
    return (
        <div>
        <div className="Cards-List">
            {
            prods.map((producto) => {
                total+= producto.cantidad*producto.precio
                let mensaje = "unidad"
                if (producto.cantidad != 1) 
                mensaje = "unidades"

                    return (
                        <div key={producto.id}>
                                <CardProduct key={producto.id} data={producto}/>
                                {producto.cantidad} {mensaje}:   
                                ${producto.cantidad*producto.precio}
                        </div>
                        
                    );
                }
            ) 
            }

        </div>
        <h3>
                total ${total}
            </h3>
        </div>
    );
};

export default CardListCarrito;
