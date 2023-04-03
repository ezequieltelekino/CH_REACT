import React from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Shop.css"
const  Shop = ({numero, incrementar, decrementar, inicializar}) => {
  return (
    <div>
        <ShoppingCartCheckoutIcon sx={{color: "white"}}/>
        <span>{numero} </span>
    </div>
    
  );
};

export default Shop;
    /*    <buton onClick={decrementar}> decrementar </buton>
        <buton onClick={incrementar}> | incrementar </buton>
        <buton onClick={inicializar}> | poner en ceroincrementar </buton>
*/