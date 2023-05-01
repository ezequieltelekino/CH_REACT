import "./NavBar.css"
import Shop from "../Shop/Shop"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../App";


const NavBar = ({marca}) => {
  let contexto = useContext(Contexto)

  let categorias = []

  function existeEnElArray (categoria){
    return categorias.some(objeto => objeto === categoria)
  }
  contexto.productos.map((producto) => {
    if (!existeEnElArray(producto.categoria)) {
      categorias.push(producto.categoria);
 //     console.log("Agregando categoria", producto.categoria)
    }
   }
  );

//console.log("Las categorias son", categorias)
  return (
    <nav className="Navigation">
      <ul> 
        <li><Link to="/">
          <h1> {marca} </h1>
        </Link></li> 
        <Link className="Link" to="/">
          Home
        </Link>

        <Link className="Link" to="/productos">
          Productos
        </Link>
        
        <Link className="Link" to="/carrito">
          <Shop/>
        </Link>


        <Link className="Link" to="/comprar">
          Comprar
        </Link>

        <li>
          <ul > 
            <div className="menu-vertical">
              <a href="#">Categorias</a>
              {
                categorias.map((categoria) => {
                        return (
                          <div key={categoria}>
                            <Link  to={`/categoria/${categoria}`}> {categoria}</Link> 
                          </div>                       
                        );
                    }
                ) 
              }
            </div>
          </ul>
           </li>
      </ul>
    </nav>
  );
};

export default NavBar;


