import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DropDownMenu from './components/DropDownMenu';
import ApiDetails from './components/ApiDetails';

function App() {
  // const [selectedValue, setSelectedValue] = useState('')
  // const [idValue, setIdValue] = useState('')
  // const [apiData, setApiData] = useState('')


  return (
    <BrowserRouter>
        <DropDownMenu/>
      <Routes>
        <Route path='/'/>
        <Route path='/details/:selectedValue/:id' element={<ApiDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
