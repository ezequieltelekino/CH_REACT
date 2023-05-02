import "./Comprar.css";
import { TextField } from '@mui/material';
import {useState}  from "react";
import { useContext } from "react";
import { Contexto } from "../App";
//firebase
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
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

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Comprando!", contexto.carrito);
    console.log(values);
    const carrito = contexto.carrito
    const docRef = await addDoc(collection(db, "compras"), {
     values,
     carrito
    });
    console.log("El id de la transacción es " + docRef.id)
    alert("El id de la transacción es " + docRef.id)

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
