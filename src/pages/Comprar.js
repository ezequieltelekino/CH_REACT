import "./Comprar.css";
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Button } from '@mui/material';
import {useState}  from "react";

import { useContext } from "react";
import { Contexto } from "../App";

const estadoInicial = {
  nombre:"",
  email:""
}

const Comprar = () => {
  let contexto = useContext(Contexto)
  const [values, setValues] = useState(estadoInicial)

  const onChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value }); 
    console.log(e.target.name)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Comprando!", contexto.carrito)
    console.log(values)
  }

  if (contexto.carrito.length == 0)
    return(
      <div>El carrito está vacío</div>
    );

  return (
    <div>
    <form  className="FormContainer" onSubmit={onSubmit}>
      <div>
        <TextField 
            placeholder="nombre"
            name="nombre"
            value={values.nombre}
            onChange={onChange}
          />
          </div>
          <div>
          <TextField 
            placeholder="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
          <div>
            <button type="submit">Comprar</button>
        </div>
      </form>
    </div>
  );
  };
  
  export default Comprar;
  /*  
      <form id="formulario-compra" className="form">
      <h4>Ingrese sus datos</h4>
        <p id="nombre" type="text"><input placeholder="Ingrese su nombre"></input></p>
        <p id="apellido" type="text"><input placeholder="Ingese su apellido"></input></p>
        <p id="email" type="text"><input placeholder="Ingrese su correo electrónico"></input></p>
        <div className="boton-comprar" onClick={comprar} >Comprar!</div>
      </form>*/

      /*      <FormControl>
        <InputLabel htmlFor="my-input">email</InputLabel>
        <Input id="formulario-compra" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Ingrese su email.</FormHelperText>
        <Button onClick={comprar}>Comprar</Button>
      </FormControl>*/