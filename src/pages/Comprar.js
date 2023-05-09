import "./Comprar.css";
import { TextField } from '@mui/material';
import {useState}  from "react";
import { useContext } from "react";

import { Contexto } from "../App";
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
//firebase
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const estadoInicial = {
  nombre:"",
  email:""
}

const Comprar = () => {
  let contexto = useContext(Contexto)
  const [values, setValues] = useState(estadoInicial)
  const MySwal = withReactContent(Swal)

  const onChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value }); 
    console.log(e.target.name)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Comprando!", contexto.carrito);
    console.log(values);
    const carrito = contexto.carrito
    
    const docRef = await addDoc(collection(db, "compras"), {
     values,
     carrito
    });
    let texto = "El id de la transacción es " + docRef.id

    MySwal.fire({
      title: <p>{texto}</p>,
    }).then(contexto.vaciarCarritoEnSilencio)

  }

  if (contexto.carrito.length === 0)
    return(
      <div>El carrito está vacío.
          <Link to="/">    Seguir comprando</Link>
      </div>
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
            placeholder="apellido"
            name="apellido"
            value={values.apellido}
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

            <Button type="submit">Comprar</Button>

        </div>
      </form>
    </div>
  );
  };
  
  export default Comprar;
