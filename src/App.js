import pileta from  "./components/Landing/img/pileta.jpg"
//'components/Landing/img/pileta.jpg';
import './App.css';
import React, {Component} from 'react';

// Importo mis componentes
import Header from "./components/Header/Header";
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';

export let nombre = "Ezequiel";

class App extends Component {
  render  (){
    return (
      <div className="App">  
        <NavBar brand="AbajomojabA"/>   
        <Header title="Abajo Mojaba" subtitle="Abajo Mojaba - Piletas de lona"/>
        <Landing image={pileta} texto="logo-pileta" />

      </div>
    );//<!-- ¿es correcto que esto esté en el nav y no en el header? -->
  };
}
export default App;
