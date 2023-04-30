import "./NavBar.css"
import Shop from "../Shop/Shop"

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "../../App";

const NavBar = ({brand}) => {
  let contexto = useContext(Contexto)

  return (
    <nav className="Navigation">
      <ul className="List-ul">
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

      </ul>
    </nav>
  );
};

export default NavBar;


