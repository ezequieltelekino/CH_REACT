import React from "react"
import "./Landing.css"

const  Landing = ({image, texto}) => {
  return (
    <div> 
        <img  className="galeria" src={image} alt={texto} />
    </div>
    
  );
};

export default Landing;
