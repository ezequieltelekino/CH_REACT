import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto"
import Carrito from "./pages/Carrito";

import './App.css';
import React from 'react';

// Importo mis componentes
import Header from "./components/Header/Header";

//firebase
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";

// context
// 1) crear el contexto con el hook createContext
// 2) crear el componente provider
// 3) retornar el contexto con .provider
// 4) props.childer o children
export const Contexto = createContext("valor inicial del provider, no debería verse en ningún lugar porque todo está dentro del context");

const App = () => {
      
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    function agregarAlCarrito(data){
      data.cantidad++
      if(!carrito.some(prod => prod === data) ){
        setCarrito(prev => [...prev, data,])
      }
      alert("Tenés " + data.cantidad + " unidades de \n«" + data.nombre + "» \n en el carrito")
    }

    function vaciarCarrito(){
        console.log("Vaciando al carrito: ")
        carrito.forEach((producto) => {      
          console.log("Eliminando " + producto.cantidad + " unidades de " + producto.nombre)   
          producto.cantidad = 0 
        })
        setCarrito([])
        alert("0 unidades en el carrito")
    }

    let docs = [];

    function existeEnElArray (id){
      return docs.some(objeto => objeto.id === id)
    }
    const q = query(collection(db, "productos"));
    useEffect(() => {
      const getProductos = async() => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let objeto = {...doc.data(), id: doc.id, cantidad:0}
          if (!existeEnElArray(doc.id)) //para evitar los duplicados
              docs.push(objeto);
        });     
          setProductos(docs)
      };
      getProductos();
    }, [])
  
  return (
    <Contexto.Provider value={{productos, setProductos, carrito, agregarAlCarrito, vaciarCarrito}}>
      <Router>
        <div className="App">
          <NavBar brand="AbajomojabA" />
          <Header title="Abajo Mojaba" subtitle="Abajo Mojaba"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />

            <Route path="detalle-producto/:id"  element={<DetalleProducto />} />          
          </Routes>
        </div>

      </Router>
    </Contexto.Provider>
  );
};
export default App;



