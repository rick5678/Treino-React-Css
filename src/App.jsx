import React from 'react';
import './App.css';
import Cabecalho from './components/cabecalho/Cabecalho.jsx';
import Home from './paginas/home/Home';
import Sala from './paginas/sala/Sala';

function App() {
  return (
    <>
      <Cabecalho />
      <Home />
      <Sala />
    </>
  );
}

export default App;
