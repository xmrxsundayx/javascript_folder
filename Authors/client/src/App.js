import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import AddNewAuthor from './components/AddNewAuthor';
import EditAuthor from './components/EditAuthor';


function App() {

  return (
    <div className="container">
      <h1>Favorite Authors</h1>

      <BrowserRouter>
        <Routes>
        <Route element= {<Navigate to = "/author"/>} path = "/"/>
          <Route element = {<Main/>}
          path = "/author"/>
          <Route element = {<AddNewAuthor/>}
          path = "/author/new"/>
          <Route element = { <EditAuthor/>}
          path = "/author/edit/:id"/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
