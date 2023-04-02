import pileta from  "./components/Landing/img/pileta.jpg"
//'components/Landing/img/pileta.jpg';
import './App.css';
import {useState, useEffect} from 'react';
import React, {Component} from 'react';

// Importo mis componentes
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';

export let nombre = "Ezequiel";

// Machete interno
// necesito una clase que herede de react.component (clase "componentes 1")
// Ahora, en la clase "componentes 2", usan componentes basados en funciones.
// En la corrección, el tutor me indicó que use estos últimos (pero no habíamos visto nada... cuac!)
// así que reemplazo "class App extendes Component"   por "funcion App()", y le quito el render, sólo dejo el return.

function App() { 

  function incrementar(){
    setNumber(number+1);
  }

  //está función flecha - dejando de lado que resta- es equivalente a la función incrementar
  const decrementar = () => {
    setNumber((number => number -1));
  }

    const [number, setNumber] = useState(0)  
    // inicializo la variable number, que se accede por un hook. setNumber es una función que declaro para setearlo, pero podría ser cualquier cosa.

    return (
      <div className="App">  
        <NavBar numero={number} decrementar={decrementar} incrementar={incrementar} brand="AbajomojabA"/>   
        <Header title="Abajo Mojaba" subtitle="Abajo Mojaba - Piletas de lona"/>
        <Landing image={pileta} texto="logo-pileta" />

      </div>
    );//<!-- ¿es correcto que esto esté en el nav y no en el header? -->
  };

export default App;
