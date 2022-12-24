import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './Components/Main';
import Form from './Components/Form';
import { useState } from 'react';
import Edit from './Components/Edit';
import Details from './Components/Details';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/pets/new' element={<Form />}/>
        <Route path='/pets/:id' element={<Details />}/>
        <Route path='/pets/:id/edit' element={<Edit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
