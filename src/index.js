import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*

const items = [
  {color: "Azul", precio: 100},
  {color: "Verde", precio: 200},
  {color: "Rojo", precio: 300},
  {color: "Naranja", precio: 400}
];

// muestro estos items con un for tradicional
console.log("Con un for tradicional");
for ( var item in items){
  console.log ("Leyendo " + items[item].color + " " + items[item].precio);
}

console.log("desde un map")
let listaDeItems = items.map(function (item){
  return item.color + " " + item.precio;  
});
console.log (listaDeItems);

console.log("desde un map, con arrow")
let listaDeItems2 = items.map( (item) => item.color + " " + item.precio);
console.log (listaDeItems2);

*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
