import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Registro from './pages/registro';
import Nosotros from './pages/nosotros';
import Inicio from './pages/inicio';
import Header from './componentes/header';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
     <ToastContainer position='center'/>
     <Routes>

      <Route exact path='/' Component={Inicio}/>
      <Route path='/add' Component={Registro}/>
      <Route path='update/:id' Component={Registro}/>
      <Route path='/about' Component={Nosotros}/>

     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
