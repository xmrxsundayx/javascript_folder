import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import MainView from './views/MainView';
import Details from './components/Details'
import Update from './components/Update';
// import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route element={<MainView/>} path= "/home" default />
      <Route element= {<Navigate to = "/home"/>} path = "/"/>
      <Route element={<Details/>} path= "/product/:id" />
      <Route element={<Update/>} path= "/product/edit/:id" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
