import "./NavBar.css"
import Shop from "../Shop/Shop"

const  NavBar = ({brand}) => {
  return (
    <nav>
        <ul>
            <li><h1>{brand}</h1></li>   
            <li><a>Home</a></li>
            <li><a>Acerca de nosotros</a></li>
            <li><a>Productos</a></li>
            <li><a>Contacto</a></li>
            <li><Shop /></li>
        </ul>
    </nav>
    
  );
}

export default NavBar;
