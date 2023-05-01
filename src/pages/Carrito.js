import CardListCarrito from "../components/CardListCarrito/CardListCarrito";
import { useContext } from "react";
import { Contexto } from "../App";

const Carrito = () => {
  let contexto = useContext(Contexto)

    return (
        <div>
            <button onClick={contexto.vaciarCarrito}>
                Vaciar Carrito
            </button> 
       <CardListCarrito />   
     </div>
    );
  };
  
  export default Carrito;
  //