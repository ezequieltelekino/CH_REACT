import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct/CardProduct";
import { useContext } from "react";
import { Contexto } from "../App";


const DetalleProducto = () => {

    let contexto = useContext(Contexto)
    let {id} = useParams()
    let data = undefined;

    contexto.productos.forEach((producto) => {
        if (producto.id === id){
            console.log("producto: ",producto)
            data = producto;
        }
    })
    if (data == undefined){

        data={descripcion: "artículo no encontrado",
               position:"", 
               precio:0     
        }

    }
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:"center"}}>
            <CardProduct data={data}></CardProduct>
        </div>
    )
}

export default DetalleProducto;
      
