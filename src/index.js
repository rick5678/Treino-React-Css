import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let cortina = document.getElementById('cortinas-esq');
let cortinaDir = document.getElementById('cortinas-dir');
let titulo = document.getElementById('titulo');
let tituloMaior = document.getElementById('titulo-maior');


window.addEventListener('scroll', function(){
    let value = window.scrollY;

    cortina.style.right =  950 + value * 6 + 'px';
    cortinaDir.style.left = 950 + value * 6 + 'px';
    titulo.style.top =  20 + value * -6 + 'px';
    tituloMaior.style.top = 120 + value * -6 + 'px';
    
})

