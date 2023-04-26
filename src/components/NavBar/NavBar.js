import "./NavBar.css"
import Shop from "../Shop/Shop"

import { Link } from "react-router-dom";

const NavBar = ({brand}) => {
  //setNumber(numero+1)
  return (
    <nav className="Navigation">
      <ul className="List-ul">
      <li><Link to="/"><h1> {brand} </h1></Link></li> 
        <Link className="Link" to="/">
          Home
        </Link>
        <Link className="Link" to="/about">
          About
        </Link>
        <Link className="Link" to="/contact">
          Contact
        </Link>
        <li><Shop/></li>
      </ul>
    </nav>
  );
};

export default NavBar;


