import './App.css';
import Header from './componentes/Header';
import GuardarNotas from './componentes/Notas'
//import React, {useState, useEffect} from 'react'
//import {store} from './firebaseconfig'


function App() {
  
  return (
    <div className="App">
      <div>
        <Header></Header>
        <GuardarNotas></GuardarNotas>
        </div>  

    </div>
  );
}

export default App;
