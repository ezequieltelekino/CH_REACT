import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail"


import './App.css';
import React, {Component} from 'react';

// Importo mis componentes
import Header from "./components/Header/Header";
import Landing from './components/Landing/Landing';
import CardList from './components/CardList/CardList';



//firebase
import { db } from "./firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";


// context
// 1) crear el contexto con el hook createContext
// 2) crear el componente provider
// 3) retornar el contexto con .provider
// 4) props.childer o children
let yaPasePorAqui = 0
export const Contexto = createContext("valor inicial del provider, no debería verse en ningún lugar porque todo está dentro del context");

const App = () => {
      
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    let docs = [];

    

//    const q = query(collection(db, "productos")/*, where("position", "==", "lona")*/);
    const q = query(collection(db, "productos"));
    useEffect(() => {
      const getProductos = async() => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let objeto = {...doc.data(), id: doc.id}

          docs.push( objeto);
          
        });     
          setProductos(docs)
      };
      getProductos();


    }, [])
  
  return (
    <Contexto.Provider value={[{productos, setProductos},{carrito, setCarrito}]}>
      <Router>
        <div className="App">
          <NavBar brand="AbajomojabA" />
          <Header title="Abajo Mojaba" subtitle="Abajo Mojaba"/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="user-detail/:id"  element={<UserDetail />} />          
          </Routes>
        </div>

      </Router>
    </Contexto.Provider>
  );
};
export default App;




// Machete interno
// necesito una clase que herede de react.component (clase "componentes 1")
// Ahora, en la clase "componentes 2", usan componentes basados en funciones.
// En la corrección, el tutor me indicó que use estos últimos (pero no habíamos visto nada... cuac!)
// así que reemplazo "class App extendes Component"   por "funcion App()", y le quito el render, sólo dejo el return.
/*
function App() { 

  // funció básica, sincrónica.
  function incrementar(){
    setNumber(number+1)
    console.log("incrementando: "+ number)
    
  }

  // está función flecha - dejando de lado que resta- es equivalente a la función incrementar. Además, la hago asincrónica.
  const decrementar = () => {
    console.log("Decrementando (esperar dos segundos para que impacte)")
    return new Promise ((resolve, rejected) => {
      setTimeout(() => {
        resolve (setNumber(number => number -1));
      }, 2000); // decrementa después de dos segundos   
    });
  };


  const inicializar = () => {
    console.log ("inicializando... le pego a jsonplaceholder, para probar la sintaxis");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log("Terminada la descarga, inicializo"), setNumber(number => 0))

  }
    const [number, setNumber] = useState(0)  
    // inicializo la variable number, que se accede por un hook. setNumber es una función que declaro para setearlo, pero podría ser cualquier cosa.

    // useEffect se va a ejecutar cada vez que modifique la variable "number"
  useEffect(() => {
    setTimeout(() => {
      console.log("Corriendo useEffect (handleando cambios en number) ");
    },100);    
  },[number]);  

    return (
      <div className="App">  
        <NavBar numero={number} decrementar={decrementar} incrementar={incrementar} inicializar={inicializar} brand="AbajomojabA"/>   
        <Header title="Abajo Mojaba" subtitle="Abajo Mojaba - Piletas de lona"/>
        <Landing image={pileta} texto="logo-pileta" />

      </div>
    );//<!-- ¿es correcto que esto esté en el nav y no en el header? -->
  };
*/


      
