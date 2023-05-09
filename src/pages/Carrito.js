import CardListCarrito from "../components/CardListCarrito/CardListCarrito";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import { useContext } from "react";
import { Contexto } from "../App";

const Carrito = () => {
  let contexto = useContext(Contexto)

    if (contexto.carrito.length === 0){
      return (
        <div>
      <div>El carrito está vacío.
          <Link to="/">    Seguir comprando</Link>
      </div>
      <CardListCarrito />   
    </div>
    );
    }
    else{
      return (
        <div>
            <Button onClick={contexto.vaciarCarrito}>
                Vaciar Carrito
            </Button> 
      <CardListCarrito />   
    </div>
    );
    }
  };
  
  export default Carrito;
  