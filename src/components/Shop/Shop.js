import React from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Shop.css"
import { useContext } from "react";
import { Contexto } from "../../App";

const  Shop = () => {
  let contexto = useContext(Contexto)
  let cantidadDeArticulosEnElCarrito = 0
  cantidadDeArticulosEnElCarrito = 0 
 
  return (
    <div>
        <ShoppingCartCheckoutIcon sx={{color: "white"}}/>
        <span>{contexto.carrito.length} </span>
    </div>
    
  );
};

export default Shop;
