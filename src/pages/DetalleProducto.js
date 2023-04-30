import { useParams } from "react-router-dom";
import CardProductConDetalle from "../components/CardProductConDetalle/CardProductConDetalle";
import { useContext } from "react";
import { Contexto } from "../App";


const DetalleProducto = () => {

    let contexto = useContext(Contexto)
    let {id} = useParams()
    let data = undefined;

    contexto.productos.forEach((producto) => {
        if (producto.id === id){
            data = producto;
        }
    })
    if (data === undefined){

        data={descripcion: "artículo no encontrado",
               position:"", 
               precio:0     
        }
    }
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems:"center"}}>
            <CardProductConDetalle data={data}></CardProductConDetalle>
        </div>
    )
}

export default DetalleProducto;
      
