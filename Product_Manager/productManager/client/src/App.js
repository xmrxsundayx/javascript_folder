import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainView from './views/MainView';
import Details from './components/Details'
// import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route element={<MainView/>} path= "/home" default />
      <Route element={<Details/>} path= "/product/:id" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
