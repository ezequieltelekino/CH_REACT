import CardProduct from "../components/CardProduct/CardProduct";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { Contexto } from "../App";

const Categoria = () => {
  const contexto = useContext(Contexto)
  let {categoria} = useParams()
  let prods = []

  contexto.productos.map((producto) => {
    if ((producto.categoria === categoria)) {
      prods.push(producto);
      console.log("Producto: " , producto)

    }
    
   }
  );

  return (
    <div className="Cards-List">
{
        prods.map((producto) => {
                return (
                    <div key={producto.id}>
                            <CardProduct key={producto.id} data={producto} sePuedeAgregar={true}/>
                    </div>
                );
            }
        ) 
        }
    </div>
);
  

  };
  
  export default Categoria;
