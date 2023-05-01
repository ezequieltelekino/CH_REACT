import "./NavBar.css"
import Shop from "../Shop/Shop"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../App";


const NavBar = ({brand}) => {
  let contexto = useContext(Contexto)

  let categorias = []

  function existeEnElArray (categoria){
    return categorias.some(objeto => objeto === categoria)
  }
  contexto.productos.map((producto) => {
    if (!existeEnElArray(producto.categoria)) {
      categorias.push(producto.categoria);
      console.log("Agregando categoria", producto.categoria)
    }
   }
  );

console.log("Las categorias son", categorias)
  return (
    <nav className="Navigation">
      <ul> 
      <li><Link to="/"><h1> {brand} </h1></Link></li> 
        <Link className="Link" to="/">
          Home
        </Link>

        <Link className="Link" to="/productos">
          Productos
        </Link>

        <Link className="Link" to="/contact">
          Contact
        </Link>
        <Link className="Link" to="/carrito">
          <Shop/>
        </Link>
        <li><span onClick={contexto.vaciarCarrito}>Vaciar Carrito</span> </li>
        <li>
          <ul drop-down closed> 
            <div class="menu-vertical">
              <a href="#" class="active">Categorias</a>
            
              {
                categorias.map((categoria) => {
                        return (
                            <Link className="asd" to={`/categoria/${categoria}`}> {categoria}</Link>                        
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


