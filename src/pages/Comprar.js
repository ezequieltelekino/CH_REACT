import "./Comprar.css";
import { useContext } from "react";
import { Contexto } from "../App";

const Comprar = () => {
  let contexto = useContext(Contexto)

  function comprar(){
    console.log("Comprando!", contexto.carrito)
  }


  if (contexto.carrito.length == 0)
    return(
      <div>El carrito está vacío</div>
    );

  return (
    <div>
      
      <form className="form">
      <h4>Ingrese sus datos</h4>
        <p type="nombre:"><input placeholder="Ingrese su nombre"></input></p>
        <p type="apellido:"><input placeholder="Ingese su apellido"></input></p>
        <p type="email:"><input placeholder="Ingrese su correo electrónico"></input></p>
        <div className="boton-comprar" onClick={comprar} >Comprar!</div>
      </form>
    </div>
  );
  };
  
  export default Comprar;
  