import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import { useContext } from "react";
import { Contexto } from "../../App";
import Button from '@mui/material/Button';

import "./CardListComponent.css";

const CardListCarrito = () => {
    const contenidoDelContexto = useContext(Contexto );
    let listaCompleta = contenidoDelContexto.carrito 
    let prods = []
    //console.log("Mostrando todos los elementos")
    prods = listaCompleta
    //console.log(prods)
    let total = 0

    
    
    return (
        <div>
        <div className="Cards-List">
            {
            prods.map((producto) => {
                total+= producto.cantidad*producto.precio
                let mensaje = " unidad: $"
                if (producto.cantidad != 1) 
                    mensaje = " unidades: $"
                let subtexto = producto.cantidad + mensaje + producto.cantidad*producto.precio
                    if (producto.cantidad > 0)
                        return (
                            <div key={producto.id}>
                                    <CardProduct key={producto.id} data={producto} esCarrito={true} subtexto={subtexto}/>
                            </div>           
                        );
                }
            ) 
            }
        </div>
        <p>
                total ${total}
        </p>
        </div>
    );
};

export default CardListCarrito;
