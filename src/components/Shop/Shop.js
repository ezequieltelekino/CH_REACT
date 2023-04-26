import React from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Shop.css"
import { useContext } from "react";
import { Contexto } from "../../App";

const  Shop = () => {
  let contexto = useContext(Contexto)
  let cantidadDeArticulosEnElCarrito = 0
  cantidadDeArticulosEnElCarrito = contexto[1].carrito.length
 
 // console.log("casd", contexto)
  return (
    <div>
        <ShoppingCartCheckoutIcon sx={{color: "white"}}/>
        <span>{cantidadDeArticulosEnElCarrito} </span>
      

    </div>
  );
};

export default Shop;
    /*    <buton onClick={decrementar}> decrementar </buton>
        <buton onClick={incrementar}> | incrementar </buton>
        <buton onClick={inicializar}> | poner en ceroincrementar </buton>
*/