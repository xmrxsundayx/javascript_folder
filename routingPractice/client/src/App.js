import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

const Alt = () => {
  const {param, txtColor, bgColor} = useParams();
  const isNumber = !isNaN(param);
  if (isNumber) {
    return (
      <div>
        <h1 style ={txtColor ? {color: txtColor, backgroundColor: bgColor} :null}>
          The number is: {param}
          </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style ={txtColor ? {color: txtColor, backgroundColor: bgColor} :null}>
          The word is: {param}
        </h1>
      </div>
    );
  }
};


function App() {
  return (
    <BrowserRouter>
    <h3>Instructions (ref: Tony's work)</h3>
    <p>Add to the url "/home" to get to the home page</p>
    <p>Add a number to url "/5" to get to the number page</p>
    <p>Add a word to url "/hello" to get the word page</p>
    <p>Add a color to url "/hello/yellow/black to change text and background</p>
      <Routes>
        <Route path= "/home" element={<Home/>}/>
        <Route path= "/:param" element={<Alt/>}/>
        <Route path= "/:param/:txtColor/:bgColor" element={<Alt/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
