import React from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Shop.css"
const  Shop = ({numero, incrementar, decrementar}) => {
  return (
    <div>
        <ShoppingCartCheckoutIcon sx={{color: "white"}}/>
        <span>{numero}</span>
        <buton onClick={decrementar}> decrementar </buton>
        <buton onClick={incrementar}> | incrementar </buton>
    </div>
    
  );
};

export default Shop;
