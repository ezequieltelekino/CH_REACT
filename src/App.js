import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DetalleProducto from "./pages/DetalleProducto"
import './App.css';
import React, {Component} from 'react';

// Importo mis componentes
import Header from "./components/Header/Header";

//firebase
import { db } from "./firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
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
    let docs = [];

    function existeEnElArray (id){
      return docs.some(objeto => objeto.id === id)
    }

    const q = query(collection(db, "productos"));
    useEffect(() => {
      const getProductos = async() => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let objeto = {...doc.data(), id: doc.id}
          if (!existeEnElArray(doc.id)) //para evitar los duplicados
              docs.push(objeto);
        });     
          setProductos(docs)
      };
      getProductos();


    }, [])
  
  return (
    <Contexto.Provider value={{productos, setProductos, carrito, setCarrito}}>
      <Router>
        <div className="App">
          <NavBar brand="AbajomojabA" />
          <Header title="Abajo Mojaba" subtitle="Abajo Mojaba"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="detalle-producto/:id"  element={<DetalleProducto />} />          
          </Routes>
        </div>

      </Router>
    </Contexto.Provider>
  );
};
export default App;



